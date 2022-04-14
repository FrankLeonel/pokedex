const colorType = (type1, type2, length) => {
  let finalColor;
  if (length === 2) {
    finalColor = {
      color1: type1,
      color2: type2,
    };
  } else {
    finalColor = {
      color1: type1,
      color2: type1,
    };
  }

  return finalColor;
};

export default colorType;
