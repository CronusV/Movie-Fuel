import React from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import FetchResults from "./FetchResults";
interface query{
    text:string | null,
    language:string | null,
    page:number | null
}
interface resultItem {
    adult: boolean,
    backdrop_path: string | null,
    genre_ids: number[] | number,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
function SearchPage(props:query){
    function searchList(props:query) {
        let results = FetchResults({text:"barbie",language:"en-US",page:1})
        return (
          <Scroll>
            <SearchList resultlist={results} />
          </Scroll>
        );
      }
      if(props?.text !== null){
        return(
            <>
                <h1> Search Results </h1>
                {searchList(props)}
            </>
        )
      }
      else{
        return(
            <>
            </>
        )
      }
    
}

export default SearchPage