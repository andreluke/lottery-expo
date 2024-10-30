import { StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
    ball: {
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing.small,
    },
    number: {
      fontSize: theme.fontSizes.text,
      fontWeight: 'bold',
    },
  });

export default styles