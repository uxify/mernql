import { pages } from './data/pages.js';
import { columnData } from './data/columnContent.js';
import { mainContent } from './data/mainContent.js'

const resolvers = {
	Model: {
    __resolveType(obj) {
      switch (obj.name) {
        case 'SectionContent' : {
          return 'SectionContent';
        }
        case 'HomeBanner' : {
          return 'SliderElement';
        }
        case 'AnnouncementList' : {
          return 'AnnouncementList';
        }
        case 'EventBanner' : {
          return 'EventBanner'
        }
        case 'JoinUs' : {
          return 'JoinUs'
        }
        default: return null
      }
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