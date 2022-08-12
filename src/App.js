import './App.css';

function App() {

    return (
        <div className="App">
            <User name={"haithem"} age={22} email={"haithem@gmail.com"} />
            <User name={"mohammed"} age={22} numy={568} />
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

export default App;
