import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

type Txn = {
  id: string;
  name: string;
  category: string;
  amount: string;
  isExpense: boolean;
};

const generateItems = (offset: number, count: number): Txn[] =>
  Array.from({ length: count }).map((_, i) => {
    const idx = offset + i + 1;
    return {
      id: String(idx),
      name: `Transaction ${idx}`,
      category: idx % 2 ? "Shopping" : "Entertainment",
      amount: idx % 3 ? "-$12.99" : "+$300.00",
      isExpense: Boolean(idx % 3),
    };
  });

export const TransactionHistoryScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [items, setItems] = useState<Txn[]>([]);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const PAGE_SIZE = 10;

  const loadPage = useCallback((nextPage: number) => {
    const data = generateItems(nextPage * PAGE_SIZE, PAGE_SIZE);
    setItems((prev) => [...prev, ...data]);
  }, []);

  useEffect(() => {
    loadPage(0);
  }, [loadPage]);

  const onEndReached = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    const next = page + 1;
    setTimeout(() => {
      loadPage(next);
      setPage(next);
      setLoadingMore(false);
    }, 400);
  };

  const renderItem: ListRenderItem<Txn> = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() =>
        navigation.navigate(
          "TransactionDetail" as never,
          { id: item.id } as never
        )
      }
    >
      <View
        style={[styles.icon, { backgroundColor: colors.secondaryBackground }]}
      >
        <Ionicons
          name={item.isExpense ? "arrow-up" : "arrow-down"}
          size={18}
          color={colors.text}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.meta, { color: colors.secondaryText }]}>
          {item.category}
        </Text>
      </View>
      <Text
        style={[
          styles.amount,
          { color: item.isExpense ? colors.text : colors.primary },
        ]}
      >
        {item.amount}
      </Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item: Txn) => item.id;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          Transaction History
        </Text>
        <View style={styles.right} />
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          paddingHorizontal: SPACING.lg,
          paddingBottom: SPACING.xl,
        }}
        onEndReachedThreshold={0.4}
        onEndReached={onEndReached}
      />
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
