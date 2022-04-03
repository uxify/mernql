import { PostData } from '../Engines/index.js'


const PostColumnContent = async () => {
	const data = [
		{
			id: 134,
			name: 'ColumnContent',
			columnContent: {
				id: 135,
				name: 'EventList',
			}
		}
	];
	console.log('insert');
	return await PostData('ColumnContent', data);
}


export default PostColumnContent;