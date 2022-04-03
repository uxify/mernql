import { GetData, GetAllData } from '../Engines/index.js';

const GetMainContent = async () => {

	const header = await GetHeaderContent();
	const footer = await GetFooterContent();
	const mainContent = {
		baseUrl: "http://rishabhsahay.com",
		header,
		footer,
	}

	return mainContent
}

const GetHeaderContent = async () => {
	const query = { name: 'HeaderContent' }
	const headerData =  await GetData('MainContent', query);
	const navigationData = await GetHeaderNavigation();
	return {...headerData, navigation: navigationData};

}

const GetFooterContent = async  () => {
	const query = { name: 'FooterContent' }
	return GetData('MainContent', query);
}

const GetHeaderNavigation = async () => {
	return await GetAllData('HeaderNavigation')
}

export default GetMainContent