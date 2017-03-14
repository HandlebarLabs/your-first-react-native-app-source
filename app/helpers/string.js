export const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toPhoneNumber = (text = '') => {
  const modText = text.replace(/[^\d]/g, '');
  return modText.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
};
