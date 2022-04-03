import { GetData } from '../Engines/index.js'

const GetColumnContent = async (columnId) => {
	const query = { id: parseInt(columnId) }
	const columnData = await GetData('ColumnContent', query);
	
	return columnData;
}

export default GetColumnContent