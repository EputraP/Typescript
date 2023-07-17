import { sayHello } from "./say-hello";

describe("say hello", function () {
  it("it should return hello putra", function () {
    expect(sayHello("Putra")).toBe("Hello Putra");
  });
});
