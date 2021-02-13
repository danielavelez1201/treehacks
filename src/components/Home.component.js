import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {
    const [output, setOutput] = useState("");

    useEffect(async () => {
        const result = await axios.get("http://localhost:8080/ping")
        setOutput(result.data);
        console.log(output)
    })

    return (
        <h1>Home, {output}</h1>
    )
}

export default Home;