import { faker } from "@faker-js/faker";

const getMovie = () => {
  const movie = faker.music.genre();

  return movie;
};

const getSongs = () => {
  const songs = faker.music.songName();

  return songs;
};

export { getMovie, getSongs };
