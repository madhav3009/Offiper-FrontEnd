import React, { Component } from "react";
import "./search.scss";
import * as algoliasearch from "algoliasearch";
import Data from "../../assets/config/setting_data.json";

const client = algoliasearch("SPCXLT188J", "6499f3addfc2c838d853f461f21b5c33", {
  timeout: 4000
});
const index = client.initIndex("newIndex");
const objects = [
  {
    firstname: "Jimmie",
    lastname: "Barninger"
  },
  {
    firstname: "Warren",
    lastname: "Speach"
  }
];

index.addObjects(objects, (err, content) => {
  console.log("objectscontent",content);
});

export default function Search() {
  index
    .search({ query: "bar" })
    .then(({ hits } = {}) => {
      console.log("hits: ",hits);
    })
    .catch(err => {
      console.log(err);
      console.log(err.debugData);
    });

  return (
    <div class="search-sec">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-search" />
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          onChange={value => {
            this.searchResult(value);
          }}
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i class="fa fa-times" />
          </span>
        </div>
      </div>
    </div>
  );
}
