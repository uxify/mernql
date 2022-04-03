import { PostData, GetLastId } from '../Engines/index.js'


const PostPage= async () => {
	const data = [
		{
			"id": 7,
			"title": "Announcements",
			"description": "Announcement Page",
			"url": "/announcemets",
			"layout": {
				"id": 2,
				"name": "ContentPage"
			},
			"pageContent": [
				{
					"id": 2,
					"fullWidth": false,
					"name": "RowContent",
					"pageSection": true,
					"bgColor": "",
					"contentId": [
						103,
						131
					]
				}
			]
		}
	]


	return await PostData('Pages', data);
}


export default PostPage;