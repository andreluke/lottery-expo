import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme, styles } from '../theme';
import { LotteryResult } from '../types/ILottery';

const TimemaniaScreen: React.FC = () => {
  const { results, loading } = useLottery();

  // if (loading) {
  //   return <ActivityIndicator size="large" color={theme.colors.timemania.background} />;
  // }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const timemaniaResults:LotteryResult | undefined = results?.timemania;

  return (
    <View style={styles.container}>
       <Text style={styles.title}>TIMEMANIA</Text>
    <View style={styles.ballContainer}>
    {timemaniaResults?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.timemania.background} text={theme.colors.timemania.text} spacing={theme.spacing.small}/>
      ))}
    </View>
    <Text style={styles.subText}> {timemaniaResults?.dataPorExtenso}</Text>
    </View>
  );
};

export default TimemaniaScreen;
