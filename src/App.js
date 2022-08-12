import './App.css';
import {render} from "react-dom";

function App() {

    return (
        <div className="App">
            <User name={"haithem"} age={22} email={"haithem@gmail.com"} />
            <Job title={"Web Developer"} company={"Google"} location={"Paris"} description={"Web Developer"} />
            <Job title={"Web Designer"} company={"Facebook"} location={"New York"}  />
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
const User = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.email}</h2>
            <h2>{props.numy}</h2>
        </div>
    );
}

const Job = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <h2>{props.company}</h2>
        <h2>{props.location}</h2>
        <h2>{props.description}</h2>
    </div>
    );
}



export default App;
