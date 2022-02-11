import { PostData } from '../Engines/index.js'


const PostColumnContent = async () => {
	const data = [
		{
			id: 101,
			name: 'ColumnContent',
			columnContent: {
				id: 102,
				name: 'HomeBanner',
				slides: [
					{
						id: 1,
						imgUrl: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=1920&h=1080',
						headline1: "Returning to outdoor competition",
						headline2: "",
						textContent: "Guidelines to be strictly followed for members who wish to return to the competition.",
						callToAction: "Covid-19 Guidelines"
					}
				]
			}
		},
		{
			id: 103,
			name: 'ColumnContent',
			columnContent: {
				id: 104,
				name: 'AnnouncementList',
				announcements: [
					{
						id: 1,
						publishedOn: 'May 24',
						textContent: "We have worked hard to get our Outdoor Range ready to start training again in compliance with SportMalta Return to Sport guidelines for Covid-19 transition."
					},
					{
						id: 2,
						publishedOn: 'May 24',
						textContent: "We have worked hard to get our Outdoor Range ready to start training again in compliance with SportMalta Return to Sport guidelines for Covid-19 transition."
					},
					{
						id: 3,
						publishedOn: 'May 24',
						textContent: "We have worked hard to get our Outdoor Range ready to start training again in compliance with SportMalta Return to Sport guidelines for Covid-19 transition."
					},
					{
						id: 4,
						publishedOn: 'May 24',
						textContent: "We have worked hard to get our Outdoor Range ready to start training again in compliance with SportMalta Return to Sport guidelines for Covid-19 transition."
					},
					{
						id: 5,
						publishedOn: 'May 24',
						textContent: "We have worked hard to get our Outdoor Range ready to start training again in compliance with SportMalta Return to Sport guidelines for Covid-19 transition."
					}
				]
			}
		},
		{
			id: 105,
			name: 'ColumnContent',
			columnContent: {
				id: 106,
				name: 'SectionContent',
				sectionContent: [
					{
						id: 107,
						name: 'RowContent',
						fullWidth: true,
						contentId: [110]
					},
					{
						id: 108,
						name: 'RowContent',
						fullWidth: true,
						contentId: [112]
					},
					{
						id: 109,
						name: 'RowContent',
						fullWidth: true,
						contentId: [114, 116]
					}
				]
			}
		},
		{
			id: 110,
			name: 'ColumnContent',
			columnContent: {
				id: 111,
				name: 'EventBanner',
				title: 'Next Event',
				nextEventDate: 'August 15, 2020',
				registrationStatus: 'open',
				eventName: 'Outdoor Shooting Program - Event 3',
				eventLocation: 'Marsa Outdoor Range',
				registerButtonLink: '/events/12/register',
				participantButtonLink: '/evens/12/participants'
			}
		},
		{
			id: 112,
			name: 'ColumContent',
			columnContent: {
				id: 113,
				name: 'GenericBox',
				bgImage: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=640',
				overlayColor: '#0271c1c4',
				textColor: 'light',
				heading1: 'Become a member',
				heading2: '',
				action: {
					type: 'Button',
					image: '',
					text: 'Join Us',
					link: '/register'
				}
			}
		},
		{
			id: 114,
			name: 'ColumContent',
			columnContent: {
				id: 115,
				name: 'GenericBox',
				bgImage: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=640',
				overlayColor: '#feff02c2',
				textColor: 'dark',
				heading1: 'Event Results',
				heading2: '',
				action: {
					type: 'Container',
					image: '',
					text: '',
					link: '/events/results'
				}
			}
		},
		{
			id: 116,
			name: 'ColumContent',
			columnContent: {
				id: 117,
				name: 'GenericBox',
				bgImage: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=640',
				overlayColor: '#ffffffe0',
				textColor: 'dark',
				heading1: 'National Record',
				heading2: '',
				action: {
					type: 'Container',
					image: '',
					text: '',
					link: '/records'
				}
			}
		},
		{
			id: 118,
			name: 'ColumContent',
			columnContent: {
				id: 119,
				name: 'VideoContent',
				videoLink: '',
				thumbnail: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=640',
				height: '480px',
				width: '640px'
			}
		},
		{
			id: 120,
			name: 'ColumContent',
			columnContent: {
				id: 121,
				name: 'GenericBox',
				bgImage: '',
				overlayColor: '',
				textColor: 'dark',
				heading1: 'Archery News',
				heading2: '',
				text: 'John Schembri - President, Archery Association of Malta speaking about how archery has progressed over the years in Malta.',
				action: {
					type: '',
					image: '',
					text: '',
					link: '',
				}
			}
		},
		{
			id: 122,
			name: 'ColumContent',
			columnContent: {
				id: 123,
				name: 'GenericWithImage',
				bgImage: '',
				overlayColor: '',
				textColor: 'dark',
				heading: 'Affiliations',
				text: '',
				imageList: [
					{
						image: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=320',
						link: 'http://www.worldarcher.com'
					},
					{
						image: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=320',
						link: 'https://nocmalta.org/'
					},
					{
						image: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=320',
						link: 'https://sportmalta.mt/'
					}
				]
			}
		},
		{
			id: 124,
			name: 'ColumContent',
			columnContent: {
				id: 125,
				name: 'GenericWithImage',
				bgImage: '',
				overlayColor: '',
				textColor: 'dark',
				heading: 'Connect with us',
				text: '',
				imageList: [
					{
						image: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=320',
						link: 'http://www.facebook.com'
					},
				]
			}
		}
	];
	return await PostData('ColumnContent', data);
}

export default PostColumnContent;