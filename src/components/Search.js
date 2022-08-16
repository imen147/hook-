import * as React from 'react';

import Rating from '@mui/material/Rating';



const Search =({setSearchByName, getfilterByrate})=>{
    return(
        <div> 
            <input type="text" onChange={(e)=>setSearchByName(e.target.value)} />
            <Rating
        name="simple-controlled"
       
        onChange={(event, newValue) => {
            getfilterByrate(newValue);
        }}
      />
        </div>

    )
}
export default Search;