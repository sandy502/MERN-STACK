const express = require('express');


module.exports = {
	fetch : function(url){
		return new Promise((resolve, reject) => {
			request(url, { json: true }, (err, res, id) => {
			  if (err) reject(err)
			  resolve(body)
			});
		})
	}
}