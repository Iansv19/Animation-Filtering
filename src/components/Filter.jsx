/* eslint-disable */
import React from "react";
import { useEffect } from "react";


function Filter(props){

    useEffect(() => {
       
       if(props.activeGenre === 0){
        props.setFilter(props.popular);
        return;
       }

       const filtered = props.popular.filter(
        (movie) => movie.genre_ids.includes(props.activeGenre)
        )
        props.setFilter(filtered);
    },[props.activeGenre])
    return(
        <div className="filter-container">
            <button className= {props.activeGenre===0? "active":""} onClick={() => props.setActiveGenre(0)}  >All</button>
            <button className= {props.activeGenre===28? "active":""} onClick={() => props.setActiveGenre(28)} >Action</button>
            <button className= {props.activeGenre===27? "active":""} onClick={() => props.setActiveGenre(27)} >Horror</button>
            <button className= {props.activeGenre===35? "active":""} onClick={() => props.setActiveGenre(35)} >Comedy</button>
        </div>
    );
}

export default Filter;