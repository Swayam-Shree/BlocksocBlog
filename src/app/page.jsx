import ArticlePreview from "../components/ArticlePreview";

import Header from "../components/Header";
import homeHeaderImage from "../assets/img/home-bg.jpg"

export default function Page() {
    let articlePreviewData = [
        {
            key: 0,
            title: "Man must explore, and this is exploration at its greatest",
            subtitle: "Problems look mighty small from 150 miles up",
            href: "/samplepost",
            author: "ggsdfgf",
            authorHref: "/",
            date: "September 24, 2023"
        },
        {
            key: 1,
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subtitle: "",
            href: "/samplepost",
            author: "vmnmvnm",
            authorHref: "/",
            date: "September 18, 2023"
        },
        {
            key: 2,
            title: "Science has not yet mastered prophecy",
            subtitle: "We predict too much for the next year and yet far too little for the next ten.",
            href: "/samplepost",
            author: "zcvzcvczv",
            authorHref: "/",
            date: "August 24, 2023"
        },
        {
            key: 3,
            title: "Failure is not an option",
            subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            href: "/samplepost",
            author: "uityitu",
            authorHref: "/",
            date: "July 8, 2023"
        }
    ];

	return (<>
        <Header title={"Clean Blog"} subtitle={"A Web3 Blog"} img={homeHeaderImage} />

        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {
                        articlePreviewData.map((previewData) => {
                            return (<ArticlePreview
                                key={previewData.key}
                                title={previewData.title}
                                subtitle={previewData.subtitle}
                                href={previewData.href}
                                author={previewData.author}
                                authorHref={previewData.authorHref}
                                date={previewData.date}
                            />);
                        })
                    }
                    {/* <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> */}
                </div>
            </div>
        </div>
	</>);
}