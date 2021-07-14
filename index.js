function Generate(numbers) {
  if (numbers > 0 && numbers < 10) {
    var min = 1;
    for (let index = 1; index < numbers; index++) {
      min = min * 10;
    }
    return Math.floor(min + Math.random() * (min * 9));
  } else return false;
}
module.exports = Generate;
