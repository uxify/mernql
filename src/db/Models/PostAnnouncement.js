import { PostData } from '../Engines/index.js'


const PostAnnouncement = async ({ publishedOn,
	title,
	textContent }) => {
	const data = [
		{
			publishedOn,
			title,
			textContent
		}
	];
	return await PostData('Announcements', data);
}


export default PostAnnouncement;