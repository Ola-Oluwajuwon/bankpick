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
import { useNavigation } from "@react-navigation/native";

interface SpendingCategory {
  id: string;
  icon: string;
  name: string;
  description: string;
  amount: string;
}

export const MyCardsScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [spendingLimit, setSpendingLimit] = useState(4600);

  const spendingCategories: SpendingCategory[] = [
    {
      id: "1",
      icon: "logo-apple",
      name: "Apple Store",
      description: "Entertainment",
      amount: "$5,99",
    },
    {
      id: "2",
      icon: "musical-notes",
      name: "Spotify",
      description: "Music",
      amount: "$12,99",
    },
    {
      id: "3",
      icon: "cart",
      name: "Grocery",
      description: "Shopping",
      amount: "$88",
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

  const renderSpendingCategories = () => (
    <View style={styles.spendingSection}>
      {spendingCategories.map((category) => (
        <View key={category.id} style={styles.categoryItem}>
          <View
            style={[
              styles.categoryIcon,
              { backgroundColor: colors.secondaryBackground },
            ]}
          >
            <Ionicons
              name={category.icon as keyof typeof Ionicons.glyphMap}
              size={20}
              color={colors.text}
            />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={[styles.categoryName, { color: colors.text }]}>
              {category.name}
            </Text>
            <Text
              style={[
                styles.categoryDescription,
                { color: colors.secondaryText },
              ]}
            >
              {category.description}
            </Text>
          </View>
          <Text style={[styles.categoryAmount, { color: colors.text }]}>
            - {category.amount}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderSpendingLimit = () => (
    <View style={styles.spendingLimitSection}>
      <Text style={[styles.spendingLimitTitle, { color: colors.text }]}>
        Monthly spending limit
      </Text>

      <View
        style={[
          styles.limitContainer,
          { backgroundColor: colors.secondaryBackground },
        ]}
      >
        <Text style={[styles.limitAmount, { color: colors.text }]}>
          Amount: $8,545.00
        </Text>

        {/* Simple Slider Representation */}
        <View style={styles.sliderContainer}>
          <View
            style={[styles.sliderTrack, { backgroundColor: colors.border }]}
          >
            <View
              style={[
                styles.sliderFill,
                {
                  backgroundColor: colors.primary,
                  width: `${(spendingLimit / 10000) * 100}%`,
                },
              ]}
            />
            <View
              style={[
                styles.sliderThumb,
                {
                  backgroundColor: colors.primary,
                  left: `${(spendingLimit / 10000) * 100}%`,
                  marginLeft: -10,
                },
              ]}
            />
          </View>

          <View style={styles.sliderLabels}>
            <Text style={[styles.sliderLabel, { color: colors.text }]}>$0</Text>
            <Text style={[styles.sliderValue, { color: colors.primary }]}>
              ${spendingLimit.toLocaleString()}
            </Text>
            <Text style={[styles.sliderLabel, { color: colors.text }]}>
              $10,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={[styles.title, { color: colors.text }]}>My Cards</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => (navigation as any).navigate("AddCard")}
        >
          <Ionicons name="add" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Credit Card */}
        {renderCreditCard()}

        {/* Spending Categories */}
        {renderSpendingCategories()}

        {/* Spending Limit */}
        {renderSpendingLimit()}
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
  addButton: {
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
  spendingSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    marginBottom: SPACING.xs,
  },
  categoryDescription: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  categoryAmount: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
  spendingLimitSection: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  spendingLimitTitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.lg,
  },
  limitContainer: {
    padding: SPACING.lg,
    borderRadius: 16,
  },
  limitAmount: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    marginBottom: SPACING.lg,
  },
  sliderContainer: {
    marginBottom: SPACING.md,
  },
  sliderTrack: {
    height: 4,
    borderRadius: 2,
    position: "relative",
    marginBottom: SPACING.md,
  },
  sliderFill: {
    height: "100%",
    borderRadius: 2,
  },
  sliderThumb: {
    position: "absolute",
    top: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sliderLabel: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  sliderValue: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
});
