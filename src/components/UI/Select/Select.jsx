// select
import React from "react";
import cl from './Select.module.css'

const Select = ({ defaultValue, options, value, onChange, ...props }) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            {...props}
            className={cl.select}
        >
            <option value='' disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default Select