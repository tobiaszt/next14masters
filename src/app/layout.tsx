import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const activeLinkProps = {
		className: "text-blue-600",
		activeClassName: "font-bold",
	};
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex justify-center space-x-4 bg-gray-100 p-4">
						<li>
							<ActiveLink href="/" {...activeLinkProps}>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products" {...activeLinkProps}>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md bg-white p-12 sm:max-w-2xl md:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">
						&copy; {new Date().getFullYear()} Products
					</p>
				</footer>
			</body>
		</html>
	);
}
