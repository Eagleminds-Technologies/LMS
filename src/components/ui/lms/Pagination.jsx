import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../../utils/helpers";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showPageInfo = true,
  disabled = false,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    
    if (!showEllipsis) {
      // Show all pages if total pages are 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Complex pagination with ellipsis
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && !disabled) {
      onPageChange(page);
    }
  };

  const baseButtonStyles = cn(
    "relative inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 py-2 text-sm rounded-md transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 dark:focus:ring-primary/30 dark:focus:ring-offset-gray-800",
    disabled && "cursor-not-allowed opacity-50",
  );

  const activeStyles = "bg-primary text-primary-foreground border-primary";
  const inactiveStyles = "border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700";

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center justify-between", className)}
    >
      {/* Previous button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        className={cn(
          baseButtonStyles,
          "mr-2",
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : inactiveStyles
        )}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Page numbers */}
      <div className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => (
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-2"
            >
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={disabled}
              className={cn(
                baseButtonStyles,
                page === currentPage ? activeStyles : inactiveStyles
              )}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        className={cn(
          baseButtonStyles,
          "ml-2",
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : inactiveStyles
        )}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Page info */}
      {showPageInfo && (
        <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </nav>
  );
};