import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../../routes/index";

// Mocks para as telas
jest.mock("../../pages/Home", () => () => <div>Bem-vindo ao App!</div>);

describe("Routes", () => {
  it("Deve renderizar a tela de home ao iniciar", () => {
    const { findByText } = render(
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    expect(findByText("Bem-vindo ao App!")).toBeTruthy();
  });
});
