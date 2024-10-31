import React from "react";
import { render } from "@testing-library/react-native";
import TimemaniaScreen from "../../pages/TimemaniaScreen";
import { useLottery } from "../../hooks/useContext";

// Mock do hook useLottery
jest.mock("../../hooks/useContext", () => ({
  useLottery: jest.fn(),
}));

describe("TimemaniaScreen", () => {
  it("Deve exibir o estado de carregamento corretamente", () => {
    // Mock para simular o estado de carregamento
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: true,
    });

    const { toJSON } = render(<TimemaniaScreen />);

    // Verifica se o snapshot do estado de carregamento está correto
    expect(toJSON()).toMatchSnapshot();
  });


  it('Deve exibir uma mensagem de erro quando ocorrer um erro ao buscar os resultados', () => {
    // Mock para simular um erro na busca dos resultados
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: false,
      error: 'Erro ao carregar os resultados',
    });

    const { getByText } = render(<TimemaniaScreen />);

    // Verifica se a mensagem de erro é exibida
    const errorMessage = getByText(/Erro ao carregar os resultados/i);

    expect(errorMessage).toBeTruthy();
  });

  it("Deve exibir o título do Timemania", () => {
    // Mock para simular resultados de Timemania com o estado de carregamento falso
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: "29 de Outubro de 2024",
        },
      },
      loading: false,
    });

    const { getByText } = render(<TimemaniaScreen />);

    // Verifica se o título está presente
    expect(getByText("TIMEMANIA")).toBeTruthy(); // Altere para o título que você espera
  });

  it("Deve exibir os números corretos da loteria", () => {
    // Mock para simular resultados da Timemania
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: "29 de Outubro de 2024",
        },
      },
      loading: false,
    });

    const { getAllByText } = render(<TimemaniaScreen />);

    // Extrai os números exibidos e converte para inteiro, filtrando NaN
    const displayedNumbers = getAllByText(/\d+/)
      .map((text) => {
        const number = parseInt(text.props.children, 10);
        return isNaN(number) ? null : number; // Filtra NaN
      })
      .filter(Boolean); // Remove nulls (valores NaN)

    // Verifica se todos os números corretos estão presentes
    expect(new Set(displayedNumbers)).toEqual(
      new Set([9, 14, 55, 77, 2, 66, 38])
    );
  });

  it("Deve exibir a data correta do sorteio", () => {
    // Mock para simular o retorno de resultados da Timemania com data
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: "29 de Outubro de 2024",
        },
      },
      loading: false,
    });

    const { getByText } = render(<TimemaniaScreen />);

    // Verifica se a data correta do sorteio está exibida
    const dateText = getByText(/29 de Outubro de 2024/i); // Usando regex corretamente

    expect(dateText).toBeTruthy();
  });
});
