// src/themes/theme.test.ts
import { styles, theme } from "../../theme";

describe("Theme Styles", () => {
  it("Deve carregar o estilo do container corretamente", () => {
    expect(styles.container).toEqual({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    });
  });

  it("Deve carregar corretamente o estilo da bola", () => {
    expect(styles.ball).toEqual({
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      margin: 4,
    });
  });

  it("Deve ter corretamente as propriedades do texto", () => {
    expect(styles.number).toEqual({
      fontSize: 16,
      fontWeight: "bold",
    });
  });

  it("Deve ter corretamente as propriedades do titulo", () => {
    expect(styles.title).toEqual({
      fontSize: 24,
      alignSelf: "center",
      marginBottom: 16,
      fontWeight: "bold",
    });
  });

  it("Deve carregar corretamente as propriedades do subtitulo", () => {
    expect(styles.subText).toEqual({
      fontSize: 14,
      color: "#5d5d5d",
      marginTop: 4,
    });
  });
});

describe("Theme Colors", () => {
  it("Deve carregar corretamente as cores da Mega-Sena", () => {
    expect(theme.colors.megaSena).toEqual({
      background: "#209869",
      text: "#ffffff",
    });
  });

  it("Deve carregar corretamente as cores da Quina", () => {
    expect(theme.colors.quina).toEqual({
      background: "#260085",
      text: "#ffffff",
    });
  });

  it("Deve carregar corretamente as cores do Timemania ", () => {
    expect(theme.colors.timemania).toEqual({
      background: "#FFF600",
      text: "#049645",
    });
  });
});
