import cfg from "../config";

export default (req, res, next) =>
  !cfg.NON_PRODUCTION && req.headers["x-forwarded-proto"] !== "https"
    ? res.redirect(`https://${req.headers.host}${req.url}`)
    : next();
