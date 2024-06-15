import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        key={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <View>
              <Text>{itemData.item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
