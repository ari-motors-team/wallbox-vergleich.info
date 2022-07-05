//                      ADD  "type": "module", TO THE PACKAGE.JSON FILE TO RUN IT

import pipedrive from "pipedrive";
import FuzzySearch from "fuzzy-search";
let defaultClient = pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";
let oauth2 = defaultClient.authentications["oauth2"];
oauth2.accessToken = "YOUR ACCESS TOKEN";
let apiInstance = new pipedrive.StagesApi();
let opts = {
  // choose a pipeline (optional)
  //pipelineId: 1,
  // Number | The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
};
const stageFInder = async (potentialStage) => {
  let searcher;
  let result;
  let dataset;
  await apiInstance
    .getStages(opts)
    .then(
      (data) => {
        //  console.log(data.data.map((stage) => `id:${stage.id} :${stage.name}`));
        dataset = data.data;
      },
      (error) => {
        console.error(error);
      }
    )
    .then(() => {
      searcher = new FuzzySearch(dataset, ["name"], {
        caseSensitive: false,
      });
      //here search your result
      result = searcher.search(potentialStage);
      console.log(
        "result:",
        result.map(
          (stage) =>
            `id:${stage.id} :${stage.name} IN PIPELINE: ${stage.pipeline_name}`
        )
      );
    })
    .catch((error) => {
      console.error(error);
    });
};
//              search here your result

stageFInder();
