describe('test example', () => {
  it('should be sum 2 + 1 return 3', () => {

    function sum(number1, number2){
      return number1 + number2;
    }

    expect(sum(1, 2)).toBe(3)
  });
});
