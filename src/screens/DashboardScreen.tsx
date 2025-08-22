import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: string;
  icon: string;
  isExpense: boolean;
}

export const DashboardScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const nav = navigation as any;

  const transactions: Transaction[] = [
    {
      id: "1",
      name: "Apple Store",
      category: "Entertainment",
      amount: "$5.99",
      icon: "logo-apple",
      isExpense: true,
    },
    {
      id: "2",
      name: "Salary",
      category: "Income",
      amount: "$3,500.00",
      icon: "cash",
      isExpense: false,
    },
    {
      id: "3",
      name: "Grocery",
      category: "Shopping",
      amount: "$88.00",
      icon: "cart",
      isExpense: true,
    },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={[styles.greeting, { color: colors.secondaryText }]}>
          Good morning
        </Text>
        <Text style={[styles.name, { color: colors.text }]}>Tanya</Text>
      </View>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => nav.navigate("Notifications")}
      >
        <Ionicons name="search" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderCreditCard = () => (
    <View
      style={[
        styles.creditCard,
        { backgroundColor: colors.tertiaryBackground },
      ]}
    >
      <View style={styles.cardHeader}>
        <View style={styles.chipIcon}>
          <Ionicons name="card" size={20} color={colors.text} />
        </View>
        <View style={styles.nfcIcon}>
          <Ionicons name="wifi" size={20} color={colors.text} />
        </View>
      </View>

      <Text style={[styles.cardNumber, { color: colors.text }]}>
        4562 1122 4595 7852
      </Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardInfo}>
          <Text style={[styles.cardLabel, { color: colors.secondaryText }]}>
            Expiry Date
          </Text>
          <Text style={[styles.cardValue, { color: colors.text }]}>
            24/2000
          </Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={[styles.cardLabel, { color: colors.secondaryText }]}>
            CVV
          </Text>
          <Text style={[styles.cardValue, { color: colors.text }]}>6986</Text>
        </View>
        <View style={styles.mastercardLogo}>
          <Text style={[styles.mastercardText, { color: colors.text }]}>
            Mastercard
          </Text>
        </View>
      </View>
    </View>
  );

  const renderActionButtons = () => (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => nav.navigate("Transfer")}
      >
        <View style={[styles.actionIcon, { backgroundColor: colors.primary }]}>
          <Ionicons name="arrow-up" size={24} color={colors.card} />
        </View>
        <Text style={[styles.actionText, { color: colors.secondaryText }]}>
          Sent
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => nav.navigate("Transfer")}
      >
        <View style={[styles.actionIcon, { backgroundColor: colors.primary }]}>
          <Ionicons name="arrow-down" size={24} color={colors.card} />
        </View>
        <Text style={[styles.actionText, { color: colors.secondaryText }]}>
          Receive
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => nav.navigate("RequestMoney")}
      >
        <View style={[styles.actionIcon, { backgroundColor: colors.primary }]}>
          <Ionicons name="hand-left" size={24} color={colors.card} />
        </View>
        <Text style={[styles.actionText, { color: colors.secondaryText }]}>
          Request
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => nav.navigate("Transfer")}
      >
        <View style={[styles.actionIcon, { backgroundColor: colors.primary }]}>
          <Ionicons name="cloud-upload" size={24} color={colors.card} />
        </View>
        <Text style={[styles.actionText, { color: colors.secondaryText }]}>
          Topup
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderTransaction = (transaction: Transaction) => (
    <TouchableOpacity
      key={transaction.id}
      style={styles.transactionItem}
      onPress={() => nav.navigate("TransactionDetail", { id: transaction.id })}
    >
      <View
        style={[
          styles.transactionIcon,
          { backgroundColor: colors.secondaryBackground },
        ]}
      >
        <Ionicons
          name={transaction.icon as keyof typeof Ionicons.glyphMap}
          size={20}
          color={colors.text}
        />
      </View>
      <View style={styles.transactionInfo}>
        <Text style={[styles.transactionName, { color: colors.text }]}>
          {transaction.name}
        </Text>
        <Text
          style={[styles.transactionCategory, { color: colors.secondaryText }]}
        >
          {transaction.category}
        </Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: transaction.isExpense ? colors.text : colors.primary },
        ]}
      >
        {transaction.isExpense ? "- " : ""}
        {transaction.amount}
      </Text>
    </TouchableOpacity>
  );

  const renderTransactionsSection = () => (
    <View style={styles.transactionsSection}>
      <View style={styles.transactionsHeader}>
        <Text style={[styles.transactionsTitle, { color: colors.text }]}>
          Recent Transaction
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate("Transactions")}
        >
          <Text style={[styles.seeAllText, { color: colors.primary }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {transactions.map(renderTransaction)}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderCreditCard()}
        {renderActionButtons()}
        {renderTransactionsSection()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 40,
    paddingBottom: SPACING.lg,
  },
  headerLeft: { flex: 1 },
  greeting: {
    fontSize: TYPOGRAPHY.sizes.sm,
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  creditCard: {
    marginHorizontal: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: 16,
    marginBottom: SPACING.xl,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.xl,
  },
  chipIcon: {
    width: 40,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  nfcIcon: {
    width: 40,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.xl,
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardInfo: {
    alignItems: "flex-start",
  },
  cardLabel: {
    fontSize: TYPOGRAPHY.sizes.xs,
    marginBottom: SPACING.xs,
  },
  cardValue: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  mastercardLogo: {
    alignItems: "center",
  },
  mastercardText: {
    fontSize: TYPOGRAPHY.sizes.xs,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  actionText: {
    fontSize: TYPOGRAPHY.sizes.sm,
    textAlign: "center",
  },
  transactionsSection: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  transactionsTitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  seeAllText: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
    marginBottom: SPACING.sm,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  transactionInfo: { flex: 1 },
  transactionName: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    marginBottom: SPACING.xs,
  },
  transactionCategory: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  transactionAmount: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
});
