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
	await client.connect();
	const database = client.db('AAM_QL');
	const cl = database.collection(collection);
	const result = await cl.insertMany(docs);
}

export const GetLastId = async (collection) => {
	const lastEntry = await database.collection(collection).find({}).sort({ _id: -1 }).limit(1).toArray();
	const lastId = lastEntry.length === 1 ? lastEntry[0].id : 0;
	return lastId;
}