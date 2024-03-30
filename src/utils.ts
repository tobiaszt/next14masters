export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "EUR",
	}).format(amount);
};
