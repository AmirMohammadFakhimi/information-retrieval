import {searchMethods} from "./Variables";

export type searchType = {
    titleQuery: string,
    abstractQuery: string,
    maxResultCount: number,
    method: string,
    weight: number
}

export type eachSearchResultType = {
    docId: string,
    title: string,
    abstract: string,
    finalScore: number,
    titleScore: number,
    abstractScore: number,
    titleSnippet: string,
    abstractSnippet: string
}

export type searchResultType = eachSearchResultType[]

export type eachSearchApiResultType = {
    doc_id: string,
    title: string,
    abstract: string,
    final_score: number,
    title_score: number,
    abstract_score: number,
    title_snippet: string,
    abstract_snippet: string
}

export type searchApiResultType = eachSearchApiResultType[]

export type searchMethodsType = typeof searchMethods[number];