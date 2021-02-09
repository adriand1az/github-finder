// Library
import React ,{
  Component
} from 'react';

import Navbar from './components/Navbar'
import UserItem from './components/users/UserItem'
// style
import './App.css';


class App extends Component {
  render(){
      return (
    <div className="App">
        <Navbar />
        <UserItem/>
    </div>
  );
  }
}

export default App;
