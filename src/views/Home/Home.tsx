import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <Text>Calories</Text>

          <Button
            title="Add calories"
            onPress={() => console.log("Button pressed")}
          />
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
  content: {
    flex: 1,
    flexDirection: "row",
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
