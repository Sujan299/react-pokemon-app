import React from 'react'

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
    return (
        <div className='PrevNext'>
            {/* only render if front condition is true */}
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}