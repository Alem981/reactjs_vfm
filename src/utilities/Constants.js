const API_BASE_URL_DEVELOPMENT = "http://localhost:8080";
const API_BASE_PRODUCTION = "";

const ENDPOINTS_DRIVERS = {
  GET_ALL_DRIVERS: "drivers",
  GET_DRIVER_BY_ID:"driver"
};
const ENDPOINTS_USERS = {
    GET_ALL_USERS: "users",
    GET_USER_BY_ID:"user"
  };
const development = {
  API_URL_GET_ALL_DRIVERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS_DRIVERS.GET_ALL_DRIVERS}`,
  API_URL_GET_DRIVER_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS_DRIVERS.GET_DRIVER_BY_ID}`,

  API_URL_GET_ALL_USERS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS_USERS.GET_ALL_USERS}`,
  API_URL_GET_USER_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS_USERS.GET_USER_BY_ID}`,
 
};
const production = {
  API_URL_GET_ALL_VEHICLES: ``,
};
const Constants =
  process.env.NODE_ENV === "development" ? development : production;
export default Constants;
