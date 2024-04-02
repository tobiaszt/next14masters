import { type Metadata } from "next";
import { getProductById } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Product Details`,
		description: product.description,
	};
};

export default async function ProductDetailsPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<h1>{product.name}</h1>
			<div>{product.category}</div>
			<div>{product.description}</div>
		</>
	);
}
