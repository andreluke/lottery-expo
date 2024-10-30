import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme } from '../theme';
import styles from './_styles';

const QuinaScreen: React.FC = () => {
  const { results, loading } = useLottery();

  // if (loading) {
  //   return <ActivityIndicator size="large" color={theme.colors.quina.background} />;
  // }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const quinaResultados = results?.quina;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.title, alignSelf: "center", marginBottom: theme.spacing.large, fontWeight: "bold"}}>QUINA</Text>
     <View style={styles.ballContainer}>
     {quinaResultados?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.quina.background} text={theme.colors.quina.text} spacing={theme.spacing.medium}/>
      ))}
     </View>
    <Text style={{fontSize: theme.fontSizes.subtitle, color: "#5d5d5d", marginTop: theme.spacing.small}}> {quinaResultados.dataPorExtenso}</Text>
    </View>
  );
};

export default QuinaScreen;
