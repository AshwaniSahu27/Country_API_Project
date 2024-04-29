import React from 'react'

export default function Search({setQuery}) {
    



    return (
        <>
            <div className="search-container">
                <i className="fa-solid fa-magnifying-glass" />
                <input onInput={(e)=>setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
            </div>
        </>
    )
}
