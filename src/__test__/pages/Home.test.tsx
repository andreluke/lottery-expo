import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Home from "../../pages/Home";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));



describe("Home", () => {


  beforeEach(() => {
    const useNavigation = require("@react-navigation/native").useNavigation;
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve renderizar o componente Home isoladamente", () => {
    const { getByText } = render(<Home />);

    // Verifica se o texto "Bem-vindo ao App!" está na tela
    expect(getByText("Bem-vindo ao App!")).toBeTruthy();
  });

  it("Deve renderizar corretamente a tela", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Bem-vindo ao App!")).toBeTruthy();
    expect(getByText("Iniciar")).toBeTruthy();
  });

  it("Deve navegar para 'Main' ao pressionar o botão 'Iniciar'", () => {
    const { getByText } = render(<Home />);

    const button = getByText("Iniciar");
    fireEvent.press(button);

    // Verifica se a navegação foi chamada
    expect(mockNavigate).toHaveBeenCalledWith("Main");
  });
});
