import axios from "axios";
import axiosRetry from "axios-retry";
// import store from "../index";
import { message } from "antd";

export const axiosAPI = (method, url, data = null) => {
  // const token = store.getState().auth.token;
  let headers = {};
  let token = "";
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return new Promise((resolve, reject) => {
    axiosRetry(axios, { retries: 5 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

    axios({
      method: method,
      url: url,
      headers: headers,
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        let err;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx'
          if (error.response.status >= 500) {
            message.error("Server Error , Try again later ");
            reject({ err: null });
          }
          if (error.response.status >= 400 && error.response.status < 500) {
            reject({
              err: {
                status: error.response.status,
                data: error.response,
              },
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          message.error("Network Error ,Try again later");
          reject({ err: null });
          // err = error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          err = error.message;
          reject(err);
        }
      });
  });
};
export const axiosAPIWithOutHeader = (method, url, data = null) => {
  let headers = {};

  return new Promise((resolve, reject) => {
    axiosRetry(axios, { retries: 5 });
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

    axios({
      method: method,
      url: url,
      headers: headers,
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        let err;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx'
          if (error.response.status >= 500) {
            message.error("Server Error , Try again later ");
            reject({ err: null });
          }
          if (error.response.status >= 400 && error.response.status < 500) {
            reject({
              err: {
                status: error.response.status,
                data: error.response,
              },
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          message.error("Network Error ,Try again later");
          reject({ err: null });
          // err = error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          err = error.message;
          reject(err);
        }
      });
  });
};

export const axiosEsAPI = (method, url, data) => {
  const auth = {
    username: "admin-search",
    password: "M34ECHgNXTPYPh5@",
  };
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      auth: auth,
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        let err;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx'
          if (error.response.status >= 500) {
            message.error("Server Error , Try again later ");
            reject({
              err: null,
            });
          }
          if (error.response.status >= 400 && error.response.status < 500) {
            reject({
              err: {
                status: error.response.status,
                data: error.response.data.detail,
              },
            });
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          message.error("Network Error ,Try again later");
          reject({
            err: null,
          });
          // err = error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          err = error.message;
          reject(err);
        }
      });
  });
};
