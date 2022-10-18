import React, { useState } from 'react'
import Results from './Results';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    width: 400px;
    height: max-content;
    margin-top: 20px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    background-color: #f0ecec;
`;

const ResultsContainer = styled.h3`
    margin-top: 10px;

    color: #1746c7;
    font-size: 20px;
    font-weight: 600;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    margin: 14px 0;
    padding: 0 20px;

    background-color: white;
    border: 2px solid #1746c7;
    border-radius: 40px;
    outline: none;
    cursor: pointer;
    transition: .3s;

    color: #1746c7;
    font-size: 16px;
    font-weight: 600;
`;


function SearchBar({items}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const handleResult = (items) => {
        setResults(items)
    }

    return (
        <SearchBarContainer>
            {results && <ResultsContainer>{results.length} results</ResultsContainer>}
            <StyledInput
                onChange={handleChange}
                type="text" 
                name="title" 
                id="title" 
                value={query}>
            </StyledInput>
            <Results 
                items={items} 
                query={query}
                onResultsCalculated={handleResult}
            />
        </SearchBarContainer>
    )
}

export default SearchBar