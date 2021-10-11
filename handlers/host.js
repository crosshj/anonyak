'use strict';

module.exports.get = (event, context, callback) => {
	const allowed = [
		"https://fiug.dev",
		"https://beta.fiug.dev",
		"https://crosshj.com",
	];
	const { origin } = event.headers;
	const AllowOrigin = allowed.includes(origin) ? origin : '';

	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": AllowOrigin,
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
		},
		body: JSON.stringify({
			message: 'hello anonyak: host!',
			event,
			context,
		}),
	};

	callback(null, response);
};
