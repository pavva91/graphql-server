let games = [
  { id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
  { id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Elden Ring", platform: ["Switch", "PS5"] },
  { id: "4", title: "Mario Kart", platform: ["PC"] },
  { id: "5", title: "Pokemon", platform: ["Xbox"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem ipsum", author_id: "1", game_id: "2" },
  { id: "2", rating: 6, content: "lorem ipsum", author_id: "2", game_id: "3" },
  { id: "3", rating: 10, content: "lorem ipsum", author_id: "1", game_id: "4" },
  { id: "4", rating: 7, content: "lorem ipsum", author_id: "3", game_id: "3" },
  { id: "5", rating: 5, content: "lorem ipsum", author_id: "1", game_id: "2" },
  { id: "6", rating: 10, content: "lorem ipsum", author_id: "2", game_id: "1" },
];

export default { games, authors, reviews };
