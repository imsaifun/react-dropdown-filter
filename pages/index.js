import React, { useEffect, useState } from "react";
import Characters from "./characters";
import Select from "./Select";

const axios = require("axios");
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState("");

    // console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://rickandmortyapi.com/api/character"
                );
                setData(response.data.results);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ***************************************

    const filterValues = data.map((origin) => origin.origin.name);
    const nonRepeatedValues = [...new Set(filterValues)];

    //***************************************

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // ***************************************************

    const handleSort = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };

    return (
        <>
            <Select
                value={value}
                nonRepeatedValues={nonRepeatedValues}
                handleSort={handleSort}
            />
            <Characters value={value} data={data} />
        </>
    );
}

export default Home;
