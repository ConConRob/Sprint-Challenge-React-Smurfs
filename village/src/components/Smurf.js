import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SyledSmurf = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  background: #00B8EA;
  margin-top: 40px;
    a{
      text-decoration: none;
      color: white;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .edit-smurf{
      border: 2px solid  #C52733;
      width: 150px;
      height: 30px;
      padding-top: 10px;
    }
    button {
      margin: 20px 0;
      color: white;
      background: #C52733;
      border: none;
      width: 150px;
      height: 40px;
    }
`

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
    <SyledSmurf>
      <Link to={`/smurf/${id}`}>
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </Link>
      <Link className='edit-smurf' to={`/edit/${id}`} >Smurf the Smurf</Link>
      <button onClick={handleDelete}>Evict</button>
    </SyledSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

