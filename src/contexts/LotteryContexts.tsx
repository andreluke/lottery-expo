import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchLatestResults } from '../services/api';
import { LotteryResults } from '../types/ILottery';

interface LotteryContextData {
  results: any;
  loading: boolean;
}

interface LotteryProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext<LotteryContextData>({} as LotteryContextData);

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
  const [results, setResults] = useState<LotteryResults | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      const data = await fetchLatestResults();
      setResults(data);
      setLoading(false);
    };
    loadResults();
  }, []);

  return (
    <LotteryContext.Provider value={{ results, loading }}>
      {children}
    </LotteryContext.Provider>
  );
};
