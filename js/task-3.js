function getElementWidth(content, padding, border) {
  let countContent = Number.parseFloat(content);
  let countPadding = Number.parseFloat(padding);
  let countBorder = Number.parseFloat(border);

  countParameters = countContent + (countPadding + countBorder) * 2;
  return countParameters;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
