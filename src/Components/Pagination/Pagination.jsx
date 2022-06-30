import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, indexOfLastPost, indexOfFirstPost }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='pagination'>
                {
                    currentPage - 1 ?
                        <div className='paginationItem' onClick={() => paginate(currentPage - 1)}>
                            Prev
                        </div> :
                        <div className='paginationItem-disabled'>
                            Prev
                        </div>
                }

                {
                    pageNumbers.map(number => (
                        <div key={number} onClick={() => paginate(number)}>
                            {
                                number === currentPage ?
                                    <div className='paginationItem-active'>{currentPage}</div>
                                    :
                                    <div className='paginationItem'>{number}</div>
                            }
                        </div>
                    ))
                }

                {
                    pageNumbers.includes(currentPage + 1) ?
                        <div className='paginationItem' onClick={() => paginate(currentPage + 1)}>
                            Next
                        </div> :
                        <div className='paginationItem-disabled'>
                            Next
                        </div>
                }
            </div>
        </nav>
    );
};

export default Pagination;