// let Base_URL = "https://api.graycode.com.np";
let Base_URL = "https://graycodeapi.graycode.com.np";
let Host_URL ="http://localhost:3000";
// let Host_URL ="https://graycodeadmin.graycode.com.np/";

function getApiEndPoints() {
  let apiEndPoints
   switch (process.env.NODE_ENV) {
    case "development":
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
      };
      break;
    case "production":
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
      };
      break;

    default:
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
      };
  }
  return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();