import React from "react";

const Select = ({ nonRepeatedValues, handleSort }) => {
    return (
        <div>
            <select onChange={(event) => handleSort(event)}>
                {nonRepeatedValues.map((abc) => (
                    <option value={abc}>{abc}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
