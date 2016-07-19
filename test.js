

"use strict"

var request = require("request");

var options = {
	"url":"https://graph.facebook.com/me/feed?access_token=EAACEdEose0cBAHrs6IqvfDVRAa9L0Wzr2sw1w2BEbvO4hsckZCHWWkoDDQmni1YwRMkvAvM4FISfWf17qOl2EsfkssOrZAghQyIeuF8EbzzQLXx9pZA8wDDner09TszFwrljj9rZBZBY7N0NvQT6ysF0Oz6XEADYHWOqDM0b9zwZDZD&message=test"
};

request.post(options, function(err, resp, body){
	console.log(err, body);
});
