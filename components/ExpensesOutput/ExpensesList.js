import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        key={(item) => item.id}
        renderItem={(itemData) => {
          return <ExpenseItem {...itemData.item} />;
        }}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create();
