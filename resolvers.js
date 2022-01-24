import { pages } from './data/pages.js';
import { columnData } from './data/columnContent.js';
import { mainContent } from './data/mainContent.js'

const resolvers = {
	Model: {
    __resolveType(obj) {
      if (obj.name === 'RowContent') {
        return 'RowSection';
      } 
      if (obj.name === 'HomeBanner') {
        return 'SliderElement';
      } 
      if (obj.name === 'AnnouncementList') {
        return 'AnnouncementList';
      }
      return null;
    },
  },

	Query: {
		page(parent, { id }) {
			return pages.find(page => page.id == id);
		},
    columnSection(parent, { id }) {
			return columnData.find(column => column.id == id);
		},
		mainContent () {
			return mainContent
		}
	}
};

export default resolvers