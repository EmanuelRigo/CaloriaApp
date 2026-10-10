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
        <Text style={styles.addFoodLegend}>Agregar alimento</Text>
      </View>
      <View style={styles.searchContainer}>
        <Input
          placeholder="Nombre del alimento"
          value={foodName}
          onChangeText={setFoodName}
          error={foodNameError}
          returnKeyType="next"
        />
        <Input
          label="Calorías"
          placeholder="Ej. 250"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          leftIcon="flame-outline"
          error={caloriesError}
          helperText="Por porción"
          returnKeyType="done"
        />
        <View style={styles.passwordExample}>
          <Text style={styles.exampleTitle}>Ejemplo de contraseña</Text>
          <Input
            label="Contraseña"
            placeholder="Escribe una contraseña"
            secureTextEntry
          />
        </View>
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Agregar calorías</Text>
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
  },
  addFoodLegend: { fontSize: 20, fontWeight: "bold" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  passwordExample: {
    marginTop: 24,
  },
  exampleTitle: {
    color: "#4b5563",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  searchContainer: {
    gap: 18,
  },
  submitButton: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4ecb71",
    borderRadius: 10,
    marginTop: 8,
  },
});

export default AddFood;
