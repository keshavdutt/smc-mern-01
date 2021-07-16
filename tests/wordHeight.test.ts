import { calcWordHeight } from "../src/wordHeight";

describe("Word height problem", () => {
  it("Should calculate word height", () => {
    const heights: Array<number> = [
      2, 6, 2, 6, 2, 4, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7,
    ];

    const word = "hello";

    expect(calcWordHeight(heights, word)).toBe(28);
  });
});
