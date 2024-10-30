
export interface LotteryResult {
    nome: string;              
    numeroDoConcurso: number;   
    dataDoConcurso: string;      
    dezenas: number[];          
  }
  
  export interface LotteryResults {
    megaSena: LotteryResult;
    quina: LotteryResult;
    timemania: LotteryResult;
  }
  