import { FC } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

const renderItem = ({ item }) => <Text>- {item}</Text>

export const FocusHistory: FC<{ history: string[] | [] }> = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>We haven't focused on anything yet !</Text>
      </View>
    )

  return (
    <View style={styles.historyWrapper}>
      <Text style={styles.title}>Things we've focused on :</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  historyWrapper: { flex: 1, paddingHorizontal: spacing.md },
  item: { fontSize: fontSizes.sm, color: colors.toDefine2 },
  title: {
    fontWeight: "bold",
    color: colors.toDefine2,
    fontSize: fontSizes.md,
  },
})
