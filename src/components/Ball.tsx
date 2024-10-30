import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface BallProps {
  number: number;
  color: string;
  text: string,
  spacing: number;
}

const Ball: React.FC<BallProps> = ({ number, color, text, spacing }) => {
  return (
    <View style={[styles.ball, { backgroundColor: color, margin: spacing }]}>
      <Text style={[styles.number, {color: text}]}>{number}</Text>   
    </View>
  );
};

export default Ball;
