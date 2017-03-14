export const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toPhoneNumber = (text = '') => {
  text = text.replace(/[^\d]/g, "");
  return text.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
};
