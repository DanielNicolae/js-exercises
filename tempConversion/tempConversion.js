const ftoc = function(temp) {
  let result = 0;
  if (((temp-32)*(5/9)) * 10 % 10 !== 0) {
    result = ((temp-32)*(5/9)).toFixed(1);
    return (Number(result));
  }
  else {
    result = (temp-32)*(5/9);
    return (Number(result));
  }
}

const ctof = function(temp) {
  let result = 0;
  if ((temp * 9/5 + 32).toFixed(1) * 10 % 10) {
    result = (temp * 9/5 + 32).toFixed(1);
    return (Number(result));
  }
  else {
    result = temp * 9/5 + 32
    return (Number(result));
  }
}

module.exports = {
  ftoc,
  ctof
}
