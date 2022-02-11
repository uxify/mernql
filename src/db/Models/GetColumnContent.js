import { GetData } from '../Engines/index.js'

const GetColumnContent = async (columnId) => {
	const query = { id: parseInt(columnId) }
	console.log('columnData', columnId)
	const columnData = await GetData('ColumnContent', query);
	
	return columnData;
}

export default GetColumnContent