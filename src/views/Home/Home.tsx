import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View style={styles.leftContainer}>
          <Text>Calories</Text>
        </View>
        <View style={styles.rightContainer}></View>
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
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
