import { PostData } from '../Engines/index.js'


const PostColumnContent = async () => {
	const data = [
		{
			"id": 126,
			"name": "ColumnContent",
			"columnContent": {
				"id": 127,
				"name": "SectionContent",
				"sectionContent": [
					{
						"id": 128,
						"name": "RowContent",
						"fullWidth": true,
						"contentId": [
							110
						]
					},
					{
						"id": 129,
						"name": "RowContent",
						"fullWidth": true,
						"contentId": [
							112
						]
					},
					{
						"id": 130,
						"name": "RowContent",
						"fullWidth": true,
						"contentId": [
							114,
							116
						]
					}
				]
			}
		}
	];
	return await PostData('ColumnContent', data);
}


export default PostColumnContent;