import { calcWordHeight } from "../src";

describe("Word height problem", () => {
  it("Should calculate word height", () => {
    const heights: Array<number> = [
      2, 6, 2, 6, 2, 4, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    ];
    const word = "abz";
    expect(calcWordHeight(heights, word)).toBe(21);
  });

  it("Should calculate word height", () => {
    const heights: Array<number> = [
      2, 6, 2, 6, 2, 4, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    ];
    const word = "hello";
    expect(calcWordHeight(heights, word)).toBe(30);
  });

  it("Should calculate word height", () => {
    const heights: Array<number> = [
      3, 9, 10, 6, 2, 19, 2, 6, 1, 12, 1, 9, 1, 2, 1, 8, 1, 7, 1, 7, 3, 2, 2, 1, 1, 7,
    ];
    const word = "elephant";
    expect(calcWordHeight(heights, word)).toBe(72);
  });

  it("Should calculate word height", () => {
    const heights: Array<number> = [
      1, 6, 1, 6, 1, 4, 1, 6, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    ];
    const word = "human";
    expect(calcWordHeight(heights, word)).toBe(35);
  });

  it("Should calculate word height", () => {
    const heights: Array<number> = [
      3, 9, 10, 6, 2, 19, 2, 6, 1, 12, 1, 9, 1, 2, 1, 8, 1, 7, 1, 7, 3, 2, 2, 1, 1, 7,
    ];

    const word = "zero";

    expect(calcWordHeight(heights, word)).toBe(28);
  });
});
