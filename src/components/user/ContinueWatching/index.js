import React from "react";
import PostComponent from "../../Post";
import { UserContainer } from "../styles";
import { Container } from "./ContinueWatching.styles";

const data = [
  {
    title: { userPreferred: "My Hero Academia" },
    id: "21459",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
    rating: "76",
    wantWatched: true,
    episodeWatched: "22",
    releaseDate: "2014",
    totalEpisodes: "25",
    duration: "24",
    progress: "100",
    type: "TV",
  },
  {
    title: { userPreferred: "HAIKYUU" },
    id: "111222",
    image: "https://m.media-amazon.com/images/I/71VjwmyvbpL._AC_SL1500_.jpg",
    rating: "76",
    wantWatched: true,
    progress: "55",
    episodeWatched: "12",
    releaseDate: "2014",
    totalEpisodes: "25",
    duration: "24",
    type: "TV",
  },
];

export const UserCWComponent = () => {
  return (
    <UserContainer>
      <Container>
        {data.map((user, index) => (
          <PostComponent key={`post-cw-${index}`} {...user} />
        ))}
      </Container>
    </UserContainer>
  );
};
