import { database } from '../config.js';

export const GetEventList = async ({ limit = 10 }) => {
	const cl = database.collection('Events');
	const alist = await cl.find({}).sort({ eventDate: 1 }).limit(limit).toArray();
	return alist

}

export const GetEvent = async ({ id }) => {
	const cl = database.collection('Events');
	return await cl.findOne({ id: parseInt(id) });
}
