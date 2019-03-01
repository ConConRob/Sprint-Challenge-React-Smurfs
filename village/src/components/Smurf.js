import React from 'react';
import {Link} from 'react-router-dom';
const Smurf = ({name, id, age, height, smurf, deleteSmurf}) => {
  if(smurf){
    name = smurf.name;
    id = smurf.id;
    age = smurf.age;
    height = smurf.height;
  }
  const handleDelete = () =>{
    deleteSmurf(id);
  }
  return (
    <div className="Smurf">
      <Link to={`/smurf/${id}`}>
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </Link>
      <button onClick={handleDelete}>Evict</button>
      <Link to={`/edit/${id}`} >Smurf the Smurf</Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

