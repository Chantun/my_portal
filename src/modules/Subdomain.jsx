export default function SubDomain({
	title,
	host,
	details,
	link,
	icon,
	host_icon,
}) {
	const urlFormater = (url) => {
		return url.split(".com/")[1];
	};

	return (
		<article className="subdomain">
			<a
				href={`http://${title}`}
				className={`subdomain__link ${icon.toLowerCase()}-icon`}
			>
				{title}
			</a>
			<p className="subdomain__details">{details}</p>
			<p className={`subdomain__host ${host.toLowerCase()}-icon`}>{host}</p>
			<br />
			<a href={link} className="subdomain__git github-icon">
				{urlFormater(link)}
			</a>
		</article>
	);
}
