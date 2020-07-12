import React from "react";
import styles from "./Rules.module.css";
import cfg from "../../config";

const content = {
    rules: [
        `max ${cfg.MAX_INPUT_LENGTH} numbers`,
        "autofetch on input by default"
    ],
    options: [
        {prop: "Every Input", desc: "disable auto fetch / enable SEND button for manual fetching"},
        {prop: "Only Words", desc: "fetch only words"},
    ]
}

export default () => (
    <div className={styles.container}>
        <div className={styles.title}>Rules</div>
        <div className={styles.items}>
            <ul>
                {content.rules.map(r => <li key={r}>{r}</li>)}
            </ul>
            <div className={styles.option_title}>OPTIONS:</div>
            {content.options.map(o => <div key={o.prop} className={styles.option_item}>
                <div>{o.prop}</div>
                <div>{o.desc}</div>
            </div>)}
        </div>
    </div>
);
