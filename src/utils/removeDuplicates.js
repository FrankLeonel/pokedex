export const removeDuplicates = (array) => {
  return array.filter(
    (resistance, index) => array.indexOf(resistance) === index
  );
};
