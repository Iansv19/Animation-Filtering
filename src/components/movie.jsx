import React from "react";
import {motion} from "framer-motion";

function Movie(props){
    return(
        <motion.div 
          layout
          animate={{ opacity:1}}
          initial={{ opacity:0}}
          exit={{ opacity:0}}
          transition={{duration: 0.5}}
          >
            <h2 className=" text-sm">{props.title}</h2>
            <img className=" w-full h-max"
             src={"https://image.tmdb.org/t/p/w500"+ props.img} alt="" 

             />
        </motion.div>
    );
}

export default Movie;