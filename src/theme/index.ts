// src/themes/theme.ts
import { StyleSheet } from "react-native";

export const theme = {
  colors: {
    background: "#ffffff",
    text: "#333333",
    megaSena: {
      background: "#209869",
      text: "#ffffff",
    },
    quina: {
      background: "#260085",
      text: "#ffffff",
    },
    timemania: {
      background: "#FFF600",
      text: "#049645",
    },
    loading: "#209869",
  },
  fontSizes: {
    title: 24,
    subtitle: 14,
    text: 16,
  },
  spacing: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export const styles = StyleSheet.create({
  ballContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ball: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing.small,
  },
  number: {
    fontSize: theme.fontSizes.text,
    fontWeight: "bold",
  },
  subText: {
    fontSize: theme.fontSizes.subtitle,
    color: "#5d5d5d",
    marginTop: theme.spacing.small,
  },
  title: {
    fontSize: theme.fontSizes.title,
    alignSelf: "center",
    marginBottom: theme.spacing.large,
    fontWeight: "bold",
  },
});
