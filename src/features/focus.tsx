import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-paper"
import { RoundedButton } from "../components/rounded-button"
import { spacing } from "../utils/sizes"

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoComplete={false}
          label="What would you like to focus on ?"
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.lg,
    justifyContent: "flex-start",
  },
  button: { justifyContent: "flex-end" },
  textInput: { flex: 1, marginRight: spacing.md },
})
