import React, {useEffect, useState} from "react";
import './SearchInput.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {abstractWeightState, maxResultCountState, searchMethodState} from "../filters/Filters";
import {searchApiCall} from "../../../global/ApiCalls";
import {eachSearchApiResultType, searchApiResultType, searchResultType, searchType} from "../../../global/Types";
import {onAxiosError, onAxiosSuccess} from "../../../global/Errors";
import {searchResultState} from "../searchResult/SearchResult";
import CircularProgress from '@mui/material/CircularProgress';

function SearchInput() {
    const [titleQuery, setTitleQuery] = useState<string>('')
    const [abstractQuery, setAbstractQuery] = useState<string>('')
    const [maxResultCount, setMaxResultCount] = useRecoilState(maxResultCountState)
    const searchMethod = useRecoilValue(searchMethodState)
    const [abstractWeight, setAbstractWeight] = useRecoilState(abstractWeightState)

    const [isSearching, setIsSearching] = useState<boolean>(false)
    const setSearchResult = useSetRecoilState(searchResultState)

    const [searchApiResult, setSearchApiResult] =
        useState<searchApiResultType | undefined>(undefined)

    useEffect(() => {
        if (searchApiResult === undefined) {
            setSearchResult(undefined)
            return
        }

        if (searchApiResult.length > 0) {
            const searchResult: searchResultType = []

            searchApiResult.forEach((result: eachSearchApiResultType) => {
                searchResult.push({
                    docId: result.doc_id,
                    title: result.title,
                    abstract: result.abstract,
                    finalScore: result.final_score,
                    titleScore: result.title_score,
                    abstractScore: result.abstract_score,
                    titleSnippet: result.title_snippet,
                    abstractSnippet: result.abstract_snippet
                })
            })
            setSearchResult(searchResult)
        } else if (searchApiResult.length === 0)
            setSearchResult([])
    }, [searchApiResult, setSearchResult])

    const search = () => {
        setIsSearching(true)
        setSearchResult(null)
        const userSearch: searchType = {
            titleQuery: titleQuery,
            abstractQuery: abstractQuery,
            maxResultCount: +maxResultCount,
            method: searchMethod,
            weight: +abstractWeight
        }
        setMaxResultCount((+maxResultCount).toString())
        setAbstractWeight((+abstractWeight).toString())

        searchApiCall(userSearch).then(
            res =>
                onAxiosSuccess({
                    res: res, onSuccess: async () => {
                        setIsSearching(false)
                        setSearchApiResult(JSON.parse(res.data))
                    }
                }),
            error => onAxiosError({
                    axiosError: error,
                    onError: () => {
                        setIsSearching(false)
                        setSearchResult([])
                    }
                }
            ))
    }

    return (
        <div id={'search-main-div'}>
            <div id={'search-input-div'}>
                <input className={'search-input'} id={'title-search-input'} type={'text'}
                       placeholder={'Search by title'} value={titleQuery}
                       onChange={(e) => setTitleQuery(e.target.value)}/>
                <input className={'search-input'} id={'abstract-search-input'} type={'text'}
                       placeholder={'Search by abstract'} value={abstractQuery}
                       onChange={(e) => setAbstractQuery(e.target.value)}/>
            </div>
            {
                isSearching ?
                    <CircularProgress id={'search-progress'}/> :
                    <button id={'search-button'} onClick={search}><SearchRoundedIcon/></button>
            }
        </div>
    );
}

export default SearchInput;