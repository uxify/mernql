import Navigation from './navigation.js';

const Logo = {
	imgUrl: '/logo.png',
	height: '150px',
	width: '250px',
}
const QuickLink = [
	{
		label: 'Donate',
		link: '/donate',
	},
	{
		label: 'Login',
		link: '/login',
	},
]

const Header = {
	logo: Logo,
	navigation: Navigation,
	topBar: {
		text: "COVID-19: AT HOME RESOURCES FOR ATHLETES"
	},
	quickLink: QuickLink
}

export default Header