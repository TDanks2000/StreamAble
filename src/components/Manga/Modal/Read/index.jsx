import React, { useState } from "react";
import { proxyURL } from "../../../../utils/utils";
import { LastPage, NextPage, PageImage, ReadContainer } from "./Read.styles";

const Read = ({ page: pages, color }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [lastPage, setLastPage] = useState(0);
  const totalPages = pages.length;
  const page = pages[currentPage - 1];

  const handleNextPage = () => {
    if (!nextPage || nextPage >= totalPages) setNextPage(false);
    else {
      setCurrentPage(nextPage);
      setLastPage((prev) => prev + 1);
      setNextPage((prev) => prev + 1);
    }
  };

  const handleLastPage = () => {
    if (!lastPage || lastPage <= 0) setLastPage(false);
    else {
      setCurrentPage(lastPage);
      setLastPage((prev) => prev - 1);
      setNextPage((prev) => prev - 1);
    }
  };

  return (
    <ReadContainer>
      {/* LAST PAGE */}
      <LastPage
        onClick={handleLastPage}
        className={lastPage <= 0 || !lastPage ? "disabled" : ""}
      ></LastPage>

      {/* PAGE IMAGE */}
      <PageImage color={color}>
        <img src={proxyURL + page.img} alt={page.page} />
      </PageImage>

      {/* NEXT PAGE */}
      <NextPage
        onClick={handleNextPage}
        className={nextPage >= totalPages || !nextPage ? "disabled" : ""}
      ></NextPage>
    </ReadContainer>
  );
};

export default Read;
