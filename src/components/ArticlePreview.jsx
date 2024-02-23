import Link from "next/link";

export default function ArticlePreview({ title, subtitle, href, author, authorHref, date}) {
	return (<>
		{/* <!-- Post preview--> */}
		<div className="post-preview">
			<Link href={href}>
				<h2 className="post-title">{title}</h2>
				<h3 className="post-subtitle">{subtitle}</h3>
			</Link>
			<p className="post-meta">
				Posted by
				<Link href={authorHref}>{" "+author+" "}</Link>
				on {date}
			</p>
		</div>
		{/* <!-- Divider--> */}
		<hr className="my-4" />
	</>);
}