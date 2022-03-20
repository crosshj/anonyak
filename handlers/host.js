'use strict';
const { Dynamo } = require('../repo/dynamo.js');
const db = new Dynamo();

module.exports.get = async (event, context, callback) => {
	const allowed = [
		"https://fiug.dev",
		"https://welcome.fiug.dev",
		"https://beta.fiug.dev",
		"https://crosshj.com",
	];
	const { origin } = event.headers;
	const AllowOrigin = allowed.includes(origin) ? origin : '';

	let dbResponse = {};
	try {
		dbResponse = await db.scan();
	} catch(e){
		console.log(e);
		dbResponse.error = 'failed to list messages';
	}

	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": AllowOrigin,
			"Access-Control-Allow-Methods": "OPTIONS,GET"
		},
		body: JSON.stringify({
			...dbResponse,
			event,
			context,
		}),
	};

	callback(null, response);
};
