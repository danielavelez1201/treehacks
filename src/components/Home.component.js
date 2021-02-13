import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {
    const [output, setOutput] = useState("");
    const [openAI, setOpenAI] = useState({});

    const options = {
        method: 'GET',
        url: 'https://api.openai.com/v1/engines',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    useEffect(async () => {
        const result = await axios.get("http://localhost:8080/ping")
        setOutput(result.data);
        console.log(process.env.REACT_APP_API_KEY)
        

    })

    return (
        <h1>Home, {output}</h1>
    )
}

export default Home;