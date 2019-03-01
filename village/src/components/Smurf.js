import React from 'react';
import {Link} from 'react-router-dom';
const Smurf = props => {
  const handleDelete = () =>{
    props.deleteSmurf(props.id);
  }
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={handleDelete}>Evict</button>
      <Link to={`/edit/${props.id}`} >Smurf the Smurf</Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

