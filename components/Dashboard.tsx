import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";

const Dashboard = () => {
	const router = useRouter();
	// Get current user and signOut function from context
	const { user, signOut } = useAuth();

	async function handleSignOut() {
		// Ends user session
		await signOut();

		// Redirects the user to Login page
		// router	.push('/login')
	}

	return (
		<div>
			<p>Welcome, {user?.id}!</p>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
};

export default Dashboard;
 