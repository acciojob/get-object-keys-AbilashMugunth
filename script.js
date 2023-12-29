const student = {
  name:"",
};


Object.prototype.getKeys = function (obj) {
  return Object.keys(obj).map((key) => key);
};
