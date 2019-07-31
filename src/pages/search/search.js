import React, { useState } from "react";
import "./search.scss";
import * as algoliasearch from "algoliasearch";
import Products from '../../assets/config/products.json';


const client = algoliasearch("SPCXLT188J", "6499f3addfc2c838d853f461f21b5c33", {
  timeout: 4000
});
const index = client.initIndex("Products");
index.addObjects(Products, (err, content) => {
  console.log("objectscontent", content);
});

export default function Search() {
  const [userQuery, setUserQuery] = useState('');
  const [hits,setHits]=useState([]);
  
  async function storeQuery(e){
  let q=e.target.value;
    setUserQuery(q);
    await searchResult();
  }
  function searchResult(){
    
   
    return new Promise(resolve => {
      index
        .search({ query: userQuery })
      .then(({ hits } = {}) => {
        setHits(hits);
      })
      .catch(err => {
        console.log(err);
        console.log(err.debugData);
      });
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  var searchResults=null;
  if(hits.length==0){
    console.log(hits.length)
    searchResults="No result found"}else{
  searchResults=hits.map(hit=>{

  
    return <img src={hit.src} class="col-4 img-responsive"  style={{width: '300px',
      height: '200px'}}/>
    });}
  return (
    <div class="search-sec">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-search" onClick={searchResult}/>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          onChange={e => {
            storeQuery(e);
          }}
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i class="fa fa-times" />
          </span>
        </div>
      </div>
      <div class="row" style={{color:'black'}}>
      {searchResults}
      </div>
    </div>
  );
}
