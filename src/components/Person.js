import React from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { deletePerson } from '../actions'

const Person =({ person ,idx,deletePerson}) => {
    return (
        <div className='namelist'>
        <li>{person}</li>
         <button onClick={()=>{deletePerson(idx)}}>Remove</button>
         </div>
         
    );
};


const mapDipatchToProps = dispatch =>({
    deletePerson: key =>dispatch(deletePerson(key))
  })
  
  export default connect(null, mapDipatchToProps)(Person)