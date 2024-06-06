import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Section from './components/Section';

import './index.css'

const App = () => {
  return (
  <div className='todoapp'>
    <Header />
    <Section />
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
