function sum(a, b) {
  return a + b;
}

test("Sum:", () => {
  // Arrange

  //Act
  const result = sum(2, 3);

  //Assert
  expect(result).toBe(5);
});
