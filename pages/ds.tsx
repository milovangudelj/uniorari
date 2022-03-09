import Link from "next/link";

import { Button, ComponentShowcase, Layout } from "../components";

const Ds = () => {
	return (
		<Layout>
			<div className="px-4 pt-4">
				<div className="mb-8">
					<h1 className="text-4xl mb-2 font-bold">Design system</h1>
					<p className="text-on-surface-me dark:text-on-primary-me">
						Guidelines on how and where to use all the different
						components.
					</p>
				</div>
				<div className="flex flex-col space-y-8">
					<section>
						<h2 className="text-3xl mb-2 font-bold">Buttons</h2>
						<p className="text-on-surface-me dark:text-on-primary-me">
							Labels allow users to take actions, and make choices, with
							a single tap.
						</p>
						<div className="flex flex-col mt-4 gap-8">
							<div>
								<h3 className="text-2xl mb-1 font-medium">
									Basic button
								</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									The Button comes with three variants: text (default),
									contained, and outlined.
								</p>
								<ComponentShowcase className="mt-4" showCode>
									<Button variant="text">Text</Button>
									<Button>Contained</Button>
									<Button variant="outlined">Outlined</Button>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">
									Text button
								</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									Text buttons are typically used for less-pronounced
									actions, including those located: in dialogs, in
									cards. In cards, text buttons help maintain an
									emphasis on card content.
								</p>
								<ComponentShowcase className="mt-4" showCode>
									<Button variant="text">Primary</Button>
									<Button variant="text" disabled>
										Disabled
									</Button>
									<Button
										variant="text"
										href="/docenti"
										as={Link}
										passHref
									>
										Link
									</Button>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">
									Contained button
								</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									Contained buttons are high-emphasis, distinguished by
									their use of elevation and fill. They contain actions
									that are primary to your app.
								</p>
								<ComponentShowcase className="mt-4" showCode>
									<Button>Contained</Button>
									<Button disabled>Disabled</Button>
									<Button as={Link} passHref href="/scuole">
										Link
									</Button>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">
									Outlined button
								</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									Outlined buttons are medium-emphasis buttons. They
									contain actions that are important but aren&apos;t
									the primary action in an app.
								</p>
								<p className="text-on-surface-me dark:text-on-primary-me">
									Outlined buttons are also a lower emphasis
									alternative to contained buttons, or a higher
									emphasis alternative to text buttons.
								</p>
								<ComponentShowcase className="mt-4" showCode>
									<Button variant="outlined">Primary</Button>
									<Button variant="outlined" disabled>
										Disabled
									</Button>
									<Button
										variant="outlined"
										as={Link}
										passHref
										href="/corsi"
									>
										Link
									</Button>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">Color</h3>
								<ComponentShowcase className="mt-4" showCode>
									<Button color="accent" variant="text">
										Accent
									</Button>
									<Button color="success" variant="contained">
										Success
									</Button>
									<Button color="error" variant="outlined">
										Error
									</Button>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">Sizes</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									For larger or smaller buttons, use the size prop.
								</p>
								<ComponentShowcase className="flex-col mt-4">
									<div className="flex space-x-2 items-center">
										<Button variant="text" size="small">
											Small
										</Button>
										<br />
										<Button variant="text">Medium</Button>
										<Button variant="text" size="large">
											Large
										</Button>
									</div>
									<div className="flex space-x-2 items-center">
										<Button variant="outlined" size="small">
											Small
										</Button>
										<Button variant="outlined">Medium</Button>
										<Button variant="outlined" size="large">
											Large
										</Button>
									</div>
									<div className="flex space-x-2 items-center">
										<Button size="small">Small</Button>
										<Button>Medium</Button>
										<Button size="large">Large</Button>
									</div>
								</ComponentShowcase>
							</div>
							<div>
								<h3 className="text-2xl mb-1 font-medium">
									Loading button
								</h3>
								<p className="text-on-surface-me dark:text-on-primary-me">
									The loading buttons can show loading state and
									disable interactions.
								</p>
								<ComponentShowcase className="flex-col mt-4">
									<div className="flex space-x-2 items-center">
										<Button variant="text" loading>
											Label
										</Button>
										<Button variant="outlined" loading>
											Label
										</Button>
										<Button variant="contained" loading>
											Label
										</Button>
									</div>
									<div className="flex space-x-2 items-center">
										<Button color="success" variant="text" loading>
											Label
										</Button>
										<Button
											color="success"
											variant="outlined"
											loading
										>
											Label
										</Button>
										<Button
											color="success"
											variant="contained"
											loading
										>
											Label
										</Button>
									</div>
									<div className="flex space-x-2 items-center">
										<Button color="error" variant="text" loading>
											Label
										</Button>
										<Button color="error" variant="outlined" loading>
											Label
										</Button>
										<Button color="error" variant="contained" loading>
											Label
										</Button>
									</div>
								</ComponentShowcase>
							</div>
						</div>
					</section>
					<section>
						<div className="mb-4">
							<h2 className="text-3xl mb-1 font-bold">Shadows</h2>
							<p className="text-on-surface-me dark:text-on-primary-me">
								A collection of all shadow styles
							</p>
						</div>
						<div className="flex gap-2 border border-grey-200 dark:border-grey-800 p-4 items-center justify-center rounded-lg">
							<div className="flex flex-wrap gap-4 items-center justify-center">
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-none"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-sm"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-md"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-lg"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-xl"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-2xl"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-3xl"></div>
								<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-4xl"></div>
								<div className="rounded-xl w-24 h-24 shadow-inner"></div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</Layout>
	);
};

export default Ds;
