import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import Input from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";

const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const foodNameError =
    hasSubmitted && !foodName.trim() ? "Ingresa el nombre del alimento." : "";
  const caloriesError =
    hasSubmitted && !calories.trim() ? "Ingresa las calorías." : "";

  const handleSubmit = () => {
    setHasSubmitted(true);
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
          value={foodName}
          onChangeText={setFoodName}
          containerStyle={styles.searchInput}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Buscar alimento"
          style={styles.searchButton}
        >
          <MaterialIcons name="search" size={24} color="#fff" />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
