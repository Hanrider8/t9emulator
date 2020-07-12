import React from "react";
import Layout from "../../hoc/Layout";
import styles from "./About.module.css";

export default () => (
    <Layout header={"About"}>
        <div className={styles.container}>
            <div className={styles.title}>About T9</div>
            <div className={styles.content}>
                <p>T9 is a predictive text technology for mobile phones (specifically those that contain a 3×4 numeric
                    keypad), originally developed by Tegic Communications, now part of Nuance Communications. T9 stands
                    for Text on 9 keys.</p>

                <p>T9 is used on phones from Verizon Wireless, NEC, Nokia, Samsung Electronics, Siemens, Sony Ericsson,
                    Sanyo, Sagem and others, as well as PDA's such as Avigo during the late 1990s. The main competing
                    technologies include iTap created by Motorola, SureType created by RIM, Eatoni's LetterWise and
                    WordWise, and Intelab's Tauto.</p>

                <p>During the smartphone revolution, T9 became obsolete, since newer phones had full touchscreen
                    keyboards. T9 is still used on certain inexpensive phones without a touchscreen. However, modern
                    Android phones have T9 dialing which can be used to dial contacts by spelling the name of the
                    contact one is trying to call.</p></div>
        </div>
    </Layout>
);
