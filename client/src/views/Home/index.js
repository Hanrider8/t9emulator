import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../hoc/Layout";
import InputT9 from "../../components/InputT9";
import MobileGrid from "../../components/MobileGrid";
import Results from "../../components/Results";
import Settings from "../../components/Settings";
import History from "../../components/History";
import Rules from "../../components/Rules";
import { chunkArray, setHistory } from "../../util";
import styles from "./Home.module.css";
import cfg from "../../config";

let timeout;

const initReqState = {
  data: { results: [], num: null, page: 1 },
  error: null,
  loading: false,
  t9: null,
  word: null,
};

const Home = () => {
  const { t9 } = useParams(); // try url www.{server url}/t9/242 in browser :)
  const [userParams, setUserParams] = useState({
    onlyWords: false,
    fetchOnKey: true,
  });
  const [req, setReq] = useState(initReqState);
  const [userInput, setUserInput] = useState(t9 || "");

  const inputRef = useRef(null);
  const fetchData = useCallback(() => {
    if (
      !req.loading &&
      ((userInput !== req.t9 && t9 !== req.t9) ||
        userParams.onlyWords !== req.word)
    ) {
      setReq({ ...initReqState, loading: true });
      fetch(`/_api/t9?t9=${userInput || t9}&onlyWords=${userParams.onlyWords}`)
        .then((res) => {
          if (!res.ok && res.status !== 400)
            throw new Error(res.status + " - " + res.statusText);
          return res;
        })
        .then((res) => res.json())
        .then(({ ok, error, results, t9, word }) => {
          if (ok) {
            t9.length > 2 && setHistory(t9);
            setReq({
              ...req,
              data: {
                ...req.data,
                results: chunkArray(results, 300),
                num: results.length,
                page: 1,
              },
              t9,
              word: word === "true",
              loading: false,
            });
          } else {
            setReq({
              ...req,
              error: error.toString(),
              t9,
              word,
              loading: false,
            });
          }
        })
        .catch((error) =>
          setReq({
            ...req,
            error: error.toString(),
            loading: false,
          })
        );
    }
  }, [userInput, userParams, t9, req]);

  useEffect(() => {
    // inputRef.current.focus()
    if (userParams.fetchOnKey && userInput) {
      clearTimeout(timeout);
      timeout = setTimeout(fetchData, cfg.INPUT_DELAY);
    }
  }, [userInput, userParams, fetchData]);
  const onChangeUserInput = (e) =>
    setUserInput(
      e.target
        ? e.target.value.length <= cfg.MAX_INPUT_LENGTH
          ? e.target.value
          : userInput
        : userInput.length < cfg.MAX_INPUT_LENGTH
        ? userInput + e
        : userInput
    );

  const clearUserInput = () => {
    setReq(initReqState);
    setUserInput("");
  };
  const changePage = useCallback(
    (page) => setReq({ ...req, data: { ...req.data, page } }),
    [req]
  );

  const onChangeUserParams = useCallback(
    (type) => setUserParams({ ...userParams, [type]: !userParams[type] }),
    [userParams]
  );

  return (
    <Layout header={"T9 Emul"}>
      <h2 style={{ paddingTop: 26 }}>Welcome in T9 emulator</h2>
      <div className={styles.container}>
        <Rules />
        <div>
          <InputT9
            onChange={onChangeUserInput}
            value={userInput}
            inputRef={inputRef}
            userParams={userParams}
            clear={clearUserInput}
            onClickButton={fetchData}
          />
          <Settings
            userParams={userParams}
            onChange={onChangeUserParams}
            onClickCheckbox={onChangeUserParams}
          />
          <MobileGrid onClick={onChangeUserInput} />
        </div>
        <History />
      </div>
      <Results req={req} changePage={changePage} />
    </Layout>
  );
};

export default Home;
