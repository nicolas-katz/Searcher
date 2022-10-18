import React, { useMemo } from 'react'
import styled from 'styled-components';

const Container = styled.div`
/* width: 320px; */
`;

const Button = styled.button`
width: 100%;
height: 48px;
margin: 4px 0;
padding: 0 20px;

background-color: #1746c7;
border: none;
border-radius: 20px;
outline: none;
cursor: pointer;

color: white;
font-size: 15px;
font-weight: 600;
text-align: left;

&:hover {
  opacity: .7;
}
`;

function MarkedItem({item, query}) {
  const { left, center, right } = useMemo(()=> getPositions(item, query), [item, query]);

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);
 
    return {left, right, center};
  }

  return (
    <Container>
      <Button>
      {left} 
        <span style={{fontWeight: 'bolder', backgroundColor:'white', color: '#1746c7', padding: '2px', margin: '2px'}}>{center}</span>
        {right}
      </Button>
    </Container>
  )
}

export default MarkedItem