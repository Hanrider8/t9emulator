import React from 'react'
import styles from "./Results.module.css"
import spinner from '../../static/spinner.svg'
import Pagination from '../Pagination'

export default ({data, loading, error, wordsOnly}) => {
    let content = <div>No results founded!!!</div>

    if(loading) content = <img src={spinner}></img>
    if(error) content = <div className={styles.notice}>{error}</div>
    if(!loading && data.length > 0) content =  data.map(str =>
        <div style={{fontSize: wordsOnly ? '1.3em' : '0.7em'}} className={styles.result} key={str}>{str}</div>
    )

    return <div className={styles.container}>
    {data.length > 0 && <div className={styles.results}>{data.length}</div>}
        {content}
        <Pagination/>
</div>}