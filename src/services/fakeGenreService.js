export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471833", name: "Family" },
  { _id: "5b21ca3eeb7f6fbccd471888", name: "Romance" },
  { _id: "5b21ca3eeb7f6fbccd471866", name: "Science-Fiction" },
  { _id: "5b21ca3eeb7f6fbccd471840", name: "Drama" }
];

export function getGenres() {
  return genres.filter(g => g);
}
