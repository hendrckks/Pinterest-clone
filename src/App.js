import './App.css';
import { React, useEffect, useState } from 'react';
import unsplash from './api/unsplash';
import Header from './components/Header';
import Mainboard from './components/Mainboard';

function App() {

  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
        params : {
            query : term
        }
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((reponse) => {
      let results = reponse.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  }

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
  
    let pins = ['coffee', 'cars', 'sneakers', 'haircuts', 'watches', 'suits', 'gadgets']; 
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((response) => {
          let results = response.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function(a, b) {
            return 0.5 - Math.random();
          }); 
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };
  

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header  onSubmit={onSearchSubmit}/>
      <Mainboard  pins={pins}/>
    </div>
  );
}

export default App;