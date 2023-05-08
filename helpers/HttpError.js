const errorMessageList = {
  400: "Bad Request",
  401: "Not Authorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Email in use",
};

const HttpError = (status, massage = errorMessageList[status]) => {
  const error = new Error(massage);
  error.status = status;
  return error;
};

module.exports = HttpError;
