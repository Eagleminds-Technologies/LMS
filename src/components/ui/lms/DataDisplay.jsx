import React from "react";
import { cn } from "../../../utils/helpers";
import { LoadingSpinner } from "./LoadingSpinner";
import { TableRowSkeleton } from "./Skeleton";

export const DataTable = ({
  columns,
  data,
  loading = false,
  isLoading, // Add support for isLoading prop
  emptyMessage = "No data available",
  className,
  rowClassName,
  onRowClick,
  hoverable = true,
  ...props
}) => {
  // Use either loading or isLoading prop
  const isLoadingState = loading || isLoading;

  if (isLoadingState) {
    return (
      <div className={cn("relative overflow-x-auto", className)} {...props}>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {columns.map((column, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400",
                    column.className
                  )}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr 
                key={i} 
                className="border-b border-gray-100 dark:border-gray-800"
              >
                {columns.map((_, j) => (
                  <td key={j} className="px-4 py-3">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-x-auto", className)} {...props}>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {columns.map((column, i) => (
              <th
                key={i}
                className={cn(
                  "px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-400",
                  column.className
                )}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              onClick={() => onRowClick?.(row)}
              className={cn(
                "border-b border-gray-100 dark:border-gray-800",
                hoverable && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",
                rowClassName
              )}
            >
              {columns.map((column, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 text-sm",
                    column.cellClassName
                  )}
                >
                  {column.cell ? column.cell(row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const DataList = ({
  data,
  renderItem,
  loading = false,
  isLoading, // Add isLoading prop
  emptyMessage = "No items found",
  loadingItems = 3,
  className,
  itemClassName,
  ...props
}) => {
  // Use either loading or isLoading prop
  const isLoadingState = loading || isLoading;

  if (isLoadingState) {
    return (
      <div className="space-y-4">
        {[...Array(loadingItems)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "animate-pulse rounded-lg border border-gray-200 p-4 dark:border-gray-700",
              itemClassName
            )}
          >
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)} {...props}>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export const DataGrid = ({
  data,
  renderItem,
  loading = false,
  isLoading, // Add isLoading prop
  emptyMessage = "No items found",
  loadingItems = 6,
  className,
  itemClassName,
  columns = 3,
  ...props
}) => {
  // Use either loading or isLoading prop
  const isLoadingState = loading || isLoading;

  if (isLoadingState) {
    return (
      <div
        className={cn(
          "grid gap-4",
          columns === 2 && "grid-cols-1 md:grid-cols-2",
          columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {[...Array(loadingItems)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "animate-pulse rounded-lg border border-gray-200 p-4 dark:border-gray-700",
              itemClassName
            )}
          >
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
      {...props}
    >
      {data.map((item, index) => renderItem(item, index))}
    </div>
  );
};