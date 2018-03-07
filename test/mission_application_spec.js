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
	describe("Using valid email, first, last, height, age, weight", function(){
		it("is valid", function(){
			assert(validApp.isValid(), "Not valid");
		});
		it("let's them in");
		it("reports a valid email", function(){
			assert(validApp.emailIsValid());
		});
		it("reports valid height", function(){
			assert(validApp.heightIsValid());
		});
		it("reports valid age", function(){
			assert(validApp.ageIsValid());
		});
		it("reports valid weight", function(){
			assert(validApp.weightIsValid());
		});
		it("reports valid name", function(){
			assert(validApp.nameIsValid());
		});
	});
});
