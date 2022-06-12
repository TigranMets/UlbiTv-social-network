import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import MyButton from '../MyButton/MyButton';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className='pageWrapper'>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    className={page === p ? 'currentPage' : 'page'}
                    key={p}>{p}
                </MyButton>
            )}
        </div>
    );
}

export default Pagination;