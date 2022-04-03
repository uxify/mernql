import { PostData, GetLastId } from '../Engines/index.js'
import PostPage from './PostPage.js';


const PostEvent = async ({
	eventName,
	eventLocation,
	eventDate,
	description,
}) => {
	const lastId = await GetLastId('Events');
	const data = [
		{
			id: 1 + lastId,
			eventName,
			eventLocation,
			eventDate,
			description,
		}
	];

	
	//return await PostData('Events', data);
	return await PostPage();
}


export default PostEvent;