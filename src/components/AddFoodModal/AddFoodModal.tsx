import React from "react";
import { Modal, View, StyleSheet } from "react-native";
const AddFoodModal = () => {
  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.content}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
});

export default AddFoodModal;
