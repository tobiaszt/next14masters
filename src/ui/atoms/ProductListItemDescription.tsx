import { type ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="grid gap-1">
			<div>
				<h3 className="text-base font-medium text-gray-700">
					{name}
				</h3>
				<p className="text-xs text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
