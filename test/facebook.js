"use strict";

var socialServices = require("../services");

describe("#Social Service Check", function(){

	it("#Facebook Service Auto Post", function(done){
		this.timeout(0);
		var options = {
			link : "http://www.oyewiki.com/linux/linux-unix-mv-command"
		};
		socialServices.facebook.publishPost(options, function(err, result){
			console.log(err, result);
			done();
		});
	});

});