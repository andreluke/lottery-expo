import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes"; // Verifique se esse caminho está correto
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../theme";

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate("Main"), 10000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Text style={style.title}>Bem-vindo ao App!</Text>
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Main")}>
        <Text style={style.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home; // Certifique-se de que essa linha esteja presente
