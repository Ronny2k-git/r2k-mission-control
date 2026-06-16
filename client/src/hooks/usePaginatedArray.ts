type usePaginantedArrayProps<T> = {
  data: T[];
  page: number;
  maximumPerPage: number;
};

export function usePaginantedArray<T>({
  data,
  page,
  maximumPerPage,
}: usePaginantedArrayProps<T>) {
  const totalPages = Math.max(1, Math.ceil(data.length / maximumPerPage));

  const currentPageLive = Math.min(Math.max(1, page ?? 1), totalPages);

  return {
    value: data.slice(
      (currentPageLive - 1) * maximumPerPage,
      currentPageLive * maximumPerPage,
    ),
    totalPages,
  };
}
