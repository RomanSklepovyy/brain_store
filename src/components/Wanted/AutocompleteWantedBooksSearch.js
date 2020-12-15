import React, {Fragment, useState} from "react";
import {Input} from "reactstrap";
import {Link} from "react-router-dom";

const AutocompleteWantedBooksSearch = ({updateSearchQuery, searchOptions, searchQuery}) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const onChange = e => {
        updateSearchQuery(e.target.value);
        setFilteredSuggestions(searchOptions.filter(suggestion => suggestion.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1));
        setShowSuggestions(true);
    };

    return (
        <Fragment>
            <Input placeholder="Search in your wanted" style={{maxWidth: "50vh"}} className="ml-auto mr-auto mt-2 mb-2" onChange={onChange} value={searchQuery}/>
            {
                 (showSuggestions && searchQuery && filteredSuggestions.length) ?
                     <div className="m-2 border rounded d-flex flex-column ml-auto mr-auto" style={{maxWidth: "50vh", maxHeight: "40vh"}}>
                        {filteredSuggestions.map(suggestion =>
                            <Link className="text-link" to={'/bookInfo/' + suggestion.id}>
                                <button className="btn btn-light" key={suggestion.id} value={suggestion.id}> {suggestion.title} </button>
                            </Link>)}
                    </div> : null
            }
        </Fragment>
    )
};

export default AutocompleteWantedBooksSearch;