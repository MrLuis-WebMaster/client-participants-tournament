import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Pagination({
  page,
  itemsPerPage,
  totalCount,
  goToNextPage,
  goToPreviousPage,
  goToPage
}: {
  page: number;
  itemsPerPage: number;
  totalCount: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;

}) {
  const maxPage = Math.ceil(totalCount / itemsPerPage);

  const canGoBack = page > 1;
  const canGoForward = page < maxPage;
  const pagesToDisplay = [page - 3, page - 2, page - 1, page, page + 1, page + 2, page + 3].filter(
    (p) => p > 0 && p <= maxPage
  );

  return (
    <div className="flex items-center justify-between rounded-lg bg-dark px-4 py-3 sm:px-6">
      <button
        onClick={goToPreviousPage}
        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 ${
          !canGoBack ? 'cursor-not-allowed' : ''
        }`}
        disabled={!canGoBack}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="flex items-center space-x-2">
        {pagesToDisplay.map((p) => (
          <a
            key={p}
            href="#"
            onClick={() => {goToPage(p)}}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              p === page ? 'bg-indigo-600 text-white bg-primary' : ''
            }`}
          >
            {p}
          </a>
        ))}
      </div>
      <button
        onClick={goToNextPage}
        className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover.bg-gray-50 focus:outline-offset-0 ${
          !canGoForward ? 'cursor-not-allowed' : ''
        }`}
        disabled={!canGoForward}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
