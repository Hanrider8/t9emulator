import React from 'react'
import styles from './InputT9.module.css'

export default ({value, onClickButton, onChange, disabled, userParams, clear}) =>
    <div className={styles.container}>
        <input placeholder="Numbers" value={value} onChange={onChange} disabled={disabled} type="number" maxLength={userParams.onlyWords ? 8 : 10}/>
        <div className={`${styles.button_container}`}>
            <button className={`${styles.buttons} ${styles.button_clear} grow`} onClick={clear}>C</button>
            <button className={`${styles.buttons} ${styles.button_send} ${!userParams.fetchOnKey && 'grow'}`} disabled={userParams.fetchOnKey} onClick={onClickButton}>Send</button>
        </div>
    </div>