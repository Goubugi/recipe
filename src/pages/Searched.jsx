
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from

function Searched() {

  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  const getSearched = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setSearchRecipes(recipes.results);
}

useEffect(() => {
    getSearched(params.search)
}, [params.search])

  return (
    <Grid>
      {searchRecipes.map((item) => {
        return(
            <Card key={item.id}>
                <img>{src = item.image} alt = "" </img>
                <h4>{image.title}</h4>
            </Card>
        );
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;

`;

const Card = styled.div`
img {
    border-radius: 2rem;
    width: 100%;
}
a {
    text-decoration: none; 
}
h4 {
    text-align: center; 
    padding: 1rem;
}
`;

export default Searched