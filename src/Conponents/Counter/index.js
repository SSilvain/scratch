import { useState, useEffect } from "react";
const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);
    const showValue = () => {
        setTimeout(() => {
            alert(clicks);
        }, 3000);
    };

    useEffect(() => {
        console.log("render: ", clicks);
        document.title = `Clicked ${clicks} times`;
    }, [clicks]);

    return (
        <div>
            <div>Clicked: {clicks}</div>
            <button onClick={() => setClicks(clicks + step)}>Click</button>
            <br />
            <button onClick={showValue}>Show value</button>
            <br />
            <input
                name="step"
                value={step}
                onChange={(e) => setStep(+e.target.value)}
            />
        </div>
    );
};

export default Counter;
