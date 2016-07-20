"use strict";

var socialServices = require("../services");

describe("#Social Service Check", function(){

	it("#Facebook Service Auto Post", function(done){
		this.timeout(0);
		var options = {
			//link : "http://www.oyewiki.com/tutorials/how-to-pay-electricity-bill-online"
			"message" : "Oyewiki Engineering: Working on node module to auto post on all facebook, twitter, quora, google plus etc social account. Started from facebook. Code coming soon on github.",
			"pages" : ["oyewiki"]
		};
		socialServices.facebook.publishPost(options, function(err, result){
			console.log(err, result);
			done();
		});
	});

});