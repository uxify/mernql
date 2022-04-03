import { database } from '../config.js';

export const GetAnnouncementList = async ({ limit = 10 }) => {
	const cl = database.collection('Announcements');
	const alist = await cl.find({}).sort({ publishedOn: -1 }).limit(limit).toArray();
	return alist

}

export const GetAnnouncement = async ({ id }) => {
	const cl = database.collection('Announcements');
	return await cl.findOne({ id: parseInt(id) });
}
