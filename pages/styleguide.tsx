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
					<div className="flex gap-2 m-2">
						<Button size="small">Small</Button>
						<Button>Regular</Button>
						<Button size="large">Big</Button>
					</div>
					<div className="flex gap-2 m-2">
						<Button size="small" outlined>
							Small
						</Button>
						<Button outlined>Regular</Button>
						<Button size="large" outlined>
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Accent</h3>
					<div className="flex gap-2 m-2">
						<Button variant="accent" size="small">
							Small
						</Button>
						<Button variant="accent">Regular</Button>
						<Button variant="accent" size="large">
							Big
						</Button>
					</div>
					<div className="flex gap-2 m-2">
						<Button variant="accent" size="small" outlined>
							Small
						</Button>
						<Button variant="accent" outlined>
							Regular
						</Button>
						<Button variant="accent" size="large" outlined>
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Success</h3>
					<div className="flex gap-2 m-2">
						<Button variant="success" size="small">
							Small
						</Button>
						<Button variant="success">Regular</Button>
						<Button variant="success" size="large">
							Big
						</Button>
					</div>
					<div className="flex gap-2 m-2">
						<Button variant="success" size="small" outlined>
							Small
						</Button>
						<Button variant="success" outlined>
							Regular
						</Button>
						<Button variant="success" size="large" outlined>
							Big
						</Button>
					</div>
				</div>
				<div>
					<h3>Error</h3>
					<div className="flex gap-2 m-2">
						<Button variant="error" size="small">
							Small
						</Button>
						<Button variant="error">Regular</Button>
						<Button variant="error" size="large">
							Big
						</Button>
					</div>
					<div className="flex gap-2 m-2">
						<Button variant="error" size="small" outlined>
							Small
						</Button>
						<Button variant="error" outlined>
							Regular
						</Button>
						<Button variant="error" size="large" outlined>
							Big
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
 