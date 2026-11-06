import { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { Meal } from "../../types";
import { MaterialIcons } from "@expo/vector-icons";

const MealItem: FC<Meal> = ({ calories, name, portion }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Pressed");
          }}
        >
          <MaterialIcons
            style={styles.buttonText}
            name="add-circle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.calories}>{calories} cal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ade8af",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
  },
  leftContainer: { flex: 1, justifyContent: "center" },
  rightContainer: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
  name: {
    fontSize: 18,
    fontWeight: 500,
  },
  portion: { fontSize: 13, color: "#808080", fontWeight: 500 },
  calories: { fontSize: 18, fontWeight: 500 },
  button: {},
  buttonText: { marginBottom: -8, marginRight: 4 },
});

export default MealItem;
