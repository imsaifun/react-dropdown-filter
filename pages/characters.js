import React from "react";

const Characters = ({ data, value }) => {
    console.log(data);
    return (
        <>
            {data.map((item) =>
                item.origin.name.includes(value) ? (
                    <div
                        key={item.id}
                        style={{
                            padding: "10px",
                            margin: ("1rem", "1rem"),
                            backgroundColor: "#f5f5f5",
                            color: "#333",
                            display: "flex",
                        }}
                    >
                        <div>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                        <div style={{ textAlign: "center", padding: "2rem" }}>
                            <p>Name: {item.name}</p>
                            <p>Status: {item.status}</p>
                            <p>Type: {item.species}</p>
                            <p>Origin: {item.origin.name}</p>
                        </div>
                    </div>
                ) : null
            )}
        </>
    );
};

export default Characters;
