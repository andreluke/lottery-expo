import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLottery } from '../hooks/useContext';
import Ball from '../components/Ball';
import { theme } from '../theme';
import { styles } from '../theme';

const TimemaniaScreen: React.FC = () => {
  const { results, loading } = useLottery();

  // if (loading) {
  //   return <ActivityIndicator size="large" color={theme.colors.timemania.background} />;
  // }

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const timemaniaResults = results?.timemania;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.title, alignSelf: "center", marginBottom: theme.spacing.large, fontWeight: "bold"}}>TIMEMANIA</Text>
    <View style={styles.ballContainer}>
    {timemaniaResults?.dezenas.map((dezena: number) => (
        <Ball key={dezena} number={dezena} color={theme.colors.timemania.background} text={theme.colors.timemania.text} spacing={theme.spacing.small}/>
      ))}
    </View>
    <Text style={{fontSize: theme.fontSizes.subtitle, color: "#5d5d5d", marginTop: theme.spacing.small}}> {timemaniaResults.dataPorExtenso}</Text>
    </View>
  );
};

export default TimemaniaScreen;
