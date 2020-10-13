import mirror from "./mirror";

describe("mirror", () => {
  it("works with positive numbers", () => {
    const result = mirror([1, 2, 3]);

    expect(result).toEqual([1, 2, 3, 2, 1]);
  });

  it("works with positive and negative numbers", () => {
    const result = mirror([-8, 42, 18, 0, -16]);

    expect(result).toEqual([-16, -8, 0, 18, 42, 18, 0, -8, -16]);
  });
});
