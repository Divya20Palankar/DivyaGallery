import logo from './logo.svg';
import './App.css';



const name="Divya";
const img="https://picsum.photos/202/300";
const img1="https://picsum.photos/201/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/240/300";
const img4="https://picsum.photos/350/300";
const img5="https://picsum.photos/300/300";
const img6="https://picsum.photos/301/300";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>









      <h1 className="H1">{name}'s Gallery</h1>
<div className="img_div">
  <img src={img} alt=""/>
<img src={img1} alt=""/>
<a href=""><img src={img2} alt=""/></a>
<a href=""><img src={img3} alt=""/></a>
<a href=""><img src={img4} alt=""/></a>
<a href=""><img src={img5} alt=""/></a>
<a href=""><img src={img6} alt=""/></a>
</div>




















    </div>
  );
}

export default App;
