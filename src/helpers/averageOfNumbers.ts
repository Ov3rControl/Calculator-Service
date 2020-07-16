function average(numbersList: Array<number>) {
  return (
    numbersList.reduce((a: number, b: number) => a + b) / numbersList.length
  );
}
export default average;
