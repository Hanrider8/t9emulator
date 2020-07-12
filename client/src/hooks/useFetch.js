import React, { useState, useEffect, useContext } from "react";

export default (params, call) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  call &&
    useEffect(() => {
      setLoading(true);
      fetch(`/_api/t9?t9=${params}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );
    }, [params]);
  return { data, error, loading };
};
