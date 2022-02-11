import { GetData } from '../Engines/index.js'

const GetPageContent = async (id) => {
	const query = { id: parseInt(id) }
	const pageData = await GetData('Pages', query);
	return pageData;
}

export default GetPageContent