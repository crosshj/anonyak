'use strict';
const { Dynamo } = require('../repo/dynamo.js');
const db = new Dynamo();

module.exports.post = async (event, context, callback) => {
	const allowed = [
		"https://fiug.dev",
		"https://beta.fiug.dev",
		"https://crosshj.com",
	];
	const { message } = event.body || {};
	const { origin } = event.headers;
	const AllowOrigin = allowed.includes(origin) ? origin : '';

	let dbResponse = {};
	try {
		dbResponse = await db.put(message);
	} catch(e){
		console.log(e);
		debResponse.error = 'failed to post message';
	}

	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": AllowOrigin,
			"Access-Control-Allow-Methods": "OPTIONS,POST"
		},
		body: JSON.stringify({
			...dbResponse,
			event,
			context,
		}),
	};

	callback(null, response);
};
