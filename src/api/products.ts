import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	category: string;
	description: string;
	price: number;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async (offset: number = 0) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`,
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		productResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};
