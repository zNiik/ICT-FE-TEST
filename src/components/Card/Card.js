import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './card.css';
import { getImageSrc } from '../../helpers';
import calculateTimeLeft from '../../hooks/calculateTimeLeft';

let cx = classNames.bind(styles);

const Card = (props) => {
    const { category, image, startsAt, title } = props;
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startsAt));

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft(startsAt));
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
      timerComponents.push(
        <span key={index} className={styles.timer}>
          {timeLeft[interval].toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
          {index < Object.keys(timeLeft).length - 1 && ":"}
        </span>
      );
    });

    return (
        <div className={styles.card}>
            <img src={getImageSrc(image)} />
            <div className={cx({ 'card-content': true })}>
                <h2>{title}</h2>
                <p>{category}</p>
                {timerComponents.length ? timerComponents : <span className={styles.started}>Started</span>}
            </div>
        </div>
    )
};
export default Card;