import React, {useState} from 'react';
import Repos from "./components/Repos"
import ControlledInputForm from "./components/ControlledInputForm"

 

export default function App() {

  const [repo, setRepo] = useState('facebook');
  const [count, setCount] = useState(0);

  const changeRepo = (repoName) => {
    repoName = repoName.trim();
    setRepo(repoName);
  };

  const handleClick = () => {
    setCount(count + 1)
  }

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
      <div>
          <button style={{
                  padding:"10px",
                  width:"10px",
                }}
            onClick={handleClick}
           >
            gomb {count}
          </button>
      </div>
    </div>
  );
}
