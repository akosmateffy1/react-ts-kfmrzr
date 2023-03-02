import React, {useState} from 'react';
import Repos from "./components/Repos"
import ControlledInputForm from "./components/ControlledInputForm"

 

export default function App() {

  const [repo, setRepo] = useState('facebook');

  const changeRepo = (repoName) => {
    repoName = repoName.trim();
    setRepo(repoName);
  };

  return (
    <div>
      <h1>Repo List</h1>
      <ControlledInputForm 
        valueSubmitted={changeRepo} 
        name="repo"
      />
      <Repos 
        userName={repo}
      />
    </div>
  );
}
