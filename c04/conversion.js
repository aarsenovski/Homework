const convertMilesToKm = (miles) => {
  return miles * 1.6;
};

const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 2 + 30;
};

const convertLbsToKg = (lbs) => {
  return lbs * 0.4535;
};

const convertFtToM = (ft) => {
  return ft * 0.3048;
};

module.exports = {
  convertMilesToKm,
  convertCelsiusToFahrenheit,
  convertLbsToKg,
  convertFtToM,
};
