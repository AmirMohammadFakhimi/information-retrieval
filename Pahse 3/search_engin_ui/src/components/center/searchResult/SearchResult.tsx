import React, {useState} from "react";
import './SearchResult.css';
import {atom, useRecoilValue} from "recoil";
import {eachSearchResultType, searchResultType} from "../../../global/Types";
import CircularProgress from "@mui/material/CircularProgress";

// searchResultState is undefined when the user has not searched anything, yet
// searchResultState is null when the user has searched something, but the result is not yet fetched
// searchResultState is an array of searchResultType when the result is fetched
export const searchResultState = atom<searchResultType | undefined | null>({
    key: 'searchResultState',
    default: undefined
})

function SearchResult() {
    const searchResult = useRecoilValue(searchResultState)
    const [selectedDocId, setSelectedDocId] =
        useState<string | undefined>(undefined)

    function getBottomTitleText(searchResult: eachSearchResultType) {
        if (searchResult.docId === selectedDocId)
            return searchResult.abstract === 'nan' ? 'No abstract available!' : searchResult.abstract
        else
            return searchResult.abstractSnippet
    }


    function getEachSearchResult(searchResult: eachSearchResultType) {
        return (
            <div className={'each-search-result-div'} onClick={(e) => {
                if (window.getSelection()?.toString() !== '')
                    return

                if (searchResult.docId === selectedDocId)
                    setSelectedDocId(undefined)
                else
                    setSelectedDocId(searchResult.docId)
            }}>
                <div className={'each-search-result-title'}>{searchResult.title}</div>
                <div className={'each-search-result-bottom-title-text'}>{getBottomTitleText(searchResult)}</div>
            </div>
        )
    }

    return (
        <div id={'search-result-main-div'}>
            {searchResult === undefined ?
                <div>
                    <h1 className={'result-text'}>Search to show you the best results 😉</h1>
                </div> :
                searchResult === null ?
                    <CircularProgress/> :
                    searchResult.length === 0 ?
                        <div>
                            <h1 className={'result-text'}>Sorry, no results found 😔</h1>
                        </div> :
                        <div id={'search-result-div'}>
                            <h1 id={'results-number'}>Showing {searchResult.length} results</h1>
                            {searchResult.map(eachSearchResult => getEachSearchResult(eachSearchResult))}
                        </div>
            }
        </div>
    )
}

export default SearchResult;