import React from 'react';
import classNames from 'classnames/bind';
import styles from './loader.css';

export const Color = {
    BLACK: 'BLACK',
    WHITE: 'WHITE'
};

let cx = classNames.bind(styles);

const Loader = ({ color }) => {

    const className = cx({
        loader: true,
        'loader--black': color === Color.BLACK,
        'loader--white': color === Color.WHITE
    });

    return (
        <div className={className} />
    );
}

Loader.defaultProps = {
    color: Color.WHITE
};

export default Loader;