import React from 'react';

function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <div>
            <div>
                {[...Array(totalPages)].map((_, i) => (
                    <button className='nagition' key={i} onClick={() => onPageChange(i)} disabled={i === currentPage}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;
