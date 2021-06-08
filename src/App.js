
function App() {
  const arr = [0,111,222,"333","444"]
  const arrOut = arr.map( x => <p>{x}</p>)
  
  return (
    <div className="App">
      <h2>Привет, react!</h2> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, nulla atque debitis quae iste illo numquam necessitatibus eos et modi cumque enim deserunt error! Cum eveniet repudiandae magnam repellendus!</p>
      {arrOut}
    </div>
  );
}

export default App;
