// Library
import React ,{
  Component
} from 'react';

// style
import './App.css';


class App extends Component {
  render(){
      const name = 'John Doe';
      const creator = 'Adrian Diaz'
      return (
    <div className="App">
      <h1>Hello {name} From React!</h1>
      <span>{creator} made this application</span>
    </div>
  );
  }
}

export default App;
