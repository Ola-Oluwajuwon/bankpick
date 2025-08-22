import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";
import { Button } from "../components/Button";

export const TransferScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const onSend = () => navigation.goBack();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Transfer</Text>
        <View style={styles.right} />
      </View>

      <View style={styles.body}>
        <Text style={[styles.label, { color: colors.text }]}>To</Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={to}
          onChangeText={setTo}
          placeholder="Recipient"
          placeholderTextColor={colors.secondaryText}
        />

        <Text style={[styles.label, { color: colors.text }]}>Amount</Text>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.border },
          ]}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="$0.00"
          placeholderTextColor={colors.secondaryText}
        />

        <Button
          title="Send"
          onPress={onSend}
          size="large"
          style={{ marginTop: SPACING.lg }}
        />
      </View>
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
  body: { paddingHorizontal: SPACING.lg, paddingTop: SPACING.lg },
  label: { fontSize: TYPOGRAPHY.sizes.base, marginBottom: SPACING.xs },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    fontSize: TYPOGRAPHY.sizes.base,
  },
});
