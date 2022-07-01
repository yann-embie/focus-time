import React, { useState } from "react"
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native"
import { colors } from "./src/utils/colors"
import { Focus } from "./src/features/focus"
import { Timer } from "./src/features/timer"
import { FocusHistory } from "./src/features/focus-history"

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => setHistory([...history, currentSubject])}
          clearSubject={() => setCurrentSubject(null)}
        />
      ) : (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.secondary,
  },
})
