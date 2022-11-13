import React from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import {
  Arrow,
  Dots,
  PaginateItem,
  PaginationContainer,
} from "./Pagination.styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (currentPage === lastPage) return false;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return false;
    onPageChange(currentPage - 1);
  };

  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <Arrow
        onClick={onPrevious}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <AiOutlineArrowLeft />
      </Arrow>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <Dots>&#8230;</Dots>;
        }

        // Render our Page Pills
        return (
          <PaginateItem
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === currentPage ? "selected" : ""}
            key={pageNumber}
          >
            {pageNumber}
          </PaginateItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <Arrow
        onClick={onNext}
        className={currentPage === lastPage ? "disabled" : ""}
      >
        <AiOutlineArrowRight />
      </Arrow>
    </PaginationContainer>
  );
};

export default Pagination;
