import React from 'react'
import { Link } from 'gatsby';

import paginationStyles from './Pagination.module.scss';

const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <div className={paginationStyles.paginationContainer}>
            <Link  className={`${paginationStyles.paginationLinks} ${isFirst && paginationStyles.paginationIsDisabled}`} to={prevPage} > ➡ السابقة </Link>
            <Link  className={`${paginationStyles.paginationLinks} ${isLast && paginationStyles.paginationIsDisabled}`} to={nextPage} >  التالية ⬅ </Link>
        </div>
    )
}

export default Pagination
