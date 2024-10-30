import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme } from '../theme';
import styles from './_styles';


const MegaSenaScreen: React.FC = () => {
  const { results, loading } = useLottery();

//   if (loading) {
//     return <ActivityIndicator size="large" color={theme.colors.megaSena.background} />;
//   }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const megaSenaResults = results?.megasena;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.title, alignSelf: "center", marginBottom: theme.spacing.large, fontWeight: "bold"}}>MEGA-SENA</Text>
      <View style={styles.ballContainer}>
      {megaSenaResults?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.megaSena.background} text={theme.colors.megaSena.text} spacing={theme.spacing.medium}/>
      ))}
      </View>
    <Text style={{fontSize: theme.fontSizes.subtitle, color: "#5d5d5d", marginTop: theme.spacing.small}}> {megaSenaResults.dataPorExtenso}</Text>
    </View>
  );
};

export default MegaSenaScreen;
