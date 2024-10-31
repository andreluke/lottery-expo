import { LotteryResult } from '../../types/ILottery';

// Mock de um resultado da loteria
const mockLotteryResult: LotteryResult = {
  nome: 'Timemania',
  numeroDoConcurso: 1234,
  dataPorExtenso: '29 de Outubro de 2024',
  dezenas: [9, 14, 55, 77, 2, 66, 38],
};

// Teste da tipagem
describe('LotteryResult Type', () => {
  it('deve corresponder à interface LotteryResult', () => {
    expect(mockLotteryResult).toHaveProperty('nome');
    expect(mockLotteryResult).toHaveProperty('numeroDoConcurso');
    expect(mockLotteryResult).toHaveProperty('dataPorExtenso');
    expect(mockLotteryResult).toHaveProperty('dezenas');
    expect(Array.isArray(mockLotteryResult.dezenas)).toBe(true);
    expect(typeof mockLotteryResult.dezenas[0]).toBe("number");
    expect(typeof mockLotteryResult.dataPorExtenso).toBe("string");
    expect(typeof mockLotteryResult.numeroDoConcurso).toBe("number")
    expect(typeof mockLotteryResult.nome).toBe("string")
  });
});
