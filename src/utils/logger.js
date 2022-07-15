export const handleLogs = (snackbar, ...logs) => {
  logs.forEach((log) => snackbar(log.message));
};
