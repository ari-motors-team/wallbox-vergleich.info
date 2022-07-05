// const express = require("express");
// const app = express();
// const pipedrive = require("pipedrive");

// const defaultClient = pipedrive.ApiClient.instance;
// let apiToken = defaultClient.authentications.api_key;
// apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

// module.exports = async function addRemoteFile() {
//   try {
//     console.log("Sending request...");

//     const api = new pipedrive.FilesApi();
//     // you can assign a file to a deal , person , organization , activity or product by setting the itemType and itemId
//     const fileType = "pdf";
//     const title = "File1";
//     // const itemId = 35;
//     const itemType = "deal";
//     const remoteLocation = "googledrive";
//     const response = await api.addFileAndLinkIt(
//       fileType,
//       title,
//       itemType,
//       itemId,
//       remoteLocation
//     );

//     console.log("File successfully added and linked", response);
//   } catch (err) {
//     const errorToLog = err.context?.body || err;

//     console.log("Adding failed", errorToLog);
//   }
// };

// addRemoteFile();
