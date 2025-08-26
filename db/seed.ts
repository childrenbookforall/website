import { db, ReadingConfirmations, Readings, SupportGroups } from 'astro:db';

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
		date: new Date("2025-05-19"),
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
		goLive: false
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
		goLive: true
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
		description: "csa",
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
}