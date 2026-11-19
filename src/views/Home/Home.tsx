import React, { useCallback, useState } from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";

import Header from "../../components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Meal, RootStackParamList } from "../../types";
import useFoodStorage from "../../hooks/useFoodStorage";
import TodayCalories from "../../components/TodayCalories";
import { TodayCaloriesProps } from "../../components/TodayCalories/TodayCalories";
import TodayMeals from "../../components/TodayMeals";

const totalCaloriesPerDay = 2000;

const Home = () => {
  const [todayFoods, setTodayFoods] = useState<Meal[]>([]);
  const [todayStadistics, setTodayStatistics] = useState<TodayCaloriesProps>(
    {},
  );

  const { onGetTodayFoods } = useFoodStorage();

  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  const calculateTodayStatistics = (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals.reduce(
        (acum, curr) => acum + Number(curr.calories),
        0,
      );
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStatistics({
        total: totalCaloriesPerDay,
        consumed: caloriesConsumed,
        remaining: remainingCalories,
        percentage,
      });
    } catch (error) {
      console.error("Error calculating today's statistics:", error);
    }
  };

  const loadTodayFoods = useCallback(async () => {
    try {
      const todayFoodResponse = (await onGetTodayFoods()) as Meal[];
      calculateTodayStatistics(todayFoodResponse);

      console.log("Today's foods2:", todayFoodResponse);
      setTodayFoods(todayFoodResponse);
      // Evita re-render si los datos no cambiaron

      // setTodayFoods((prev) =>
      //   JSON.stringify(prev) === JSON.stringify(todayFoodResponse)
      //     ? prev
      //     : todayFoodResponse,
      // );
    } catch (error) {
      console.error("Error loading today's foods:", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      void loadTodayFoods();
    }, [loadTodayFoods]),
  );

  const handleAddCaloriesPress = () => {
    navigate("AddFood");
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.caloriesContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.caloriesLegend}>Calories</Text>
        </View>

        <View style={styles.rightContainer}>
          <Pressable style={styles.button} onPress={handleAddCaloriesPress}>
            <Text style={styles.buttonText}>Add calories</Text>

            <MaterialIcons name="add" size={20} color="white" />
          </Pressable>
        </View>
      </View>
      <View>
        <TodayCalories {...todayStadistics} />
        <TodayMeals foods={todayFoods} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#4ecb71",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  caloriesLegend: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
