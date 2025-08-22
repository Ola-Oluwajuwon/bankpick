import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

export const ProfileScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const handleAvatarPress = () => {
    Alert.alert(
      "Profile Picture",
      "Choose an option",
      [
        { text: "Take Photo", onPress: () => console.log("Take Photo") },
        { text: "Choose from Library", onPress: () => console.log("Choose from Library") },
        { text: "Remove Current", onPress: () => setAvatarUri(null), style: "destructive" },
        { text: "Cancel", style: "cancel" },
      ]
    );
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
        <Text style={[styles.title, { color: colors.text }]}>My Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile" as never)}
          style={styles.right}
        >
          <Ionicons name="create" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={handleAvatarPress} style={styles.avatarContainer}>
            {avatarUri ? (
              <Image source={{ uri: avatarUri }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatarPlaceholder, { backgroundColor: colors.secondaryBackground }]}>
                <Ionicons name="person" size={40} color={colors.secondaryText} />
              </View>
            )}
            <View style={[styles.editIconContainer, { backgroundColor: colors.primary }]}>
              <Ionicons name="camera" size={16} color={colors.card} />
            </View>
          </TouchableOpacity>
          <Text style={[styles.avatarText, { color: colors.secondaryText }]}>
            Tap to change photo
          </Text>
        </View>

        {/* Profile Info Card */}
        <View style={[styles.card, { borderColor: colors.border }]}>
          <Text style={[styles.name, { color: colors.text }]}>Tanya Myroniuk</Text>
          <Text style={[styles.meta, { color: colors.secondaryText }]}>
            tanya.myroniuk@gmail.com
          </Text>
          <Text style={[styles.meta, { color: colors.secondaryText }]}>
            +8801712663389
          </Text>
        </View>

        {/* Navigation Items */}
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

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("RequestMoney" as never)}
        >
          <View
            style={[
              styles.rowIcon,
              { backgroundColor: colors.secondaryBackground },
            ]}
          >
            <Ionicons name="hand-left" size={20} color={colors.text} />
          </View>
          <Text style={[styles.rowText, { color: colors.text }]}>
            Request Money
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
  avatarSection: {
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: SPACING.sm,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  avatarText: {
    fontSize: TYPOGRAPHY.sizes.sm,
    textAlign: "center",
  },
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
