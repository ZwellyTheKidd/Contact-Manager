import React from 'react';
import { connect } from 'react-redux'
import '../App.css';
import Person from "./Person";



const PeopleList = ({people}) =>{

  return (
    <div className='listDiv'>
      
      {people.map((person,index) =>(
        <Person key= {index} person={person} idx = {index}/>
      ))}

      </div>
  );
}


function mapStateToProps(state) {
    return {
      people: state.contacts
    }
}


export default connect(mapStateToProps)(PeopleList)