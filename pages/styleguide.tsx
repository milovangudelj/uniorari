import Head from "next/head";
import { Button } from "../components";

export default function Styleguide() {
	return (
		<div className="">
			<Head>
				<title>Styleguide | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<h1>Styleguide</h1>
			<div>
				<h2>Buttons</h2>
				<div>
					<h3>Primary</h3>
					<div>
						<Button variant="primary" size="small">
							Small
						</Button>
						<Button variant="primary" size="regular">
							Regular
						</Button>
						<Button variant="primary" size="big">
							Big
						</Button>
					</div>
					<div>
						<Button variant="primary" size="small" fill="outlined">
							Small
						</Button>
						<Button variant="primary" size="regular" fill="outlined">
							Regular
						</Button>
						<Button variant="primary" size="big" fill="outlined">
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Accent</h3>
					<div>
						<Button variant="accent" size="small">
							Small
						</Button>
						<Button variant="accent" size="regular">
							Regular
						</Button>
						<Button variant="accent" size="big">
							Big
						</Button>
					</div>
					<div>
						<Button variant="accent" size="small" fill="outlined">
							Small
						</Button>
						<Button variant="accent" size="regular" fill="outlined">
							Regular
						</Button>
						<Button variant="accent" size="big" fill="outlined">
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Success</h3>
					<div>
						<Button variant="success" size="small">
							Small
						</Button>
						<Button variant="success" size="regular">
							Regular
						</Button>
						<Button variant="success" size="big">
							Big
						</Button>
					</div>
					<div>
						<Button variant="success" size="small" fill="outlined">
							Small
						</Button>
						<Button variant="success" size="regular" fill="outlined">
							Regular
						</Button>
						<Button variant="success" size="big" fill="outlined">
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Error</h3>
					<div>
						<Button variant="error" size="small">
							Small
						</Button>
						<Button variant="error" size="regular">
							Regular
						</Button>
						<Button variant="error" size="big">
							Big
						</Button>
					</div>
					<div>
						<Button variant="error" size="small" fill="outlined">
							Small
						</Button>
						<Button variant="error" size="regular" fill="outlined">
							Regular
						</Button>
						<Button variant="error" size="big" fill="outlined">
							Big
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
 