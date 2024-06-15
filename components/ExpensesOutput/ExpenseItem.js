import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View>
        <Text>{description}</Text>
        <Text>{date}</Text>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
