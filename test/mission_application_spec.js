var assert = require('assert');
var MembershipApplication = require("../lib/membership_application");

describe("Applying for mission", function(){
	var validApp;
	before(function(){
		validApp = new MembershipApplication({
			first: "Test",
			last: "User",
			email: "test@test.com",
			age: 30,
			height: 66,
			weight: 120,
		});
	});
	describe("Validations successful if...", function(){
		it("Applicatin is valid if all validators return true", function(){
			assert(validApp.isValid(), "Not valid");
		});
		it("Email is 4 or more chars and contains an @", function(){
			assert(validApp.emailIsValid());
		});
		it("height is between 60 and 75 inches", function(){
			assert(validApp.heightIsValid());
		});
		it("age is between 15 and 100", function(){
			assert(validApp.ageIsValid());
		});
		it("weights is between 100 and 300", function(){
			assert(validApp.weightIsValid());
		});
		it("first and last name are provided", function(){
			assert(validApp.nameIsValid());
		});
	});
});
