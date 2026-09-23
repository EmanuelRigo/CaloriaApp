import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header/Header";

const AddFood = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
});

export default AddFood;
