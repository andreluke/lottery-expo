import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchLatestResults } from '../services/api';
import { LotteryResults } from '../types/ILottery';

interface LotteryContextData {
  results: LotteryResults | null;
  loading: boolean;
  error: string | null
}

interface LotteryProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext<LotteryContextData>({} as LotteryContextData);

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
  const [results, setResults] = useState<LotteryResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResults = async () => {
        try {
            const data = await fetchLatestResults();
            setResults(data);
        } catch (err) {
            setError('Erro ao carregar resultados'); // Define o erro no estado
        } finally {
            setLoading(false);
        }
    };

    loadResults();
}, []);

  return (
    <LotteryContext.Provider value={{ results, loading, error }}>
      {children}
    </LotteryContext.Provider>
  );
};
