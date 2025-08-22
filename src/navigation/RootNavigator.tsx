import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { TransactionsScreen } from "../screens/TransactionsScreen";
import { TransactionDetailScreen } from "../screens/TransactionDetailScreen";
import { TransferScreen } from "../screens/TransferScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import { AddCardScreen } from "../screens/AddCardScreen";
import { AllCardsScreen } from "../screens/AllCardsScreen";
import { TransactionHistoryScreen } from "../screens/TransactionHistoryScreen";
import { ChangePasswordScreen } from "../screens/ChangePasswordScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { RequestMoneyScreen } from "../screens/RequestMoneyScreen";

export type RootParamList = {
  Tabs: undefined;
  Transactions: undefined;
  TransactionDetail: { id: string };
  Transfer: undefined;
  Notifications: undefined;
  Profile: undefined;
  EditProfile: undefined;
  AddCard: undefined;
  AllCards: undefined;
  TransactionHistory: undefined;
  ChangePassword: undefined;
  Terms: undefined;
  RequestMoney: undefined;
};

const Stack = createStackNavigator<RootParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
      <Stack.Screen name="Transfer" component={TransferScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="AllCards" component={AllCardsScreen} />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="RequestMoney" component={RequestMoneyScreen} />
    </Stack.Navigator>
  );
};
