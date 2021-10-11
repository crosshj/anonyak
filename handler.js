'use strict';

module.exports.hello = (event, context, callback) => {
	const body = `
hello anonyak!
`;
	const response = {
		statusCode: 200,
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
