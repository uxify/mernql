import { client, database } from '../config.js';


export const GetData = async (collection, query, options = {}) => {
	const cl = database.collection(collection);
	return await cl.findOne(query);
}

export const GetAllData = async (collection, query = {}, options = {}) => {
	const cl = database.collection(collection);
	return await cl.find({}).toArray();
}

export const PostData = async (collection, docs, options = {}) => {
	try {
		await client.connect();
		const database = client.db('AAM_QL');
		const cl = database.collection(collection);
		const result = await cl.insertMany(docs);
	} finally {
		await client.close();
	}
}