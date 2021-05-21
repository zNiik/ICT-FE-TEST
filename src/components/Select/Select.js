import React, { useCallback, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const Select = ({ loading, options, onSelect }) => {
    const [value, setValue] = useState();

    useEffect(() => {
        if (options.length) {
           setValue(options[0].id);
        }
    }, [options]);

    useEffect(() => {
        if (onSelect) {
            onSelect(value > -1 ? +value : undefined);
        }
    }, [value, onSelect])

    const onChange = useCallback((evt) => {
        setValue(evt.target.value);
    }, []);

    if (loading) {
        return <Loader />
    }

    if (options.length < 1 && !loading)
        return null;

    return (
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    )
}

Select.defaultProps = {
    loading: false,
    options: []
}

export default Select;  