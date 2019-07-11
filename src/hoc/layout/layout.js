import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const Layout = props => {
	return (
		<div>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};
export default Layout;
