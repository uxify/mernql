
import {
  GetMainContent,
  GetPageContent,
  GetColumnContent,
  GetAnnouncementList,
  GetAnnouncement,
  GetEventList,
  GetEvent,
  PostColumnContent,
  PostAnnouncement,
  PostEvent
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
        case 'EventList': {
          return 'EventList';
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
        case 'Sidebar': {
          return 'Sidebar'
        }
        default: return null
      }
    },
  },

  Query: {
    page: async (parent, { id }) => {
      return await GetPageContent(id)
    },
    columnSection: async (parent, { id }) => {
      return await GetColumnContent(id)
    },
    mainContent: async () => {
      return await GetMainContent()
    },
    announcementList: async (parent, { limit }) => {
      return await GetAnnouncementList({ limit })
    },
    announcement: async (parent, { id }) => {
      return await GetAnnouncement({ id })
    },
    eventList: async (parent, { limit }) => {
      return await GetEventList({ limit })
    },
    event: async (parent, { id }) => {
      return await GetEvent({ id })
    }
  },

  Mutation: {
    addColumnContent: async (parent) => {
      return await PostColumnContent();
    },
    addAnnouncement: async (parent, {
      publishedOn,
      title,
      textContent
    }) => {
      return await PostAnnouncement({
        publishedOn,
        title,
        textContent
      });
    },

    addEvent: async (parent, {
      eventName,
      eventLocation,
      eventDate,
      description,
    }) => {
      return await PostEvent({
        eventName,
        eventLocation,
        eventDate,
        description,
      });
    },
  }
};

export default resolvers