import { pages } from './data/pages.js';
import { mainContent } from './data/mainContent.js'
console.log(mainContent);
const resolvers = {
	Query: {
		page(parent, { id }) {
			return pages.find(page => page.id == id);
		},
		main () {
			return mainContent
		},
	}
};

export default resolvers