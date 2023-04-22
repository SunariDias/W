const { LOG_LEVEL = "DEBUG" } = process.env;

const LOG_LEVELS = {
  DEBUG: 10000,
  INFO: 20000,
  WARN: 30000,
  ERROR: 40000,
};

exports.error = ({ message, req, details }) => {
  log({ message, req, details, level: "ERROR" });
};

exports.warn = ({ message, req, details }) => {
  log({ message, req, details, level: "WARN" });
};

exports.info = ({ message, req, details }) => {
  log({ message, req, details, level: "INFO" });
};

exports.debug = ({ message, req, details }) => {
  log({ message, req, details, level: "DEBUG" });
};

const getLogLevelValue = (level) => {
  if (!level) {
    return 0;
  }
  const levelStr = level.toUpperCase();
  return Object.keys(LOG_LEVELS).indexOf(levelStr) >= 0
    ? LOG_LEVELS[levelStr]
    : 0;
};

const log = ({ message, req, level, details }) => {
  if (getLogLevelValue(LOG_LEVEL) <= getLogLevelValue(level)) {
    console.log(
      JSON.stringify({
        "@timestamp": new Date().toISOString(),
        level,
        message,
        method: req?.method,
        request: req?.originalUrl,
        details,
        logger_name: process.env.REACT_APP_NAME,
        level_value: LOG_LEVELS[level],
        host: req?.get("host"),
        "@version": "1",
      })
    );
  }
};
