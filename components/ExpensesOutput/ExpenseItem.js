import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const ExpenseItem = ({ title, amount, date }) => {
  const { navigate } = useNavigation();
  function expensePressHandler() {
    navigate("ManageExpense");
  }
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View style={styles.expenseItem}>
        <View style={styles.firstContainer}>
          <Text style={[styles.textBase, styles.description]}>{title}</Text>
          <Text style={styles.textBase}>{moment(date).calendar()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  textBase: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  firstContainer: {},
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
