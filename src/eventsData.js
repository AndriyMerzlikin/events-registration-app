 const events = [
	{
		title: "Summer Music Fest",
		description: "A weekend-long festival with live performances from top artists across genres like pop, rock, and hip-hop. Fun for the whole family!",
		eventDate: "2024-06-20",
		organizer: "Global Beats Inc."
	},
	{
		title: "Comedy Night Extravaganza",
		description: "An evening filled with laughter featuring top comedians from around the country.",
		eventDate: "2024-07-15",
		organizer: "Laugh Factory Productions"
	},
	{
		title: "Gaming Marathon: Battle Royale Edition",
		description: "Join the ultimate battle royale tournament with exciting prizes for top players.",
		eventDate: "2024-08-05",
		organizer: "Gamer's Paradise"
	},
	{
		title: "Outdoor Movie Night",
		description: "Enjoy a classic adventure movie under the stars with free popcorn for all.",
		eventDate: "2024-06-30",
		organizer: "CineWorld Events"
	},
	{
		title: "Art & Wine Festival",
		description: "Local art exhibitions paired with wine tastings from top vineyards.",
		eventDate: "2024-09-10",
		organizer: "Creative Minds Collective"
	},
	{
		title: "Halloween Costume Bash",
		description: "A massive costume party with music, games, and a contest for the best costume.",
		eventDate: "2024-10-31",
		organizer: "Fright Fest Crew"
	},
	{
		title: "Retro Video Game Tournament",
		description: "A throwback gaming tournament featuring classics from the '90s.",
		eventDate: "2024-11-05",
		organizer: "Old School Gamers"
	},
	{
		title: "Winter Wonderland Parade",
		description: "A holiday parade with floats, performers, and a giant Christmas tree lighting.",
		eventDate: "2024-12-20",
		organizer: "Holiday Spirit Association"
	},
	{
		title: "New Year's Eve Fireworks Show",
		description: "Ring in the New Year with a fireworks show at the city's central park.",
		eventDate: "2024-12-31",
		organizer: "City of Entertainment"
	},
	{
		title: "Spring Dance Party",
		description: "An outdoor dance party to celebrate the start of spring with top DJs.",
		eventDate: "2025-03-20",
		organizer: "Dance Nation"
	},
	{
		title: "International Food Festival",
		description: "Taste food from around the world with over 100 food stalls.",
		eventDate: "2024-07-10",
		organizer: "Culinary Explorers"
	},
	{
		title: "Jazz by the Lake",
		description: "A serene evening with live jazz performances by the lake.",
		eventDate: "2024-08-15",
		organizer: "Smooth Sounds Inc."
	},
	{
		title: "Film Makers Workshop",
		description: "A workshop for aspiring filmmakers to learn the art of movie making.",
		eventDate: "2024-09-25",
		organizer: "Hollywood Dreams Studio"
	},
	{
		title: "Brewery Tour & Tasting",
		description: "Take a tour of local breweries and enjoy craft beer tastings.",
		eventDate: "2024-08-10",
		organizer: "Beer Lovers Society"
	},
	{
		title: "Rock the Night Concert",
		description: "A night of electrifying rock music from top local bands.",
		eventDate: "2024-10-20",
		organizer: "Live Rock Promotions"
	},
	{
		title: "Fantasy Book Fair",
		description: "A celebration of fantasy literature with book signings and readings.",
		eventDate: "2024-09-18",
		organizer: "Writers Guild"
	},
	{
		title: "Karaoke Madness",
		description: "Show off your singing skills at our karaoke night. Prizes for the best performances!",
		eventDate: "2024-08-18",
		organizer: "Sing Along Events"
	},
	{
		title: "Photography Exhibition",
		description: "A stunning display of photography from renowned artists.",
		eventDate: "2024-07-22",
		organizer: "Shutterbug Collective"
	},
	{
		title: "Virtual Reality Gaming Expo",
		description: "Experience the future of gaming with hands-on VR demos.",
		eventDate: "2024-09-12",
		organizer: "Tech Wonders Expo"
	},
	{
		title: "Street Food Carnival",
		description: "A lively carnival with street food from various cultures and entertainment for all.",
		eventDate: "2024-08-07",
		organizer: "Flavorful Streets Co."
	},
	{
		title: "Cultural Dance Festival",
		description: "A showcase of traditional dances from around the world.",
		eventDate: "2024-09-30",
		organizer: "Global Moves Association"
	},
	{
		title: "80s Music Revival Night",
		description: "Dance the night away to iconic '80s hits at this themed party.",
		eventDate: "2024-10-12",
		organizer: "Retro Vibes Crew"
	},
	{
		title: "Open Mic Night",
		description: "An open mic event for musicians, poets, and comedians to showcase their talent.",
		eventDate: "2024-07-05",
		organizer: "Creative Voices Hub"
	},
	{
		title: "Indie Film Festival",
		description: "A celebration of independent films with screenings and filmmaker Q&A sessions.",
		eventDate: "2024-09-08",
		organizer: "Cinephiles United"
	},
	{
		title: "Cosplay Convention",
		description: "A weekend convention celebrating anime, comics, and gaming with a cosplay contest.",
		eventDate: "2024-10-05",
		organizer: "Cosplay Heroes"
	},
	{
		title: "Outdoor Adventure Expo",
		description: "A weekend of outdoor activities and demonstrations for adventurers of all kinds.",
		eventDate: "2024-09-15",
		organizer: "Adventure Seekers Club"
	},
	{
		title: "Beach Volleyball Tournament",
		description: "A beach volleyball competition for all skill levels, with prizes for the winners.",
		eventDate: "2024-07-25",
		organizer: "Sports League"
	},
	{
		title: "Live Salsa Night",
		description: "Dance to live salsa music in a fun and energetic atmosphere.",
		eventDate: "2024-07-17",
		organizer: "Salsa Nights Entertainment"
	},
	{
		title: "Crafts & Handmade Market",
		description: "Browse and shop handmade crafts and goods from local artisans.",
		eventDate: "2024-08-11",
		organizer: "Crafty Creations"
	},
	{
		title: "Yoga and Meditation Retreat",
		description: "Relax and rejuvenate at this peaceful yoga and meditation retreat.",
		eventDate: "2024-09-19",
		organizer: "Peaceful Minds Retreat"
	},
	{
		title: "Pirate Adventure Cruise",
		description: "A family-friendly pirate-themed cruise with interactive performances.",
		eventDate: "2024-06-29",
		organizer: "Sea Voyagers"
	},
	{
		title: "Magic Show Spectacular",
		description: "Be amazed by mind-bending magic tricks and illusions.",
		eventDate: "2024-08-20",
		organizer: "Illusion Masters"
	},
	{
		title: "Paint & Sip Party",
		description: "Create your own masterpiece while sipping on your favorite wine.",
		eventDate: "2024-07-27",
		organizer: "Art & Sip Collective"
	},
	{
		title: "Pop Culture Trivia Night",
		description: "Test your knowledge of movies, TV shows, and music at this fun trivia event.",
		eventDate: "2024-09-13",
		organizer: "Trivia Masters"
	},
	{
		title: "Board Game Bonanza",
		description: "A day of board games for all ages with competitions and prizes.",
		eventDate: "2024-08-22",
		organizer: "Game Night Entertainment"
	},
	{
		title: "Street Art Festival",
		description: "Watch live street artists create stunning murals and graffiti.",
		eventDate: "2024-07-29",
		organizer: "Urban Creators"
	},
	{
		title: "Sunset Yoga at the Park",
		description: "Relax and unwind with sunset yoga in the park, suitable for all skill levels.",
		eventDate: "2024-08-12",
		organizer: "Yoga & Wellness Co."
	},
	{
		title: "Hip-Hop Dance Battle",
		description: "Watch dancers go head-to-head in an epic hip-hop dance competition.",
		eventDate: "2024-09-05",
		organizer: "Street Dance Crew"
	},
	{
		title: "Haunted House Experience",
		description: "Get ready for a terrifying journey through a haunted house full of surprises.",
		eventDate: "2024-10-27",
		organizer: "Scare Masters"
	}
];

 export default events


