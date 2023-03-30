import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/Nav";


const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]};
  case 'DELETE' :
     return {...state,
      contacts:state.contacts.filter((PeopleList,i) => i !== action.payload)};

    default:
      return state;
  }
}
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NavBar/>
    <AddPersonForm />
    <PeopleList />
    <Footer/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
