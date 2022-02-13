
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
    page: async (parent, { id }) => {
      // if (parseInt(id) === 3) {
      //   console.log('Post')
      //   return PostColumnContent();
      // }
      return await GetPageContent(id)
    },
    columnSection: async (parent, { id }) => {
      return await GetColumnContent(id)
    },
    mainContent: async () => {
      return await GetMainContent()
    }
  }
};

export default resolvers