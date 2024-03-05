type RestResponse = {
  meta: object;
  payload: object;
};

type RestNotification = {
  message: "Please, register to watch imges" | "You account is banned"; // Literl Type
};

type BoardResponse<T extends "authorised" | "error"> = T extends "authorised"
  ? RestResponse
  : RestNotification;

let imageBoardResponse: BoardResponse<"authorised"> = {
  meta: {
    userRole: "Registered User",
    actions: ["ReadOnly", "DownloadEnabled"],
  },
  payload: {
    author: "Famous Artist",
    img: ["link1", "linl2"],
  },
};

let errorResponce: BoardResponse<"error"> = {
  message: "Please, register to watch imges",
};

// Error: message property is missed. message value is wrong
// let errorResponce1: BoardResponse<"authorised"> = {
//   message: "Please, log in",
// };
