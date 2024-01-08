import { View, Text } from "react-native";
import styles from "../Safeoutput/Safeoutput.style";
import Check from "../../common/check/Check";

function Safeoutput() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.reassurance}>Reassurance:</Text>
        <Text style={styles.text}>
          Based on our current research findings, this sunscreen has been
          determined to be safe for marine life.
        </Text>
      </View>
      <Check />
    </View>
  );
}

export default Safeoutput;
