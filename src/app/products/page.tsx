import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductListingPage() {
	const products = await getProductsList();
	return (
		<>
			<ProductList products={products} />
			<Pagination currentPage={1} totalPages={3} />
		</>
	);
}
