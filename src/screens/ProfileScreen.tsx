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

export const ProfileScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>My Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile" as never)}
          style={styles.right}
        >
          <Ionicons name="create" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, { borderColor: colors.border }]}>
          <Text style={[styles.name, { color: colors.text }]}>
            Tanya Myroniuk
          </Text>
          <Text style={[styles.meta, { color: colors.secondaryText }]}>
            tanya.myroniuk@gmail.com
          </Text>
          <Text style={[styles.meta, { color: colors.secondaryText }]}>
            +8801712663389
          </Text>
        </View>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("AllCards" as never)}
        >
          <View
            style={[
              styles.rowIcon,
              { backgroundColor: colors.secondaryBackground },
            ]}
          >
            <Ionicons name="card" size={20} color={colors.text} />
          </View>
          <Text style={[styles.rowText, { color: colors.text }]}>My Cards</Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.secondaryText}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("TransactionHistory" as never)}
        >
          <View
            style={[
              styles.rowIcon,
              { backgroundColor: colors.secondaryBackground },
            ]}
          >
            <Ionicons name="time" size={20} color={colors.text} />
          </View>
          <Text style={[styles.rowText, { color: colors.text }]}>
            Transaction History
          </Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={colors.secondaryText}
          />
        </TouchableOpacity>
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
  right: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  content: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xl },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  name: {
    fontSize: TYPOGRAPHY.sizes["2xl"],
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING.xs,
  },
  meta: { fontSize: TYPOGRAPHY.sizes.sm },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  rowText: {
    flex: 1,
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
});
