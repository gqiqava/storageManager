import axios from "axios";
// import { createNotification } from "masterComponents/Notification";

// const isLocal = ~location.href.indexOf("localhost");

const commonConfig = {
  baseURL: "https://dev-api.cloudstorage.ge/",
};

const requestInterceptorCollback = (config) => {
  config.headers["Content-Type"] = "application/json";
  // config.headers.Authorization = `bearer ${localStorage.getItem(
  //   "accessToken"
  // )}`;
  // config.headers["ug-proxy"] = "recruitment";

  return config;
};

const axiosInstance = axios.create({ ...commonConfig });

axiosInstance.interceptors.request.use(requestInterceptorCollback);

axiosInstance.interceptors.response.use(
  (config) => {
    if (config.data && config.data.Error) {
      console.log(config.data.Error, "error", 3500, "bottom-center", 2);
    }
    return config;
  },
  (err) => {
    if (err.data && err.data.Error) {
      console.log(err.data.Error, "error", 3500, "bottom-center", 2);
    } else {
      err.response
        ? console.log(err.response.data, "error", 3500, "bottom-center", 2)
        : console.log(
            "Something went wrong",
            "error",
            3500,
            "bottom-center",
            2
          );
    }

    return err;
  }
);

export default axiosInstance;
