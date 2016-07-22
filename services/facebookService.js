"use strict";

/* Third Party Modules */
var request = require("request");
var async = require("async");
var util = require("util");
var debug = require("debug")("Facebook-Service");

/* Internal config files*/
var config = require("../config").facebook;

var facebookService = {
	/*
		publishPost Method posts the links or messages passed as input on all the pages.
		variable options ==> {
			link : "", //Webpage url link
			"message" : "", //Text post message
			"pages" : [] //Array of pages on which we want to post, leave it empty if we want to post on all pages
		};
	*/
	publishPost : function(options, cb){
		
		var opts = {};
		var reqOpts = {};
		var post_data = [];
		var error;
		var validFlag = false;
		var url;

		validateOptions();

		createPostArray();

		makePostRequests();
		
		function makePostRequests(){
			async.eachSeries(post_data, sendSocialRequest, function(err, result){
				cb(null, true);
			});
		}

		function createPostArray(){

			var pages = opts.pages || Object.keys(config.pages);

			pages.forEach(function(page){
				if(config.pages[page]){
					var obj = {};
					obj.access_token = config.pages[page].access_token
					if(opts.message) obj.message = opts.message;
					if(opts.link) obj.link = opts.link;
					post_data.push(obj);
				}
			});
		}

		function sendSocialRequest(page_post_data, cb){
			
			url = "https://graph.facebook.com/me/feed?";

			Object.keys(page_post_data).forEach(function(key){
				url += key + "=" + page_post_data[key] + "&";
			});

			url = url.split("").splice(0, url.length - 1).join("");

			request.post({url : url}, function(err, resp, body){
				console.log(err, body);
				if(err || resp.statusCode !== 200){
					error = err || new Error("Not able to publish post");
					util.log(error);
					return cb(error);	
				}
				
				cb(null, body);
			});
		}
		

		function validateOptions(){
			//Todo add other post items as well.
			["message","link","pages"].forEach(function(key){
				if(options[key]){
					opts[key] = options[key];
				}
			});

			if(Object.keys(opts) && Object.keys(opts).length) validFlag = true;

			if(!validFlag){
				error = new Error("Insufficient parameters");
				error.status = 403;
				return cb(error);
			}
		}

	}
};

module.exports = facebookService;

//So what this application will do.
//We will pick all the pages from config.
//Will check if options has any particular page than we will only consider that page other will all pages picked from config.
//than we will create object of those pages with details like access_token, message and link for now.
//Than by using asyn method we will call them all to auto post on each page.
