import React, {useState} from 'react';

// I'm creating my context (this is null cause I don't need to use a default value)
const CountContext = React.createContext(null);

const App = () => {
  // thanks to Hooks I can define in memory a even values [myValue,MySetterValue] = useState('defaultValue')
  const [count, setCount] = useState(0);

    return (
      <div className="App">
        {/* I call My CountContext and I implement a value (here count)*/}
        <CountContext.Provider value={count}>
          <Layout/>
          {/* I can set my State count*/}
          <button onClick={() => setCount(count+1)}>plus :)</button>
        </CountContext.Provider>
      </div>
    );
}

const Layout = () => (
  <div className="container">
    <header>header</header>
    <CountContext.Consumer>
      {/* Consumer is a Component which contain a parameter(specified on App() )*/}
      {/* I can now call a fonction which contain my value */}
      {Main}
    </CountContext.Consumer>
    <footer>footer</footer>
  </div>
)


const Main = (element) => (
  <div className="main-container">
    <p>main container: counter = {element}</p>
  </div>
)
export default App;
