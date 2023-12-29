const student = {
  name:"",
};


Object.prototype.getKeys = function () {
	 return Object.keys(this)
};

Object.getKeys(student);