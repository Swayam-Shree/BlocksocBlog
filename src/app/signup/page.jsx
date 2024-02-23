"use client"

import Header from "../../components/Header";

import signupHeaderImage from "../../assets/img/contact-bg.jpg"

import { useState } from "react";

export default function Page() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

	function handleSubmit() {
		console.log("put sign up handle stuff here, name and email variables contain the values", name, email);
	}

	return (<>
		<Header title={"Sign Up"} subtitle={"Why would you not?"} img={signupHeaderImage} />

		<main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>Please enter your details below:</p>
                        <div class="my-5">
                            <form id="contactForm">
                                <div class="form-floating">
                                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." onChange={e => {setName(e.currentTarget.value);}} />
                                    <label for="name">Name</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" id="email" type="email" placeholder="Enter your email..." onChange={e => {setEmail(e.currentTarget.value);}} />
                                    <label for="email">Email address</label>
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