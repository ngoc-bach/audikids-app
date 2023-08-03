import React from "react";

const Pagination = ({
  goToNextPage,
  goToPreviousPage,
  goToPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div
      style={{
        margin: "3rem auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Pagination controls */}
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="btn-pagination"
      >
        Previous
      </button>

      {/* Render page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          disabled={currentPage === index + 1}
          className="btn-pagination"
          style={{ margin: "0.3rem" }}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="btn-pagination"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
