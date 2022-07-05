const express = require("express");
const app = express();
const pipedrive = require("pipedrive");

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async (request, response, stageId = 788) => {
  const api = new pipedrive.DealsApi();
  let deal;
  try {
    deal = await api.addDeal({
      title: `ETV ${request.body.emailInput}`,
      stage_id: stageId,
      // summery
      fb07b001b07303f14b2ca37cd10cf492a60d3399: `ETV Newsletter: ${request.body.emailInput}
     
    email: ${request.body.emailInput}
    `,
    });
  } catch (error) {
    console.log("error is", error);
  }

  response.send(deal.success);
  return deal;
};
