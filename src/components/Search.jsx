import { Divider } from "antd";
import { useState } from "react";

function SearchFood(props) {

    const [searchInput, setSearchInput] = useState("");

    function submitSearch(event) {
        event.preventDefault()
        setSearchInput(event.target.value) 

        props.searchForFood(event.target.value)
       
    }



    return (
        <Divider>
            <input placeholder="Search your favourite food" value={searchInput} onChange={(event) => submitSearch(event)}/>
        </Divider>
    )
}

export default SearchFood