// import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories:[],
      jokes:{},
    }
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then((response)=>response.json())
    .then((data) => this.setState({categories:data}));
  }
  handleChange=(e)=>{
    const caty = e.target.value;
    const url= 'https://api.chucknorris.io/jokes/random?category='+ caty;
    fetch(url)
    .then((response) =>response.json())
    .then((data) => this.setState({jokes:data}));
  };
  render() {
    return (
      <div className='main-container'>
      
        <h1 className='title'>Random CHUCK NORRIS Jokes</h1>
        <select onChange={this.handleChange}>
          <option>Select By Category</option>
          {this.state.categories.map((category) => (
         
            <option key={category}>{category}</option>
            ))}
     
        </select>
        <div>
          
            <h1 className='card'>{this.state.jokes.value}</h1>
        </div>
      
      </div>
    );
  }
}
  
export default App;

