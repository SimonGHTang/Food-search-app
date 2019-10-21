import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    marginHorizontal: 15
  },
  iconStyle: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
  inputStyle: { flex: 1, fontSize: 18 }
});

export default SearchBar;