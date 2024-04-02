import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductListingPage({
	params,
}: {
	params: { pageNumber: number };
}) {
	const products = await getProductsList(params.pageNumber - 1);
	return (
		<>
			<ProductList products={products} />
			<Pagination currentPage={params.pageNumber} totalPages={3} />
		</>
	);
}
