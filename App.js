import React, { useState } from "react"
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native"
import { colors } from "./src/utils/colors"
import { Focus } from "./src/features/focus"
import { Timer } from "./src/features/timer"

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)

  // {currentSubject ? (
  // ) : (
  //   <Focus addSubject={setCurrentSubject} />
  // )}
  return (
    <SafeAreaView style={styles.container}>
      <Timer focusSubject={currentSubject} onTimerEnd={() => {}} clearSubject={() => {}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primary,
  },
  text: { color: colors.toDefine2 },
})
