import React, { useState, useEffect } from 'react'
import SearchBar from '../Search/Search';
import Data from '../Data';
import API from '../../utils/API';

function Main() {
    const [employees, setEmployees] = useState([]);
    const [searchValue, setsearchValue] = useState('');
    const [sortOrder, setSortOrder] = useState(false);

    useEffect(() => {
        API.getUsers().then((res) => setEmployees(res.data.results))
    }, []);

    const handleInputChange = (e) => {
        setsearchValue(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(!sortOrder);
        let sorted = (!sortOrder ? employees
            .sort((a, b) => a.name.last
            .localeCompare(b.name.last)) : employees
            .sort((a, b) => b.name.last
            .localeCompare(a.name.last)));
        setEmployees(sorted);
    }

    return ( 
        <div>
            <SearchBar handleInputChange={handleInputChange} value={searchValue} />
            <Data employees={employees} handleSort={handleSort} searchVaue={searchValue} />
        </div>
    );
}

export default Main
