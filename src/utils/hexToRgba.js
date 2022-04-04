const hexToRgba = (hexColor, opacity = 1) => {
  const rgbColor = {
    r: parseInt(hexColor.substring(1, 3), 16),
    g: parseInt(hexColor.substring(3, 5), 16),
    b: parseInt(hexColor.substring(5), 16),
  };

  if (isNaN(rgbColor.r) || isNaN(rgbColor.g) || isNaN(rgbColor.b)) {
    return "";
  }

  const { r, g, b } = rgbColor;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default hexToRgba;
