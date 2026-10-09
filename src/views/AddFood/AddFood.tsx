import React from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../../components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";

const AddFood = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}>Add food</Text>
        </View>
        <View style={styles.addFoodButtonContainer}>
          <Pressable>
            <Text style={styles.buttonText}>Add calories</Text>

            <MaterialIcons name="add" size={20} color="red" />
          </Pressable>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>{/* <Input></Input> */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  addFoodContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  legendContainer: {
    flex: 1,
  },
  addFoodButtonContainer: { flex: 1, alignItems: "flex-end" },
  addFoodLegend: { fontSize: 14, fontWeight: "bold" },
  buttonText: { color: "red", fontSize: 14, fontWeight: "bold" },
  inputContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddFood;
