import React from "react";
import './Filters.css'
import {searchMethodsType} from "../../../global/Types";
import {searchMethods} from "../../../global/Variables";
import {atom, useRecoilState} from "recoil";

export const maxResultCountState = atom<string>({
    key: 'maxResultCountState',
    default: '10'
})

export const searchMethodState = atom<searchMethodsType>({
    key: 'searchMethodState',
    default: 'okapi25'
})

export const abstractWeightState = atom<string>({
    key: 'abstractWeightState',
    default: '0.5'
})

function Filters() {
    const [maxResultCount, setMaxResultCount] = useRecoilState(maxResultCountState)
    const [searchMethod, setSearchMethod] = useRecoilState(searchMethodState)
    const [abstractWeight, setAbstractWeight] = useRecoilState(abstractWeightState)

    return (
        <div id={'filters-main-div'}>
            <div className={'filter-div'}>
                <label className={'filter-label'} htmlFor={'max-result-count'}>Max Result Count</label>
                <input className={'filter-input'} id={'max-result-count'} type={'number'} min={-1}
                       value={maxResultCount} onChange={(e) => setMaxResultCount(e.target.value)}/>
            </div>
            <div className={'filter-div'}>
                <label className={'filter-label'} htmlFor={'search-method'}>Search Method</label>
                <select className={'filter-input'} id={'search-method'} value={searchMethod}
                        onChange={(e) => setSearchMethod(e.target.value as searchMethodsType)}>
                    {
                        searchMethods.map((method) => {
                                return <option key={method} value={method}>
                                    {method === 'okapi25' ? method + ' (default)' : method}
                                </option>
                            }
                        )}
                </select>
            </div>
            <div className={'filter-div'}>
                <label className={'filter-label'} htmlFor={'abstract-weight'}>Abstract Weight</label>
                <input className={'filter-input'} id={'abstract-weight'} type={'number'} min={0} max={1} step={0.1}
                       value={abstractWeight} onChange={(e) => setAbstractWeight(e.target.value)}/>
            </div>
        </div>
    );
}

export default Filters;