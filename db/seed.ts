import { db, ReadingConfirmations, Readings, SupportGroups, Testimonials } from 'astro:db';

export default async function() {
  await db.insert(ReadingConfirmations).values([
    { 
		name: "Rajeev Ranjan Jha", 
		email: "rajeevmyname@gmail.com", 
		phone: "+91-7042457421",
		contribution: 100,
		readingDate: new Date("2025-01-12"),
	 },
	 {
		name: "Arushi Ralli", 
		email: "connectchildrensbooks@gmail.com", 
		phone: "+91-9599944099",
		contribution: 100,
		readingDate: new Date("2025-01-12")
	 }
  ]);

  await db.insert(Readings).values([
	{
		id: 1,
		title: "We, the Children of India",
		bookCover: "https://m.media-amazon.com/images/I/61Dnp3FAowL._SL1000_.jpg",
		date: new Date("2025-01-26"),
		startTime: 960,
		endTime: 1080,
		location: "Online",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque perferendis eveniet atque cum, consequatur neque necessitatibus in recusandae laboriosam facere modi officia dignissimos ea accusamus ducimus, facilis aliquid quo?",
		message: "All readings are based on pay what you want model. The proceeds for this reading will go towards adding more books to the Children's Book For All library in Dharamshala, Himachal Pradesh",
		calendar: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Y2tyMzJwMWg3MWdqMmI5azYwcmo4YjlrNmhqNjRiYjE2bGhqNmI5bGNjcjNpbzlwY2RpajRjMWdjZyByYWplZXZteW5hbWVAbQ&tmsrc=rajeevmyname%40gmail.com",
		facilitators: [
			{
				'name': 'Arushi Ralli',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/arushi-ralli',
			},
			{
				'name': 'Rajeev Ranjan Jha',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/rajeev-jha',
			}],
		tags: "grief, loneliness, friendship",
	},
	{
		id: 2,
		title: "Ish",
		bookCover: "https://m.media-amazon.com/images/I/61Dnp3FAowL._SL1000_.jpg",
		date: new Date("2025-12-31"),
		startTime: 450,
		endTime: 820,
		location: "Offline",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque perferendis eveniet atque cum, consequatur neque necessitatibus in recusandae laboriosam facere modi officia dignissimos ea accusamus ducimus, facilis aliquid quo?",
		message: "All readings are based on pay what you want model. The proceeds for this reading will go towards adding more books to the Children's Book For All library.",
		calendar: "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Y2tyMzJwMWg3MWdqMmI5azYwcmo4YjlrNmhqNjRiYjE2bGhqNmI5bGNjcjNpbzlwY2RpajRjMWdjZyByYWplZXZteW5hbWVAbQ&tmsrc=rajeevmyname%40gmail.com",
		facilitators: [
			{
				'name': 'Arushi Ralli',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/arushi-ralli',
			},
			{
				'name': 'Rajeev Ranjan Jha',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/rajeev-jha',
			}],
		tags: "grief, loneliness, friendship",
		goLive: true
	}
  ]);

  await db.insert(SupportGroups).values([
	{
		id: 1,
		title: "Happiness Support Group",
		coverImage: "https://ik.imagekit.io/ty6gikkxo/sg/happyness(1).png",
		date: new Date("2025-10-05"),
		sessionsCount: 12,
		frequency: "Every Sunday",
		startTime: 660,
		endTime: 780,
		location: "Online",
		description: "happiness",
		cost: 5000,
		tags: "positive psychology, well-being, community",
		facilitators: [
			{
				'name': 'Arushi Ralli',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/arushi-ralli',
			},
			{
				'name': 'Rajeev Ranjan Jha',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/rajeev-jha',
			}],
		goLive: false
	},
	{
		id: 2,
		title: "Grief Support Group",
		coverImage: "https://ik.imagekit.io/ty6gikkxo/sg/grief2.png",
		date: new Date("2025-10-19"),
		sessionsCount: 12,
		frequency: "Every Sunday",
		startTime: 660,
		endTime: 780,
		location: "Online",
		description: "grief",
		cost: 5000,
		tags: "navigating grief, healing, hope",
		facilitators: [
			{
				'name': 'Vandita Rungta',
				'profile_image': '/',
				'profile_link': '/arushi-ralli',
			},
			{
				'name': 'Rajeev Ranjan Jha',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/rajeev-jha',
			}],
		goLive: true
	},
	{
		id: 3,
		title: "Support Group for CSA Survivors",
		coverImage: "https://ik.imagekit.io/ty6gikkxo/sg/csa.png?updatedAt=1750821934904",
		date: new Date("2025-10-21"),
		sessionsCount: 12,
		frequency: "Alternate Saturdays",
		startTime: 660,
		endTime: 780,
		location: "Online",
		description: "circle-of-care",
		cost: 36000,
		tags: "navigating grief, healing, hope",
		facilitators: [
			{
				'name': 'Arushi Ralli',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/arushi-ralli',
			},
			{
				'name': 'Nabonita Banerjee',
				'profile_image': 'https://placehold.co/50',
				'profile_link': '/rajeev-jha',
			}],
		goLive: true
	}
  ])
  await db.insert(Testimonials).values([
    {
        "groupId": 3,
        "feedback": "Its somewhere beyond words because it was never a thought that the kindness, compassion of the members of the group and discussions and lived experiences may feel so warm and supportive in the context of solidarity and support to response to a childhood trauma. I feel so many wounds got seen and nursed through this space!",
        "groupName": "Tana Bana"
    },
    {
        "groupId": 3,
        "feedback": "Like the warmth of fire at night in the middle of a forest. The abused part of me that will always be a lot for the world that i live in, actually found a place where it belongs. I love that I have a space now for me to show up with this part of myself and fully experience life as a survivor.",
        "groupName":"Tana Bana"
    },
    {
        "groupId": 2,
        "feedback": "It's the first time I felt the healing and goodness of being part of a group where you can just .. be. I can talk about the deepest painful parts of my life and feel held, supported and empathised. I don't have to over explain. I love it. It inspires me to hold myself with the same level of care outside the sessions. I'm still melting.",
        "groupName":"Tana Bana"
    }
])
}