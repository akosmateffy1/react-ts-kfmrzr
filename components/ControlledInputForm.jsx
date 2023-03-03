import React, {useState, useRef} from 'react';

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
        <input
          type="text"
          name={props.repo}
          value={value}
          onChange={handleChange}
          ref={InputRef}
        />
        <button type="submit" >Get Repos</button>
    </form>
  )
}

export default ControlledInputForm
