import axios from "axios";
import { BASE_URL, GENERAL_DATA_URL, DATA_URL, DATA_DETAILS_URL } from "../utils/constants.js";

async function getGeneralData(searchOptions) {
  return await axios({
    baseURL: BASE_URL,
    url: GENERAL_DATA_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "issueDateInterval": {
        "startDate": `${searchOptions.startDate}`,
        "endDate": `${searchOptions.endDate}`
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "sparkId": null,
              "entityId": null,
              "inn": `${searchOptions.inn}`,
              "maxFullness": true,
              "inBusinessNews": null
            }
          ],
          "onlyMainRole": `${searchOptions.mainRole}`,
          "tonality": `${searchOptions.tonality}`,
          "onlyWithRiskFactors": `${searchOptions.riskFactors}`,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
      },
      "attributeFilters": {
        "excludeTechNews": `${searchOptions.technicalNews}`,
        "excludeAnnouncements": `${searchOptions.announcements}`,
        "excludeDigests": `${searchOptions.newsDigests}`
      },
      "similarMode": "duplicates",
      "limit": `${searchOptions.documentCount}`,
      "sortType": "sourceInfluence",
      "sortDirectionType": "desc",
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ]
    },
  }).then((response) => {
    return response
  });
}

async function getData(searchOptions) {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "issueDateInterval": {
        "startDate": `${searchOptions.startDate}`,
        "endDate": `${searchOptions.endDate}`
      },
      "searchContext": {
        "targetSearchEntitiesContext": {
          "targetSearchEntities": [
            {
              "type": "company",
              "sparkId": null,
              "entityId": null,
              "inn": `${searchOptions.inn}`,
              "maxFullness": true,
              "inBusinessNews": null
            }
          ],
          "onlyMainRole": `${searchOptions.mainRole}`,
          "tonality": `${searchOptions.tonality}`,
          "onlyWithRiskFactors": `${searchOptions.riskFactors}`,
          "riskFactors": {
            "and": [],
            "or": [],
            "not": []
          },
          "themes": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "themesFilter": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
      },
      "attributeFilters": {
        "excludeTechNews": `${searchOptions.technicalNews}`,
        "excludeAnnouncements": `${searchOptions.announcements}`,
        "excludeDigests": `${searchOptions.newsDigests}`
      },
      "similarMode": "duplicates",
      "limit": `${searchOptions.documentCount}`,
      "sortType": "sourceInfluence",
      "sortDirectionType": "desc",
      "intervalType": "month",
      "histogramTypes": [
        "totalDocuments",
        "riskFactors"
      ]
    },
  }).then((response) => {
    return response;
  });
}

async function getDetailData(requestArr) {
  return await axios({
    baseURL: BASE_URL,
    url: DATA_DETAILS_URL,
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    },
    data: {
      "ids": requestArr
    },
  }).then((response) => {
    return response
  });
}

export { getGeneralData, getData, getDetailData }