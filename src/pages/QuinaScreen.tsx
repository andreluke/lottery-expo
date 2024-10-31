import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme, styles } from '../theme';
import { LotteryResult } from '../types/ILottery';

const QuinaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

  // if (loading) {
  //   return <ActivityIndicator size="large" color={theme.colors.quina.background} />;
  // }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  if(error){
    return <Text style={{fontSize: theme.fontSizes.text}}>Ocorreu um erro: {error}</Text>
  }

  const quinaResultados:LotteryResult | undefined = results?.quina;

  return (
    <View style={styles.container}>
       <Text style={styles.title}>QUINA</Text>
     <View style={styles.ballContainer}>
     {quinaResultados?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.quina.background} text={theme.colors.quina.text} spacing={theme.spacing.medium}/>
      ))}
     </View>
     <Text style={styles.subText}> {quinaResultados?.dataPorExtenso}</Text>
    </View>
  );
};

export default QuinaScreen;
