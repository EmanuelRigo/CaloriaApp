import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const staticInfo = {
  name: "Juan Ortiz",
  uri: "https://avatars.githubusercontent.com/u/1056795?v=4",
};

const Header = () => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      {canGoBack() && (
        <Pressable onPress={goBack} style={styles.arrowBackContainer}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Pressable>
      )}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{`Hello ${staticInfo.name}`}</Text>
        <Text style={styles.subtitle}>Welcome back to your goal!</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: staticInfo.uri }} style={styles.profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  arrowBackContainer: { marginLeft: -4 },
  leftContainer: { flex: 1, justifyContent: "center" },
  rightContainer: { flex: 1, alignItems: "flex-end", justifyContent: "center" },
  name: { fontSize: 14, fontWeight: "bold" },
  subtitle: { fontSize: 12, color: "#808080" },
  profileImage: { height: 40, width: 40, borderRadius: 24 },
});

export default Header;
