import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './countdowns.css'
import Loader, { Color } from '../Loader';
import Card from '../Card';

let cx = classNames.bind(styles);

const Countdowns = ({ catIdFilter, categories, countdowns, loading }) => {

    const getCategory = useCallback((catId) => 
        categories.find(c => c.id === catId).name, [categories]);

    if (!loading && (categories.length < 1 || countdowns.length < 1)) return null;

    return (
        <div className={cx({ countdowns: true, 'countdowns--is-loading': loading })}>
            {loading && <Loader color={Color.BLACK} />}
            <div className={cx({ 'countdowns-list': true })}>
                {countdowns.filter(c => catIdFilter === 0 ? true : c.categoryId === catIdFilter).map(c => (
                    <Card 
                    key={c.id}
                    category={getCategory(c.categoryId)}
                    image={c.image} 
                    startsAt={c.startsAt} 
                    title={c.title} />
                ))}
            </div>
        </div>
    );
};

Countdowns.defaultProps = {
    catIdFilter: 0,
    categories: [],
    countdowns: [],
    loading: false,
}

export default Countdowns;