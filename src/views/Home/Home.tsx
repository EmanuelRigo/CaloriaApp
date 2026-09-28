import React from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";

import Header from "../../components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { navigation } = useNavigation();
  const handleAddCaloriesPress = () => {
    console.log("Add calories button pressed");
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
