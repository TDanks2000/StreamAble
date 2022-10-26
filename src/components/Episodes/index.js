import React, { useMemo, useState } from "react";
import Pagination from "../Pagination";
import {
  Episode,
  EpisodeInner,
  EpisodesContainer,
  EpisodesTitle,
  EpisodesWrapper,
  NoEpisode,
  PaginationContainer,
} from "./Episodes.styles";

const PageSize = 25;

function InfoEpisodes(props) {
  const { episodes, id, color, ep } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const currentEpisodesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return episodes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, episodes]);

  return (
    <EpisodesContainer>
      <EpisodesTitle>Episodes</EpisodesTitle>
      <EpisodesWrapper>
        {episodes?.length <= 0 ? (
          <NoEpisode>
            <EpisodeInner>No episodes</EpisodeInner>
          </NoEpisode>
        ) : (
          currentEpisodesData.map(({ title, image, number }, _index) => {
            return (
              <Episode
                to={`/anime/${id}/episode/${number}`}
                key={number}
                image={image}
                color={color}
                className={number === ep ? "active" : ""}
              >
                <EpisodeInner className={number === ep ? "active" : ""}>
                  {!title ? `Episode ${number}` : `${number} - ${title}`}
                </EpisodeInner>
              </Episode>
            );
          })
        )}
      </EpisodesWrapper>
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={episodes.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationContainer>
    </EpisodesContainer>
  );
}

export default InfoEpisodes;
