import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme, styles } from '../theme';
import { LotteryResult } from '../types/ILottery';
import { StatusBar } from 'expo-status-bar';

const MegaSenaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

//   if (loading) {
//     return <ActivityIndicator size="large" color={theme.colors.megaSena.background} />;
//   }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  if(error){
    return <Text style={{fontSize: theme.fontSizes.text}}>Ocorreu um erro: {error}</Text>
  }

  const megaSenaResults:LotteryResult | undefined = results?.megasena;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.ballContainer}>
      {megaSenaResults?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.megaSena.background} text={theme.colors.megaSena.text} spacing={theme.spacing.medium}/>
      ))}
      </View>
      <Text style={styles.subText}> {megaSenaResults?.dataPorExtenso}</Text>
    </View>
  );
};

export default MegaSenaScreen;
