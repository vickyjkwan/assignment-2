import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    charArray: '',
    counter: 0
  }

  counterHandler = (event) => {
    const array = event.target.value.split('');
    this.setState({
      charArray: event.target.value,
      counter: array.length
    });
  }

  removeCharHandler = (index) => {
    const text = this.state.charArray.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({charArray: updatedText});
  }

  render() {

    const newArray = this.state.charArray.split('');
    const charList = newArray.map((ch, index) => {
      return <CharComponent 
          character={ch} 
          key={index} 
          clicked={() => this.removeCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={this.counterHandler} value={this.state.charArray}/>
        <p>The character {this.state.charArray} is {this.state.counter} long.</p>
        <ValidationComponent counter={this.state.counter}/>
        {charList}
      </div>
    );
  }
}

export default App;
