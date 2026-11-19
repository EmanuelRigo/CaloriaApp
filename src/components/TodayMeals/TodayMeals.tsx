import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MealItem from "../MealItem/MealItem";
import { Meal } from "../../types";

type TodayMealsProps = {
  foods: Meal[];
};

const TodayMeals: FC<TodayMealsProps> = ({ foods }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comidas</Text>
      <ScrollView style={styles.content}></ScrollView>
      {foods?.map((meal: Meal, index: number) => (
        <MealItem key={`today-meal-item${meal.name}-${index}`} {...meal} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  title: { fontSize: 16 },
  content: { marginVertical: 16 },
});

export default TodayMeals;
