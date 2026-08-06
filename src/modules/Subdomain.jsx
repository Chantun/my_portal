export default function SubDomain({ title, host, details, link }) {
	return (
		<article className="subdomain">
			<a
				href={`http://${title}`}
				className="subdomain__link"
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</a>
			<p className="subdomain__details">{details}</p>
			<p className="subdomain__host">{host}</p>
			<a
				href={link}
				className="subdomain__git"
				target="_blank"
				rel="noopener noreferrer"
			>
				{link}
			</a>
		</article>
	);
}
