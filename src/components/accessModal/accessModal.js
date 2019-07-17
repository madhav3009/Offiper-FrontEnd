import React, { Component } from 'react';

class accessModal extends Component {
    render() {
        return (
            <div>
            
            <div className="col-xl pr-4 pt-2 pb-2 ">
			<button type="button"
			props="SignIn"
			data-toggle="modal"
			data-target="#SignInModal">
			<a
				href=""
				data-toggle="collapse"
				data-target=".navbar-collapse.show">
				SignIn
			</a>
			</button>
			<div
			class="modal fade"
			id="SignInModal"
			tabindex="-1"
			role="dialog">
            <div
            class="modal-dialog "
            role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Login</h5>
        <button style={{outline:"none"}}
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true" style={{color:"#FF8888"}}>&times;</span>
        </button>
         </div>
    <div class="modal-body">
    <Login />
    </div>
	</div>
	</div>
	</div>
</div>


            </div>
        );
    }
}

export default accessModal;