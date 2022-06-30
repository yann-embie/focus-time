import { useKeepAwake } from "expo-keep-awake"
import React, { useState } from "react"
import { View, StyleSheet, Text, Vibration } from "react-native"
import { ProgressBar } from "react-native-paper"
import { Countdown } from "../components/countdown"
import { RoundedButton } from "../components/rounded-button"
import { colors } from "../utils/colors"
import { spacing } from "../utils/sizes"
import { Timing } from "./timing"

const ONE_SECOND_IN_MS = 1000

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
]

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [minutes, setMinutes] = useState(0.1)

  const onEnd = reset => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    reset()
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes={minutes} onProgress={setProgress} onEnd={onEnd} isPaused={!isStarted} />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on :</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} color={colors.toDefine} style={{ height: spacing.sm }} />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? "pause" : "start"}
          onPress={() => setIsStarted(prevState => !prevState)}
        />
      </View>
      <View style={styles.clearButtonWrapper}>
        <RoundedButton title={"-"} size={50} onPress={() => clearSubject()} />
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
  timingWrapper: {
    flex: 0.1,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  clearButtonWrapper: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: colors.toDefine2, textAlign: "center", fontWeight: "700" },
  task: { color: colors.toDefine2, textAlign: "center" },
})
