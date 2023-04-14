import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from '../UI/Card.module.css'
import Button from "../UI/Button";

const CountingClicks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('clickCount');
        if (storedCount) {
            setCount(Number(storedCount));
        }
    }, []);

    const handler = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('clickCount', newCount);
    };

  


    return (
        <Card className={classes.input}>
            <center><h1>Counter</h1></center>
            <center><Button onClick={handler}> Click +</Button></center>
            <center><p> Count: {count}</p></center>
        </Card>
    )
}

export default CountingClicks;