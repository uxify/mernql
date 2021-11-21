import { pages } from './data/pages.js';
import { mainContent } from './data/mainContent.js'
console.log(mainContent);
const resolvers = {
	// ColumnContent: {
  //   __resolveType(obj) {
  //     if (obj.modelType === 'footerQuickLinks') {
  //       return 'FooterQuickLinks';
  //     } 
  //     if (obj.modelType === 'footerContactInfo') {
  //       return 'FooterContactInfo';
  //     }
  //     return null;
  //   },
  // },

	Query: {
		page(parent, { id }) {
			return pages.find(page => page.id == id);
		},
		mainContent () {
			return mainContent
		},
		// columnContent() { 
		// 	return columnContent 
		// },
	}
};

export default resolvers