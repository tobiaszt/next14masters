export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: ProductListItemCoverImageType;
	description: string;
};

export type ProductListItemCoverImageType = {
	src: string;
	alt: string;
};
