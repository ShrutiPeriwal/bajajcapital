import React from 'react';
import Main from './components/Main/main';
import Button from './components/button/button';
import logo from './image/logo.jfif';

function App() {
  return (
    <div>
      <img src={logo} alt="Company Logo" />
      <p>Please rate your satisfication on the following attributes of our service.</p>
      <div>
        <h3>Responsiveness</h3>
        <Main />
        <h3>Competency in advising right solutions</h3>
        <Main />
        <h3>Trustworthiness</h3>
        <Main />
        <h3> Customer service and support</h3>
        <Main />
        <Button />
      </div>
    </div>
  )
}

export default App