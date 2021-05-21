import React, { useCallback, useState } from 'react'
import classNames from 'classnames/bind';
import styles from './app.css'
import useCountdowns from './components/Countdowns/hooks/useCountdowns';
import Countdowns from './components/Countdowns';
import Select from './components/Select'

let cx = classNames.bind(styles);

const App = () => {
  const [catId, setCatId] = useState();
  const countdowns = useCountdowns();
  const { categories, loading } = countdowns;
  
  const onSelect = useCallback((catId) => {
    setCatId(catId);
  }, []);
  
  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>ICT Test</h1>
          <Select options={categories} loading={loading} onSelect={onSelect}  />
        </div>
      </div>

      <div className={cx({ wrapper: true, 'wrapper--is-loading': loading })}>
        <div className={styles.container}>
          <Countdowns {...countdowns} catIdFilter={catId} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App