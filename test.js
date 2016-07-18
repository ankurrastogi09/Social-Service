

"use strict"

var request = require("request");

var options = {
	"url":"https://graph.facebook.com/me/feed?access_token=EAACEdEose0cBAK38mKOtExEPvGzkGAxl1fB8ppbjDPvuYRYpcJBmOfleu2pVvFg8OZCzVbptbrzOZAcTfH4NHvQ00SJ7Rgd0Sah3XkyBivV8AfZBT4ZCWRnFWYs7ZBn5gAldj8sPOY1qm4wYAmZAtzPHKGg3l7cDJhNoqY3XNV0gZDZD&link=http://www.oyewiki.com/travel/road-trip-from-delhi-weekend-gateways"
};

request.post(options, function(err, resp, body){
	console.log(err, body);
});
