import React, { useState } from 'react';
import {Pagination} from 'react-bootstrap'

function Paginate({itemsPerPage,changePage, currentPage,users}) {
    // const [currentPage,setCurrentPage]=useState(1)
    const lastPage=Math.ceil(users.length/itemsPerPage)
    // const changePage=(num)=>{
    //     setCurrentPage(num)
    // }
  return (
    <Pagination>
        <Pagination.First onClick={()=>changePage(1)}/>
        <Pagination.Prev disabled={currentPage===1 ? true : false} onClick={()=>changePage(currentPage>1 ? currentPage-1: 1)}/>
        <Pagination.Item onClick={()=>changePage(currentPage>5 ? currentPage-4 : 1)}>{currentPage>5 ? currentPage-4 : 1}</Pagination.Item>
        <Pagination.Item onClick={()=>changePage(currentPage>5 ? currentPage-3 : 2)}>{currentPage>5 ? currentPage-3 : 2}</Pagination.Item>
        <Pagination.Item onClick={()=>changePage(currentPage>5 ? currentPage-2 : 3)}>{currentPage>5 ? currentPage-2 : 3}</Pagination.Item>
        <Pagination.Item onClick={()=>changePage(currentPage>5 ? currentPage-1 : 4)}>{currentPage>5 ? currentPage-1 : 4}</Pagination.Item>
        <Pagination.Item onClick={()=>changePage(currentPage>5 ? currentPage : 5)}>{currentPage>5 ? currentPage : 5}</Pagination.Item>
        <Pagination.Next disabled={currentPage===lastPage ? true : false} onClick={()=>changePage(currentPage<lastPage ? currentPage+1 : lastPage)}/>
        <Pagination.Last onClick={()=>changePage(lastPage)}/>
    </Pagination>
  )
}

export default Paginate