import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

interface Transaction {
  id: string;
  icon: string;
  name: string;
  category: string;
  amount: string;
  isExpense: boolean;
}

export const StatisticsScreen: React.FC = () => {
  const { colors } = useTheme();
  const [selectedMonth, setSelectedMonth] = useState(3); // January (index 3)

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

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
  ];

  const renderBalanceSection = () => (
    <View style={styles.balanceSection}>
      <Text style={[styles.balanceLabel, { color: colors.secondaryText }]}>
        Current Balance
      </Text>
      <Text style={[styles.balanceAmount, { color: colors.text }]}>
        $8,545.00
      </Text>
    </View>
  );

  const renderChart = () => (
    <View style={styles.chartContainer}>
      {/* Simple Chart Representation */}
      <View style={styles.chart}>
        <View style={styles.chartLine}>
          {/* Chart line with dots */}
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
          <View
            style={[
              styles.chartLineSegment,
              { backgroundColor: colors.primary },
            ]}
          />
          <View
            style={[styles.chartDot, { backgroundColor: colors.primary }]}
          />
        </View>

        {/* Highlighted point for selected month */}
        <View
          style={[styles.highlightedPoint, { borderColor: colors.primary }]}
        >
          <View
            style={[styles.highlightedDot, { backgroundColor: colors.primary }]}
          />
        </View>
      </View>
    </View>
  );

  const renderMonthSelector = () => (
    <View style={styles.monthSelector}>
      {months.map((month, index) => (
        <TouchableOpacity
          key={month}
          style={[
            styles.monthButton,
            {
              backgroundColor:
                index === selectedMonth ? colors.primary : "transparent",
            },
          ]}
          onPress={() => setSelectedMonth(index)}
        >
          <Text
            style={[
              styles.monthText,
              {
                color: index === selectedMonth ? colors.card : colors.text,
              },
            ]}
          >
            {month}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderTransaction = (transaction: Transaction) => (
    <View key={transaction.id} style={styles.transactionItem}>
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
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={[styles.title, { color: colors.text }]}>Statistics</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Balance Section */}
        {renderBalanceSection()}

        {/* Chart */}
        {renderChart()}

        {/* Month Selector */}
        {renderMonthSelector()}

        {/* Transactions */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={[styles.transactionsTitle, { color: colors.text }]}>
              Transaction
            </Text>
            <TouchableOpacity>
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
  headerTitle: {
    flex: 1,
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  balanceLabel: {
    fontSize: TYPOGRAPHY.sizes.base,
    marginBottom: SPACING.sm,
  },
  balanceAmount: {
    fontSize: TYPOGRAPHY.sizes["3xl"],
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  chartContainer: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  chart: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  chartLine: {
    flexDirection: "row",
    alignItems: "center",
    height: 4,
  },
  chartDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chartLineSegment: {
    width: 30,
    height: 2,
    marginHorizontal: 4,
  },
  highlightedPoint: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -15,
    marginTop: -15,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightedDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  monthButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
    minWidth: 50,
    alignItems: "center",
  },
  monthText: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.medium,
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
