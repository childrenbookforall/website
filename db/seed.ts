import { db, ReadingConfirmations, Readings } from 'astro:db';

export default async function() {
  await db.insert(ReadingConfirmations).values([
    { 
		name: "Rajeev Ranjan Jha", 
		email: "rajeevmyname@gmail.com", 
		phone: "+91-7042457421",
		contribution: 100,
		readingDate: new Date("2025-01-12")
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
		tags: "grief, loneliness, friendship"
	},
	{
		id: 2,
		title: "Ish",
		bookCover: "https://m.media-amazon.com/images/I/61Dnp3FAowL._SL1000_.jpg",
		date: new Date("2025-02-19"),
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
		tags: "grief, loneliness, friendship"
	}
  ])
}