import { View, Text } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "../Safeoutput/Safeoutput.style";

function Safeoutput() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Reassurance:</Text>
      </View>
    </View>
  );
}
export default Safeoutput;
