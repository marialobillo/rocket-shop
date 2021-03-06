var _ = require("underscore")._;
var MembershipApplication = function(args){

	_.extend(this, args);

	this.emailIsValid = function(){
		return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
	};

	this.heightIsValid = function(){
		return this.height && this.height > 60 && this.height < 75;
	};
	this.weightIsValid = function(){
		return this.weight && this.weight > 100 && this.weight < 300;
	};
	this.isValid = function(){
		return this.emailIsValid() &&
				this.heightIsValid() &&
				this.ageIsValid() &&
				this.weightIsValid();
	};
	this.ageIsValid = function(){
		return this.age && this.age > 18 && this.age < 100;
	};
	this.nameIsValid = function(){
		return this.first && this.last;
	}
};

module.exports = MembershipApplication;
