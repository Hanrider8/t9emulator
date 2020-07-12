import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import InputT9 from "../components/InputT9";
import MobileGrid from "../components/MobileGrid";
import Results from "../components/Results";
import Settings from "../components/Settings";
import History from "../components/History";
import Rules from "../components/Rules";
import useFetch from "../hooks/useFetch";
import { chunkArray, setHistory } from "../util";
import cfg from "../config";
import Context from "../context";
import styles from "./Home.module.css";
import defaultValue from "../context/defaultValue";

const initReqState = {
  data: { results: [], num: null, page: 1 },
  error: "",
  loading: false,
  t9: null,
  word: null,
};

export default () => {
  const { t9 } = useParams(); // try url www.{server url}/t9/242 in browser :)
  const [userParams, setUserParams] = useState({
    onlyWords: false,
    fetchOnKey: true,
  });
  const [req, setReq] = useState(initReqState);
  const [userInput, setUserInput] = useState(t9 || "");

  // const {data, error, loading} = useFetch(userInput || t9, userParams.fetchOnKey)

  const fetchData = async () => {
    if (
      !req.loading
      // &&
      // userInput !== req.t9 &&
      // userParams.onlyWords !== req.word
    ) {
      setReq({ ...initReqState, loading: true });
      fetch(
        `${cfg.API_URL}/_api/t9?t9=${userInput || t9}&onlyWords=${
          userParams.onlyWords
        }`
      )
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
              word,
              loading: false,
            });
          } else {
            setReq({
              ...req,
              error,
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
  };

  useEffect(() => {
    if (userParams.fetchOnKey && userInput) {
      fetchData();
    }
  }, [userInput, userParams]);

  const onChangeUserInput = (e) =>
    setUserInput(e.target ? e.target.value : userInput + e);

  const clearUserInput = () => {
    setReq(initReqState);
    setUserInput("");
  };
  const changePage = (page) => setReq({ ...req, data: { ...req.data, page } });

  const onChangeUserParams = (type) =>
    setUserParams({ ...userParams, [type]: !userParams[type] });

  return (
    <Layout header={"T9 Emul"}>
      <Context.Provider value={defaultValue}>
        <h2 style={{ paddingTop: 26 }}>Welcome in T9 emulator</h2>
        <div className={styles.container}>
          <Rules />
          <div>
            <InputT9
              onChange={onChangeUserInput}
              value={userInput}
              disabled={req.loading}
              userParams={userParams}
              clear={clearUserInput}
              onClickButton={fetchData}
            />
            <Settings
              userParams={userParams}
              onChange={onChangeUserParams}
              onClickCheckbox={onChangeUserParams}
            />
            <MobileGrid loading={req.loading} onClick={onChangeUserInput} />
          </div>
          <History />
        </div>
        <Results req={req} userParams={userParams} changePage={changePage} />
      </Context.Provider>
    </Layout>
  );
};
