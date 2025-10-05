const sum = require("./sum");

test("adds 3 + 3 to equal 6", () => {
  expect(sum(3, 3)).toBe(6);
});
