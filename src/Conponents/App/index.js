import {Component} from "react";

class App extends Component {
  constructor () {
    super();
    this.state ={
      balance: 0
    }
    this.state.arr = [0,111,222,"333","444"];
    this.state.arrOut = this.state.arr.map( x => <p>{x}</p>);
  
}
  
    render(){
      return (
        <div className="App">
          <h2>Привет, react!</h2> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, nulla atque debitis quae iste illo numquam necessitatibus eos et modi cumque enim deserunt error! Cum eveniet repudiandae magnam repellendus!</p>
          {this.state.arrOut}
        </div>
      );}
  }

export default App;
