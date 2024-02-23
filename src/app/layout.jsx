import "./globals.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout({ children }) {
	return (
	  <html lang="en">
		<body>
			<script defer src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
			<link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
			<Navbar />
			{children}
			<Footer />
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
		</body>
	  </html>
	)
}