import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";
import { Button } from "../components/Button";

export const RequestMoneyScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const contacts = [
    { id: "1", name: "John Doe", phone: "+1234567890" },
    { id: "2", name: "Jane Smith", phone: "+0987654321" },
    { id: "3", name: "Bob Johnson", phone: "+1122334455" },
  ];

  const onRequest = () => {
    if (!amount || !selectedContact) {
      Alert.alert("Error", "Please fill in amount and select a contact");
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      Alert.alert("Error", "Please enter a valid amount");
      return;
    }

    Alert.alert(
      "Request Sent", 
      `Money request sent to ${contacts.find(c => c.id === selectedContact)?.name} for $${amount}`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
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
        <Text style={[styles.title, { color: colors.text }]}>Request Money</Text>
        <View style={styles.right} />
      </View>

      <View style={styles.body}>
        <Text style={[styles.label, { color: colors.text }]}>Amount</Text>
        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
          <Text style={[styles.currencySymbol, { color: colors.text }]}>$</Text>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor={colors.secondaryText}
          />
        </View>

        <Text style={[styles.label, { color: colors.text }]}>Select Contact</Text>
        <View style={[styles.contactContainer, { borderColor: colors.border }]}>
          {contacts.map((contact) => (
            <TouchableOpacity
              key={contact.id}
              style={[
                styles.contactItem,
                selectedContact === contact.id && { backgroundColor: colors.primary + "20" }
              ]}
              onPress={() => setSelectedContact(contact.id)}
            >
              <View style={[styles.contactAvatar, { backgroundColor: colors.secondaryBackground }]}>
                <Text style={[styles.contactInitial, { color: colors.text }]}>
                  {contact.name.charAt(0)}
                </Text>
              </View>
              <View style={styles.contactInfo}>
                <Text style={[styles.contactName, { color: colors.text }]}>
                  {contact.name}
                </Text>
                <Text style={[styles.contactPhone, { color: colors.secondaryText }]}>
                  {contact.phone}
                </Text>
              </View>
              {selectedContact === contact.id && (
                <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.label, { color: colors.text }]}>Note (Optional)</Text>
        <TextInput
          style={[styles.noteInput, { color: colors.text, borderColor: colors.border }]}
          value={note}
          onChangeText={setNote}
          placeholder="Add a note..."
          placeholderTextColor={colors.secondaryText}
          multiline
          numberOfLines={3}
        />

        <Button
          title="Send Request"
          onPress={onRequest}
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
  right: { width: 40 },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  body: { paddingHorizontal: SPACING.lg, paddingTop: SPACING.lg },
  label: {
    fontSize: TYPOGRAPHY.sizes.base,
    marginBottom: SPACING.xs,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  currencySymbol: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    paddingVertical: SPACING.md,
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  contactContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: SPACING.lg,
    overflow: "hidden",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  contactInitial: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  contactInfo: { flex: 1 },
  contactName: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    marginBottom: SPACING.xs,
  },
  contactPhone: {
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    fontSize: TYPOGRAPHY.sizes.base,
    textAlignVertical: "top",
  },
});
