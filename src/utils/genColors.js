const genColors = () => {
  const colorSet = new Set();
  let number;
  for (let i = 0; colorSet.size < 3; i++) {
    number = Math.floor(Math.random() * 258);
    if (!colorSet.has(number) || number !== undefined) {
      colorSet.add(number);
    }
  }
  const colorArray = [...colorSet];
  return `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
};

export default genColors;
