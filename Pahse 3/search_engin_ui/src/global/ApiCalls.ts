import axios from "axios";
import {searchType} from "./Types";


const customAxios = axios.create(
    {
        baseURL: 'http://localhost:8000',
    }
);

export const searchApiCall = (search: searchType) => customAxios.post('search', {
    title_query: search.titleQuery,
    abstract_query: search.abstractQuery,
    max_result_count: search.maxResultCount,
    method: search.method,
    weight: search.weight
})