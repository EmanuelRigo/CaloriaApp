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
  container: {},
  leftContainer: {},
  rightContainer: {},
  name: {},
  portion: {},
  calories: {},
  button: {},
  buttonText: {},
});

export default MealItem;
