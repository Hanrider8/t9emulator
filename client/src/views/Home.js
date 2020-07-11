import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import InputT9 from "../components/InputT9";
import MobileGrid from "../components/MobileGrid";
import Results from "../components/Results";
import Settings from "../components/Settings";
import useFetch from "../hooks/useFetch";
import { chunkArray } from "../util";
import cfg from "../config";
import Context from "../context";
import defaultValue from "../context/defaultValue";

export default () => {
  const [userParams, setUserParams] = useState({
    onlyWords: false,
    fetchOnKey: true,
    page: 1,
  });
  const [req, setReq] = useState({
    data: { results: [], num: null },
    error: null,
    loading: false,
  });
  const [userInput, setUserInput] = useState("");

  const { t9 } = useParams(); // try url www.{server url}/t9/242 in browser :)

  // const {data, error, loading} = useFetch(userInput || t9, userParams.fetchOnKey)

  const fetchData = async () => {
    setReq({ ...req, loading: true });
    const response = await fetch(
      `${cfg.API_URL}/_api/t9?t9=${userInput || t9}&onlyWords=${
        userParams.onlyWords
      }`
    );
    const jsonResponse = await response.json();
    response.ok
      ? setReq({
          ...req,
          data: {
            ...req.data,
            results: chunkArray(jsonResponse, 500),
            num: jsonResponse.length,
          },
          loading: false,
        })
      : setReq({ ...req, error: jsonResponse.message, loading: false });
  };

  useEffect(() => {
    if (userParams.fetchOnKey && (t9 || userInput)) {
      fetchData();
    }
  }, [userInput, userParams]);

  const onChangeUserInput = (e) =>
    setUserInput(e.target ? e.target.value : userInput + e);

  const clearUserInput = () => setUserInput("");
  const changePage = (page) => setUserParams({ ...useParams, page });

  const onChangeUserParams = (type) =>
    setUserParams({ ...userParams, [type]: !userParams[type] });

  const { data, error, loading } = req;
  return (
    <Layout header={"T9"}>
      <Context.Provider value={defaultValue}>
        <InputT9
          onChange={onChangeUserInput}
          value={userInput}
          disabled={loading}
          userParams={userParams}
          clear={clearUserInput}
          onClickButton={fetchData}
        />
        <Settings
          userParams={userParams}
          onChange={onChangeUserParams}
          onClickCheckbox={onChangeUserParams}
        />
        <MobileGrid loading={loading} onClick={onChangeUserInput} />
        <Results
          data={data}
          loading={loading}
          error={error}
          userParams={userParams}
          changePage={changePage}
        />
      </Context.Provider>
    </Layout>
  );
};
