import React, { useState, useEffect } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if(!url) return;

        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log('Error fetching data', err);
            setData(null);
        });
    }, [url]); // add url as dependency
    return [data];
}

export default UseFetch
