import { useEffect, useState } from "react";
import Header from "./modules/Header";
import Subdomain from "./modules/Subdomain";
import data from "./data.json";

function App() {
	const subdomains = data.map((e) => (
		<Subdomain
			key={e.title}
			title={e.title}
			host={e.host}
			details={e.details}
			link={e.link}
		/>
	));

	return (
		<>
			<Header />
			<main>{subdomains}</main>
		</>
	);
}

export default App;
