export const selectFilterFunc = (arr, val) => {
  return arr.filter((object) => object.genres.some((ele) => ele.name === val));
};

export const SearchFilter = (arr, currentInput) => {
  let ansArr = arr.filter((ele) =>
    ele.title.toLowerCase().includes(currentInput)
  );
  return ansArr;
};
