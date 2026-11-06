import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import Header from "../../components/Header/Header";
import Input from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import AddFoodModal from "../../components/AddFoodModal";
import useFoodStorage from "../../hooks/useFoodStorage";
import { Meal } from "../../types";
import MealItem from "../../components/MealItem";

const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [foods, setFoods] = useState<Meal[]>([]); // Assuming Meal is the type for food items
  const [search, setSearch] = useState<string>("");
  const { onGetFoods } = useFoodStorage();

  const loadFoods = async () => {
    try {
      const foodsResponse = await onGetFoods();
      setFoods(foodsResponse);
      console.log("Foods retrieved:", foodsResponse);
    } catch (error) {
      console.error("Error retrieving foods:", error);
      console.error(error);
    }
  };

  const foodNameError =
    hasSubmitted && !foodName.trim() ? "Ingresa el nombre del alimento." : "";
  const caloriesError =
    hasSubmitted && !calories.trim() ? "Ingresa las calorías." : "";

  const handleSubmit = () => {
    setHasSubmitted(true);
  };
  const handleModalClose = async (shouldUpdate?: boolean) => {
    if (shouldUpdate) {
      Alert.alert("Comida guardada exitosamente");
      loadFoods();
    }
    setVisible(false);
  };

  useEffect(() => {
    loadFoods().catch(null);
  }, []);

  const handleSearchPress = async () => {
    try {
      const result = await onGetFoods();
      setFoods(
        result.filter((item: Meal) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        ),
      );
    } catch (error) {
      console.error("Error searching foods:", error);
      setFoods([]); // Clear the foods list on error
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}>Add Food</Text>
        </View>
        <View style={styles.addFoodBtnContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <MaterialIcons
              style={styles.buttonText}
              name="arrow-back"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Input
          placeholder="apple, pie, soda..."
          value={search}
          onChangeText={(text: string) => setSearch(text)}
          containerStyle={styles.searchInput}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Buscar alimento"
          style={styles.searchButton}
          onPress={() => {
            console.log("Buscar alimentos");
            setVisible(true);
            console.log("Modal visible:", visible);
          }}
        >
          <MaterialIcons name="add" size={24} color="#fff" />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Buscar alimento"
          style={styles.searchButton}
          onPress={handleSearchPress}
        >
          <MaterialIcons name="search" size={24} color="#fff" />
        </Pressable>
      </View>
      <ScrollView style={styles.content}>
        {foods?.map((meal: Meal) => (
          <MealItem key={`my-meal-item-${meal.name}`} {...meal} />
        ))}
      </ScrollView>
      <AddFoodModal visible={visible} onClose={handleModalClose} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: {},
  contentContainer: { padding: 12 },
  addFoodContainer: {
    marginVertical: 24,
    flex: 1,

    flexDirection: "row",
  },
  addFoodLegend: { fontSize: 20, fontWeight: "bold" },
  legendContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addFoodBtnContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchInput: { flex: 1 },
  searchButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4ecb71",
    borderRadius: 10,
  },
});

export default AddFood;
