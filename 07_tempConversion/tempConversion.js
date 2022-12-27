const convertToCelsius = function(temp_far) {
  const temp_cel=(temp_far-32)*5/9;
  return (Math.round(temp_cel*10)/10);
};

const convertToFahrenheit = function(temp_cel) {
  const temp_far=(temp_cel*9)/5 + 32;
  return (Math.round(temp_far*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
