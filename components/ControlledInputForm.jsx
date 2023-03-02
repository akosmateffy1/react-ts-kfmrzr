import React, {useState, useRef} from 'react';
import {Button, Input} from './components/RepoStyled';

export default function ControlledInputForm(props) {

  const [value ,setValue] = useState('');
  const InputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.valueSubmitted(InputRef.current.value);
  }
  return(
    <form onSubmit={handleSubmit} >
        <Input
          type="text"
          name={props.repo}
          value={value}
          onChange={handleChange}
          ref={InputRef}
        />
        <Button type="submit" >Get Repos</Button>
    </form>
  )
}

export default ControlledInputForm