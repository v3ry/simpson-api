import './App.css';
import React,{useState} from 'react';
import axios from 'axios';
import DisplaySimpson from './components/DisplaySimpson';


const sampleSimpson = {
  quote: 'male',
  character: "Apu Nahassasas",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection : "Left"
}

function App() {
  const [simps, setSimps] = useState(sampleSimpson);
  // console.log(sampleSimpson);

  const getSimps = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimps(data[0]);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={getSimps}>Get Simpson Quote</button>
      <DisplaySimpson simps={simps}/>
    </div>
  );
}

export default App;
