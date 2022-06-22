import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Countdown } from "../components/countdown"
import { RoundedButton } from "../components/rounded-button"
import { colors } from "../utils/colors"

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown onProgress={() => {}} onEnd={() => {}} isPaused={!isStarted} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? "pause" : "start"}
          onPress={() => setIsStarted(prevState => !prevState)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  countdown: { flex: 0.5, alignItems: "center", justifyContent: "center" },
  buttonWrapper: {
    flexDirection: "row-reverse",
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
})
