import { type ProductListItemCoverImageType } from "@/ui/types";

export const ProductListItemCoverImage = ({
	alt,
	src,
}: ProductListItemCoverImageType) => {
	return (
		<div className="mb-3 aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
			/>
		</div>
	);
};
