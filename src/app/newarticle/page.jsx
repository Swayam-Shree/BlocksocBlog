"use client"

import Header from "../../components/Header";
import homeHeaderImage from "../../assets/img/post-sample-image.jpg"

import { useState } from "react";

export default function Page() {
	let [heading, setHeading] = useState("");
	let [subheading, setSubheading] = useState("");
	let [content, setContent] = useState("");

	function handleSubmit() {
		console.log("put new article handle stuff here, heading, subheading and content variables contain the values", heading, subheading, content);
	}

	return (<>
		<Header title={"New Article"} subtitle={"Let the creative juices flow."} img={homeHeaderImage} />

		<main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>Enter your article details here.</p>
                        <div class="my-5">
                            <form id="contactForm">
                                <div class="form-floating">
                                    <input class="form-control" id="heading" type="text" placeholder="Enter article heading..." onChange={e => {setHeading(e.currentTarget.value);}} />
                                    <label for="name">Heading</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" id="subheading" type="text" placeholder="Enter article subheading..." onChange={e => {setSubheading(e.currentTarget.value);}} />
                                    <label for="name">Subheading</label>
                                </div>

                                <div class="form-floating">
                                    <textarea class="form-control" id="content" placeholder="Enter article content..." style={{height: "16rem"}} onChange={e => {setContent(e.currentTarget.value);}} />
                                    <label for="message">Content</label>
                                </div>
                                <br />
                                
                                <button class="btn btn-primary text-uppercase" id="submitButton" type="submit" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
	</>);
}