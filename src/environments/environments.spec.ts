import { environments } from "./environments";

describe('./src/environments/environments.ts', () => {
  test('Should backend url exists', () => {
    expect(environments).toHaveProperty("backendUrl");
    expect(environments).toHaveProperty("backendApi");
  });

  test("Should backend urls be strings", () => {
    expect(typeof environments.backendApi).toBe("string");
    expect(typeof environments.backendUrl).toBe("string");
  })
});
