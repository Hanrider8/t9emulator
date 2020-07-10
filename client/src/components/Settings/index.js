import React from 'react'
import styles from './Settings.module.css'

export default ({onClickCheckbox, userParams: {fetchOnKey, onlyWords}}) => <div className={styles.container}>
    <div className={styles.switch_blok}>
        <label className={styles.switch}>
            <input type="checkbox" checked={fetchOnKey} onChange={() => onClickCheckbox('fetchOnKey')}/>
            <span className={styles.slider}></span>
        </label>
        <div>Every Input</div>
    </div>
    <div className={styles.switch_blok}>
        <label className={styles.switch}>
            <input type="checkbox" checked={onlyWords} onChange={() => onClickCheckbox('onlyWords')}/>
            <span className={styles.slider}></span>
        </label>
        <div>Only Words</div>
    </div>
</div>