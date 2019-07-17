import React, { Component } from 'react'
import Data from '../../assets/config/setting_data.json'
import './bucket.scss'
export default class Buckets extends Component {
 render() {
  return (
   <div>
    <button type="button"
            id="bucketAdd"
            data-toggle="modal"
            data-target="#addToBucketModal">
            {Data.cart.addToBucket}
    </button>
    
    {/* <div
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    /> */}
    
    <div
        class="modal fade"
        id="addToBucketModal"
        tabindex="-1"
        role="dialog">
    <div
            class="modal-dialog "
            role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <input type="checkbox" /> Cras justo odio{" "}
              
            </li>
            
        </ul>
        </div>

    </div>
</div>
</div>
</div>


)
 }
}
