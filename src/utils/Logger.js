import * as log from "loglevel";

log.setLevel(process.env.NODE_ENV === "production" ? "silent" : "trace");
const Logger = log;

export default Logger;
