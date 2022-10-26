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

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <PaginateItem onClick={onPrevious}>
        <Arrow>
          <AiOutlineArrowLeft />
        </Arrow>
      </PaginateItem>
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
          >
            {pageNumber}
          </PaginateItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <PaginateItem
        onClick={onNext}
        className={currentPage === lastPage ? "disabled" : ""}
      >
        <Arrow>
          <AiOutlineArrowRight />
        </Arrow>
      </PaginateItem>
    </PaginationContainer>
  );
};

export default Pagination;
