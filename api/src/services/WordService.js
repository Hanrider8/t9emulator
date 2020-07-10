import https from "https";
import cfg from "../config";

export let words = [];

export const fetchWords = () =>
  new Promise((resolve, reject) => {
    https
      .get(cfg.WORD_LIST_URL, resp => {
        let data = "";
        resp.on("data", chunk => {
          data += chunk;
        });
        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
      });
  }).then(res => (words = res.split("\n")));
