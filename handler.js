'use strict';

module.exports.hello = (event, context, callback) => {
	const body = `
hello anonyak!
`;
	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Headers" : "Content-Type",
			"Access-Control-Allow-Origin": "https://beta.fiug.dev",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
		},
		body,
		// body: JSON.stringify({
		// 	message: 'Go Serverless v1.0! Your function executed successfully!',
		// 	input: event,
		// }),
	};

	callback(null, response);

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
