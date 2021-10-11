'use strict';

module.exports.hello = (event, context, callback) => {
	const allowed = [
		"https://fiug.dev",
		"https://beta.fiug.dev",
		"https://crosshj.com",
	];
	const origin = '';
	const AllowOrigin = allowed.includes(origin) ? origin : '';
	//TODO: use this ^^^
	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": "https://beta.fiug.dev",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
		},
		body: JSON.stringify({
			message: 'hello anonyak!',
			event,
			context,
		}),
	};

	callback(null, response);
};
