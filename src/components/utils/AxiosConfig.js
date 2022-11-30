import React from "react";
const axiosConfig = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
};
export default axiosConfig;
