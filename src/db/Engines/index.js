import { client } from '../config.js';


export const GetData = async (collection, query, options={}) => {
	try {
		await client.connect();
		const database = client.db('AAM_QL');
		const cl = database.collection(collection);

		const page = await cl.findOne(query);
		return page;

	} finally {
		await client.close();
	}
}

export const PostData = async (collection, docs, options={}) => {
	try {
		await client.connect();
    const database = client.db('AAM_QL');
    const cl = database.collection(collection);
		const result = await cl.insertMany(docs);
	} finally {
		await client.close();
	}
}