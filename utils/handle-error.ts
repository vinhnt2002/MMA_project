// import { FetchBaseQueryError, SerializedError } from "@reduxjs/toolkit/query";

// export const handleError = (error: FetchBaseQueryError | SerializedError) => {
//   if ("data" in error && error.data) {
//     return error.data.message;
//   } else {
//     return error.message || "An unexpected error occurred";
//   }
// };

export const handleError = (error: any) => {
  if ("data" in error && error.data) {
    return error.data.message;
  } else {
    return error.message || "An unexpected error occurred";
  }
};
