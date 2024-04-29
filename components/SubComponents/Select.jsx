import React from 'react'

export default function Select({setSelectedOption}) {
    function selectedOptionfunc(e){
        if(e.target.value !=="Filter by Region"){
            setSelectedOption(e.target.value)
        }
        else{
            setSelectedOption("")
        }
    }

    return (
        <>
            <select onChange={selectedOptionfunc} className="filter-by-region">
                <option hidden="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )
}
