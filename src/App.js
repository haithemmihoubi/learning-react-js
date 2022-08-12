import './App.css';

function App() {
    let isGreen = true;
    let users = [
        {name: 'John', age: 30},
        {name: 'Pete', age: 45},
        {name: 'Mary', age: 28}
    ];
    return (
        <div className="App">
            {
                users.map(user => <UserComponent name={user.name} age={user.age}/>)

            }

        </div>
    );
}

const UserComponent = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>

    );
}


export default App;
