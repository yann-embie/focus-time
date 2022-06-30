import { Dispatch, FC, SetStateAction } from "react"
import { StyleSheet, View } from "react-native"
import { RoundedButton } from "../components/rounded-button"

export const Timing: FC<{ onChangeTime: Dispatch<SetStateAction<number>> }> = ({
  onChangeTime,
}) => {
  return (
    <>
      <View>
        <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
      </View>
      <View>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
})
