// Library
import React ,{
  Component
} from 'react';

import Navbar from './components/Navbar'
import Users from './components/users/Users'
// style
import './App.css';


class App extends Component {
  render(){
      return (
    <div className="App">
        <Navbar />
        <div className='container'>
          <Users/>
        </div>
       
    </div>
  );
  }
}

export default App;
