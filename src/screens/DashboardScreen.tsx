import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";
import { useNavigation } from "@react-navigation/native";

interface Transaction {
  id: string;
  icon: string;
  name: string;
  category: string;
  amount: string;
  isExpense: boolean;
}

export const DashboardScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const nav = navigation as any;

  const transactions: Transaction[] = [
    {
      id: "1",
      icon: "logo-apple",
      name: "Apple Store",
      category: "Entertainment",
      amount: "$5,99",
      isExpense: true,
    },
    {
      id: "2",
      icon: "musical-notes",
      name: "Spotify",
      category: "Music",
      amount: "$12,99",
      isExpense: true,
    },
    {
      id: "3",
      icon: "download",
      name: "Money Transfer",
      category: "Transaction",
      amount: "$300",
      isExpense: false,
    },
    {
      id: "4",
      icon: "cart",
      name: "Grocery",
      category: "Shopping",
      amount: "$88",
      isExpense: true,
    },
  ];

  const renderCreditCard = () => (
    <View
      style={[
        styles.creditCard,
        { backgroundColor: colors.tertiaryBackground },
      ]}
    >
      {/* Card Header */}
      <View style={styles.cardHeader}>
        <View style={styles.chipIcon}>
          <Ionicons name="card" size={20} color={colors.text} />
        </View>
        <View style={styles.nfcIcon}>
          <Ionicons name="wifi" size={20} color={colors.text} />
        </View>
      </View>

      {/* Card Number */}
      <Text style={[styles.cardNumber, { color: colors.text }]}>
        4562 1122 4595 7852
      </Text>

      {/* Card Footer */}
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
        onPress={() => nav.navigate("Transfer")}
      >
        <View style={[styles.actionIcon, { backgroundColor: colors.primary }]}>
          <Ionicons name="cash" size={24} color={colors.card} />
        </View>
        <Text style={[styles.actionText, { color: colors.secondaryText }]}>
          Loan
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

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View
            style={[styles.profilePic, { backgroundColor: colors.primary }]}
          >
            <Text style={[styles.profileText, { color: colors.card }]}>TM</Text>
          </View>
          <View>
            <Text style={[styles.welcomeText, { color: colors.secondaryText }]}>
              Welcome back,
            </Text>
            <Text style={[styles.userName, { color: colors.text }]}>
              Tanya Myroniuk
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => nav.navigate("Notifications")}
        >
          <Ionicons name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Credit Card */}
        {renderCreditCard()}

        {/* Action Buttons */}
        {renderActionButtons()}

        {/* Transactions */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={[styles.transactionsTitle, { color: colors.text }]}>
              Transaction
            </Text>
            <TouchableOpacity onPress={() => nav.navigate("Transactions")}>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionsList}>
            {transactions.map(renderTransaction)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 40,
    paddingBottom: SPACING.lg,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  profileText: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  welcomeText: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  userName: {
    fontSize: TYPOGRAPHY.sizes.base,
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
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  transactionsSection: {
    paddingHorizontal: SPACING.lg,
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
  transactionsList: {
    gap: SPACING.md,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.sm,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  transactionInfo: {
    flex: 1,
  },
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
