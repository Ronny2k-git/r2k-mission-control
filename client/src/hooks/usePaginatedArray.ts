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
  const currentPageLive = Math.max(1, page ?? 1);

  return {
    value: data?.slice(
      (currentPageLive - 1) * maximumPerPage,
      currentPageLive * maximumPerPage,
    ),
    totalPages: Math.ceil((data?.length ?? 0) / maximumPerPage),
  };
}
