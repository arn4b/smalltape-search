import React, { useState, useEffect } from "react";
import './SearchBox.css'
import { BiSearchAlt } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { AiOutlineLoading } from 'react-icons/ai'

import Stocks from "../Stocks/Stocks";
import Pagination from "../Pagination/Pagination";

import { useDebounce } from "../../CustomHooks/useDebounce";
import { useCachedSearch } from "../../CustomHooks/useCachedSearch"

function SearchBar({ placeholder }) {
    const api_url = "https://mocki.io/v1/ee033a1e-56ff-4d5f-a459-8c5cc1d0aa36"

    // search term state
    const [wordEntered, setWordEntered] = useState("");

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const debouncedSearchTerm = useDebounce(wordEntered, 500);

    const apiResponseData = useCachedSearch(api_url, debouncedSearchTerm);

    // calculating current number of pages
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = apiResponseData.data.slice(indexOfFirstPost, indexOfLastPost);

    // function to change the current page number
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // function to clear the current search term in the text box
    const clearInput = () => {
        setWordEntered("");
    };

    useEffect(() => {
        if (wordEntered === "")
            setCurrentPage(1)
    }, [wordEntered])

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={(e) => setWordEntered(e.target.value)}
                />

                <div className="searchIcon">
                    {apiResponseData.data.length === 0 ? (
                        <BiSearchAlt className="searchIcons" />
                    ) : (
                        <MdClose className="searchIcons" onClick={clearInput} />
                    )}
                </div>

            </div>


            {apiResponseData.loading && wordEntered ?
                <div className="loading">Loading
                    <AiOutlineLoading className="loadingIcon" />
                </div> :
                apiResponseData.data.length !== 0 && (
                    <div className="dataResult">
                        <Stocks stocks={currentPosts} />
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={apiResponseData.data.length}
                            paginate={paginate}
                            currentPage={currentPage}
                            indexOfFirstPost={indexOfFirstPost}
                            indexOfLastPost={indexOfLastPost}
                        />
                    </div>
                )
            }

        </div>
    );
}

export default SearchBar;
