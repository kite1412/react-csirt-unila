// Simple logging utility for debugging
const debug = {
  log: (message, ...args) => {
    console.log(`[DEBUG] ${message}`, ...args);
  },
  error: (message, ...args) => {
    console.error(`[ERROR] ${message}`, ...args);
  },
  warn: (message, ...args) => {
    console.warn(`[WARN] ${message}`, ...args);
  },
  info: (message, ...args) => {
    console.info(`[INFO] ${message}`, ...args);
  }
};

export default debug;
