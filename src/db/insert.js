import { client } from './config.js';

async function run() {

  try {

    await client.connect();

    const database = client.db('AAM_QL');

    const pages = database.collection('Pages');


    const docs = [

      {
				id: 1,
				title: "Home",
				description: "Home Page",
				url: "/",
				layout: layouts[0],
				pageContent: [
					{
						id: 1,
						name: 'RowContent',
						pageSection: true,
						fullWidth: true,
						bgColor: '',
						contentId: [101]
					},
					{
						id: 2,
						fullWidth: false,
						name: 'RowContent',
						pageSection: true,
						bgColor: '',
						contentId: [103, 105]
					},
					{
						id: 3,
						fullWidth: false,
						pageSection: true,
						bgColor: '#efefef',
						name: 'RowContent',
						contentId: [118, 120]
					},
					{
						id: 4,
						fullWidth: false,
						pageSection: true,
						bgColor: '#fff',
						name: 'RowContent',
						contentId: [122]
					},
					{
						id: 5,
						fullWidth: false,
						pageSection: true,
						bgColor: '#efefef',
						name: 'RowContent',
						contentId: [124]
					}
				]
			},
			{
				id: 4,
				title: "About",
				description: "About Page",
				url: "/about",
				layout: layouts[1],
				pageContent: []
			},
			{
				id: 7,
				title: "Contact",
				description: "Contact Page",
				url: "/contact",
				layout: layouts[1],
				pageContent: []
			},
			{
				id: 3,
				title: "Announcements",
				description: "Announcement Page",
				url: "/announcemets",
				layout: layouts[1],
				pageContent: [
					{
						id: 2,
						fullWidth: false,
						name: 'RowContent',
						pageSection: true,
						bgColor: '',
						contentId: [103]
					}
				]
			}

    ];

    const result = await pages.insertMany(docs);

    console.log(`${result.insertedCount} documents were inserted`);

  } finally {

    await client.close();

  }

}

run().catch(console.dir);