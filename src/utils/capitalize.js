export const capitalizeHelper = (name) => {
  return name?.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const capitalizeTinyHelper = (name) => {
  return name?.replace(/\b\w/g, (l) => l.toLowerCase());
};
