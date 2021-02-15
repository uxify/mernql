import { pages } from './data/pages.js';


const resolvers = {
	Query: {
		pages : [pages],
		page(parent, { id }) {
			return pages.find(page => page.id == id);
		}
	},
};

export default resolvers