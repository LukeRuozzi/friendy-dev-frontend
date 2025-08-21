import React from 'react';

type ComponentProps = {
    currentPage: number,
    totalPages: number,
    onPageChange: (pageNum: number) => void
}

const Pagination: React.FC<ComponentProps> = ({
                                                  currentPage,
                                                  totalPages,
                                                  onPageChange
                                              }) => {

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex justify-center gap-4 mt-8">
            {Array.from({length: totalPages}, (_, idx) => (
                <button
                    key={idx + 1}
                    onClick={() => onPageChange(idx + 1)}
                    className={`${currentPage === idx + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"} rounded py-1 px-4 cursor-pointer`}
                >
                    {idx + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;