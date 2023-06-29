import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
    const {counter, increment, decrement}= useCounter(10);
return(
 <div className="bg-gray-200 flex-1 w-full">
    <h1>Counter Component</h1>
    <h2>{counter}</h2>
    <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
    </div>
 </div>
);

};

export default CounterComponent;