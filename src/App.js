import './App.css';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const CarlosPage = (props) => {
  console.log(props);
return(
  <div>
    <h1>Carlos Page: {props.match.params.carlosID}</h1>
    <Link to = {`${props.match.url}/13`}>To link 13</Link><br/>
    <Link to = {`${props.match.url}/14`}>To link 14</Link><br/>
    <Link to = {`${props.match.url}/15`}>To link 15</Link>
  </div>
);
}

function App() {
  return (
    <div>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/hats' component={HatsPage}></Route>
    <Route path='/carlos/:carlosID' component={CarlosPage}></Route>
    </div>
  );
}

export default App;
