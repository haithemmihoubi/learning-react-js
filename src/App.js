import './App.css';
import UserComponent from "./User";
import {PlanetComponent} from "./PanetComponent";

function App() {
    let isGreen = true;
    let users = [
        {name: 'John', age: 30},
        {name: 'Pete', age: 45},
        {name: 'Mary', age: 28}
    ];

    let planets= [
        {name: 'Mercury', isGasPlanet: false},
        {name: 'Venus', isGasPlanet: false},
        {name: 'Earth', isGasPlanet: true},
        {name: 'Mars', isGasPlanet: false},
        {name: 'Jupiter', isGasPlanet: true},
        {name: 'Saturn', isGasPlanet: true},
        {name: 'Uranus', isGasPlanet: false},
        {name: 'Neptune', isGasPlanet: false}
    ];
    return (
        <div className="App">

            {
                planets.map(planet => <PlanetComponent name={planet.name} isGasPlanet={planet.isGasPlanet}/>)

            }

        </div>
    );
}



export default App;
