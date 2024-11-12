import { useState } from "react";


function Pagination(props){

    const {pageNumber, previousPageFn,nextPageFn } =props;


    return <div className="text-white flex justify-center items-center bg-gray-400 mt-8 h-[50px] ">

        <div onClick={previousPageFn}  className="px-8 cursor-pointer"> Prev </div>

        <div> {pageNumber} </div>

        <div onClick={nextPageFn} className="px-8 cursor-pointer"> Next </div>

    </div>

}

export default Pagination;