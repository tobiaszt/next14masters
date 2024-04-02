import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({
	currentPage,
	totalPages,
}: {
	currentPage: number;
	totalPages: number;
}) => {
	if (totalPages === 1) {
		return null;
	}

	return (
		<nav
			className="mx-auto mt-3 max-w-md text-center"
			aria-label="pagination"
		>
			<p className="text-gray-700">Page {currentPage}</p>
			<ul className="mt-6 flex items-center justify-center gap-2">
				{Array.from({ length: totalPages }, (_, index) => (
					<li key={index}>
						<ActiveLink
							className="block h-10 w-10 rounded-lg border p-2 text-center hover:bg-gray-300"
							activeClassName="bg-gray-300"
							href={`/products/${index + 1}`}
						>
							{index + 1}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
