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

export const TransactionsScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const onItemPress = (id: string) => {
    navigation.navigate("TransactionDetail" as never, { id } as never);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Transactions</Text>
        <View style={styles.right} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {Array.from({ length: 12 }).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => onItemPress(String(i + 1))}
            style={styles.row}
          >
            <View
              style={[
                styles.icon,
                { backgroundColor: colors.secondaryBackground },
              ]}
            >
              <Ionicons name="swap-vertical" size={20} color={colors.text} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: colors.text }]}>
                Transaction {i + 1}
              </Text>
              <Text style={[styles.meta, { color: colors.secondaryText }]}>
                Category • Today
              </Text>
            </View>
            <Text style={[styles.amount, { color: colors.text }]}>-$12.99</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 40,
    paddingBottom: SPACING.lg,
  },
  left: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  right: { width: 40, height: 40 },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  content: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xl },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  name: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  meta: { fontSize: TYPOGRAPHY.sizes.sm },
  amount: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
});
