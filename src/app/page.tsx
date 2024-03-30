import { type ProductItemType } from "@/ui/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Leather Wallet",
		price: 2522,
		coverImage: {
			alt: "Leather Wallet",
			src: "/products/wallet.jpg",
		},
	},
	{
		id: "2",
		category: "Clothing",
		name: "T-Shirt",
		price: 1999,
		coverImage: {
			alt: "T-Shirt",
			src: "/products/tshirt.jpg",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Sunglasses",
		price: 1500,
		coverImage: {
			alt: "Sunglasses",
			src: "/products/sunglasses.jpg",
		},
	},
	{
		id: "4",
		category: "Electronics",
		name: "Wireless Headphones",
		price: 4999,
		coverImage: {
			alt: "Wireless Headphones",
			src: "/products/headphones.jpg",
		},
	},
	{
		id: "5",
		category: "Accessories",
		name: "Travel Bag",
		price: 2999,
		coverImage: {
			alt: "Travel Bag",
			src: "/products/bag.jpg",
		},
	},
	{
		id: "6",
		category: "Accessories",
		name: "Watch",
		price: 3999,
		coverImage: {
			alt: "Watch",
			src: "/products/watch.jpg",
		},
	},
	{
		id: "7",
		category: "Electronics",
		name: "Smartwatch",
		price: 9999,
		coverImage: {
			alt: "Smartwatch",
			src: "/products/smartwatch.jpg",
		},
	},
	{
		id: "8",
		category: "Toys",
		name: "Truck",
		price: 3499,
		coverImage: {
			alt: "Truck",
			src: "/products/truck.jpg",
		},
	},
	{
		id: "9",
		category: "Accessories",
		name: "Backpack",
		price: 1999,
		coverImage: {
			alt: "Backpack",
			src: "/products/backpack.jpg",
		},
	},
	{
		id: "10",
		category: "Electronics",
		name: "Laptop",
		price: 8999,
		coverImage: {
			alt: "Laptop",
			src: "/products/laptop.jpg",
		},
	},
	{
		id: "11",
		category: "Clothing",
		name: "Shoes",
		price: 3999,
		coverImage: {
			alt: "Shoes",
			src: "/products/shoes.jpg",
		},
	},
	{
		id: "12",
		category: "Accessories",
		name: "Cap",
		price: 999,
		coverImage: {
			alt: "Cap",
			src: "/products/cap.jpg",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md bg-white p-12 sm:max-w-2xl md:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
