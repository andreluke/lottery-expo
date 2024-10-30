import { useContext } from 'react';
import { LotteryContext } from '../contexts/LotteryContexts';

export const useLottery = () => {
  return useContext(LotteryContext);
};
