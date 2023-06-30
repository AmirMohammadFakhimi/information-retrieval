import React from 'react'
import './Center.css'
import SearchInput from "./searchInput/SearchInput";
import Filters from "./filters/Filters";
import SearchResult from "./searchResult/SearchResult";

function Center() {
    return (
        <div id={'center-main-div'}>
            <div id={'name-div'}>
                <h1 className={'characters'} id={'a-char'}>A</h1>
                <h1 className={'characters'} id={'m-char'}>M</h1>
                <h1 className={'characters'} id={'o1-char'}>O</h1>
                <h1 className={'characters'} id={'o2-char'}>O</h1>
                <h1 className={'characters'} id={'g-char'}>G</h1>
                <h1 className={'characters'} id={'l-char'}>L</h1>
                <h1 className={'characters'} id={'e-char'}>E</h1>
            </div>
            <SearchInput/>
            <Filters/>
            <SearchResult/>
        </div>
    )
}

export default Center