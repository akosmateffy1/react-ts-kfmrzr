import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Repos(props){

  const [repoNames, setRepoNames] = useState([]); 
  const [error , setError] = useState('')

  useEffect(() => {
    const API_URL = `https://api.github.com/users/${props.userName}/repos`
    fetch(API_URL)
      .then((x) => x.json())
      .then((repoList) => {
        if(Array.isArray(repoList)) {
          setRepoNames(repoList.map((repo) => repo.name));
          setError("");
        }else {
          setRepoNames([]);
          setError("Error");
        }
      }).catch(() => {
        setRepoNames([]);
        setError('error');
      });
  }, [props.userName]);

  const repoNamesToJsx = () => {

    const repoItems = repoNames.map((name) => <li key={name}>{name}</li>)
    return(
      <ul>
        {repoItems}
      </ul>
    )
  }

  const Text = styled.h3`
    width:100vh;
    height:60px;
    text-align:center;    
    padding-top:25px;
    color: white;
    background-color: red;
  `
  return(
    <section>
      <h2>{props.userName}</h2>
      {repoNamesToJsx()}
      <Text>
        {error}!
      </Text>
    </section>
  )
}

export default Repos