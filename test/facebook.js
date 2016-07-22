"use strict";

var socialServices = require("../services");

describe("#Social Service Check", function(){

	it("#Facebook Service Auto Post", function(done){
		this.timeout(0);
		var options = {
			link : "http://www.businessinsider.in/This-floating-underwater-tunnel-in-Norway-could-save-half-a-day-in-travel-time/articleshow/53325896.cms"
			//"message" : "Oyewiki Engineering: Working on node module to auto post on all facebook, twitter, quora, google plus etc social account. Started from facebook. Code coming soon on github.",
			//"pages" : ["oyewiki"]
		};
		socialServices.facebook.publishPost(options, function(err, result){
			console.log(err, result);
			done();
		});
	});

});