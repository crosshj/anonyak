const AWS = require("aws-sdk");

const CHATS_TABLE = process.env.CHATS_TABLE;
const TIME_TO_LIVE = Number(process.env.DB_TTL_HRS) * 60 * 60;

module.exports.Dynamo = class Dynamo {
	constructor(){
		this.client = new AWS.DynamoDB.DocumentClient();
	}

	async scan(){
		try {
			const { client } = this;
			const params = {
				TableName: CHATS_TABLE,
			};
			const { Items: items } = await client.scan(params).promise();
			return { items };
		} catch (error) {
			console.log(error);
			return { error: "Could not scan database" };
		}
	}

	async put(message){
		try {
			const { client } = this;

			console.log({ message });
			const id = (Math.random().toString()).slice(2);
			console.log({ id });
			const ttl = Math.floor(Date.now() / 1000) + TIME_TO_LIVE;
			console.log({ ttl });

			const params = {
				TableName: CHATS_TABLE,
				Item: { id, message, ttl },
			};
			await client.put(params).promise();
			return { message };
		} catch (error) {
			console.log(error);
			return { error: "Could not put item in database" };
		}
	}
};
