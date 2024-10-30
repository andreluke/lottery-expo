
export interface LotteryResult {
    nome: string;              
    numeroDoConcurso: number;   
    dataPorExtenso: string;      
    dezenas: number[];          
  }
  
  export interface LotteryResults {
    megasena: LotteryResult;
    quina: LotteryResult;
    timemania: LotteryResult;
  }
  