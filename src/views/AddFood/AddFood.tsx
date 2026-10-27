import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import Input from "../../components/Input";

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
        <View style={styles.legendContainer}> </View>
        <View style={styles.addFoodBtnContainer}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { padding: 12 },
  addFoodContainer: {
    marginVertical: 24,
  },
  addFoodLegend: { fontSize: 20, fontWeight: "bold" },
  legendContainer: {},
  addFoodBtnContainer: {},
});

export default AddFood;
