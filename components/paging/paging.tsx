import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paging = ({
  total,
  current,
  locale,
}: {
  total: number;
  current: number;
  locale: "az" | "en";
}) => {
  const totalPages = Math.ceil(total / 4); // Total number of pages
  const maxVisiblePages = 3; // Number of visible pages around the current page

  // Function to generate the range of visible pages
  const getVisiblePages = () => {
    const pages = [];
    let startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust startPage if endPage is at the limit
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add pages to the array
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="my-20">
      <PaginationContent>
        {/* Previous Button */}
        {current !== 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/${locale}/blog?page=${current - 1}`} />
          </PaginationItem>
        )}

        {/* First Page */}
        {!visiblePages.includes(1) && (
          <>
            <PaginationItem>
              <PaginationLink href={`/${locale}/blog?page=1`}>1</PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && <PaginationEllipsis />}
          </>
        )}

        {/* Visible Pages */}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={current === page}
              href={`/${locale}/blog?page=${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last Page */}
        {!visiblePages.includes(totalPages) && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationEllipsis />
            )}
            <PaginationItem>
              <PaginationLink href={`/${locale}/blog?page=${totalPages}`}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        {current !== totalPages && (
          <PaginationItem>
            <PaginationNext href={`/${locale}/blog?page=${current + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default Paging;
