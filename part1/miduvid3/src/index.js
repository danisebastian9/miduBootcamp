import { useState } from "react";
import ReactDOM from "react-dom"; 
import "./index.css";

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(", ")}</p>
}

const App = () => {
    // const [left, setLeft] = useState(0);
    // const [right, setRight] = useState(0); 

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: "Mensaje en el estado"
    });

    const [clicks, setClicks] = useState([ ])

    const handleClickLeft = () => {
        setCounters({
            ...counters,
            left: counters.left + 1,
            clicks: counters.clicks + 1,
        });
        setClicks(prevClicks => ([...prevClicks, "L"]))
    };

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
            clicks: counters.clicks + 1,
        });
        setClicks(prevClicks => ([...prevClicks, "R"]))
    };

    const handleReset = () => {
        setCounters({
            ...counters,
            left: 0,
            right: 0,
        });
        setClicks([ ]);
    };

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
            <p>
                <button onClick={handleReset}>Reset</button>
            </p>
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0 
            ? <WarningNotUsed /> 
            : <ListOfClicks clicks={clicks} />
            }
            <p>{counters.mensaje}</p>
        </div>
    );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement );

