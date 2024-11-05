import { device, element, by, expect } from "detox";

describe("Lotery Expo E2E", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it("Deve ter a logo iniciar", async () => {
    await expect(element(by.text("Iniciar"))).toBeVisible();
  });

  it("Deve aparecer a tela de Mega-sena", async () => {
    await element(by.text("Iniciar")).tap();

    await expect(element(by.text("MEGA-SENA"))).toBeVisible();
  });

  it("Deve navegar para a tela de Quina", async () => {
    await expect(element(by.text("MEGA-SENA"))).toBeVisible();

    await element(by.text("Abrir Drawer")).tap();

    await waitFor(element(by.text("Quina")))
      .toBeVisible()
      .withTimeout(3000);

    await element(by.text("Quina")).tap();

    await expect(element(by.text("QUINA"))).toBeVisible();
  });

  it("Deve navegar para a tela de Timemania", async () => {
    await expect(element(by.text("QUINA"))).toBeVisible();

    await element(by.text("Abrir Drawer")).tap();

    await waitFor(element(by.text("Timemania")))
      .toBeVisible()
      .withTimeout(3000);

    await element(by.text("Timemania")).tap();

    await expect(element(by.text("TIMEMANIA"))).toBeVisible();
  });

  // it("Deve funcionar a tela de inicio automatica", async () => {
  //   await expect(element(by.text("TIMEMANIA"))).toBeVisible();

  //   await device.pressBack();
  //   await device.pressBack();

  //   await waitFor(element(by.text("Bem-vindo ao App!")))
  //     .toBeVisible()
  //     .withTimeout(3000);

  //   await new Promise(() => {
  //     setTimeout(() => {
  //     }, 11000); // 10 segundos
  //   });

  //   await expect(element(by.text("MEGA-SENA"))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
