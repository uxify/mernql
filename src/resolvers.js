import { columnData } from './data/columnContent.js';
import { mainContent } from './data/mainContent.js';

import { 
  GetMainContent, 
  GetPageContent, 
  GetColumnContent,
  PostColumnContent 
} from './db/Models/index.js';

const resolvers = {
  Model: {
    __resolveType(obj) {
      switch (obj.name) {
        case 'SectionContent': {
          return 'SectionContent';
        }
        case 'HomeBanner': {
          return 'SliderElement';
        }
        case 'AnnouncementList': {
          return 'AnnouncementList';
        }
        case 'EventBanner': {
          return 'EventBanner'
        }
        case 'JoinUs': {
          return 'JoinUs'
        }
        case 'GenericBox': {
          return 'GenericBox'
        }
        case 'VideoContent': {
          return 'VideoContent'
        }
        case 'GenericWithImage': {
          return 'GenericWithImage'
        }
        default: return null
      }
    },
  },

  Query: {
    async page(parent, { id }) {
      if (parseInt(id) === 3) {
        //console.log('Post')
        //PostColumnContent();
      }
      else {
        return GetPageContent(id).then((res) => {
          return res;
        }).catch(() => {
          return {}
        });
      }
    },
    async columnSection(parent, { id }) {
      return GetColumnContent(id).then((res) => {
        return res;
      }).catch(()=>{
        return {}
      })
    },
    mainContent() {
      return GetMainContent()
    }
  }
};

export default resolvers