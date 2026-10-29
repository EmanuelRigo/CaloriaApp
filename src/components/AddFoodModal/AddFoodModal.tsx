import { MaterialIcons } from "@expo/vector-icons";
import React, { FC, useEffect, useState } from "react";
import { Modal, View, StyleSheet, Pressable, Text } from "react-native";
import Input from "../Input";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
};

const AddFoodModal: FC<AddFoodModalProps> = ({ visible, onClose }) => {
  const [calories, setCalories] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [portion, setPortion] = useState<string>("");
  useEffect(() => {
    setCalories("");
    setName("");
    setPortion("");
  }, [visible]);

  const handleAddPress = () => {
    setCalories("");
    setName("");
    setPortion("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar modal"
              style={styles.closeButton}
              onPress={onClose}
            >
              <MaterialIcons name="close" size={28} color="#000000" />
            </Pressable>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input
                value={calories}
                onChangeText={(text: string) => {
                  setCalories(text);
                }}
              ></Input>
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>CAL</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input
                value={name}
                onChangeText={(text: string) => {
                  setName(text);
                }}
              ></Input>
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Nombre</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.inputContainer}>
              <Input
                value={portion}
                onChangeText={(text: string) => {
                  setPortion(text);
                }}
              ></Input>
            </View>
            <View style={styles.legendContainer}>
              <Text style={styles.legend}>Porcion</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Agregar alimento"
              style={styles.button}
              disabled={
                calories.trim() === "" ||
                name.trim() === "" ||
                portion.trim() === ""
              }
              onPress={handleAddPress}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "75%",
    height: "50%",
    backgroundColor: "#fcfcfc",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  closeButton: {},
  closeContainer: { alignItems: "flex-end" },
  formItem: { flexDirection: "row", alignItems: "center" },
  inputContainer: { flex: 2 },
  legendContainer: { flex: 1 },
  legend: { fontWeight: "500" },
  buttonContainer: { alignItems: "flex-end" },
  button: {
    backgroundColor: "#4ecb71",
    paddingVertical: 8,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  buttonText: {
    backgroundColor: "#4ecb71",
    color: "#fff",
  },
});

export default AddFoodModal;
