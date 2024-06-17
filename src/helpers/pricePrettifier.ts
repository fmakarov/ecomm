function checkPriceType(price: number | string): string {
  const priceCheckString: string = typeof price === 'number' ? price.toString() : price;
  if (Number.isNaN(priceCheckString)) {
    return '0';
  }

  return Number.parseInt(priceCheckString).toString();
}

export function calculateDownPayment(price: number): string {
  const monthlyPayment = Number.parseInt(checkPriceType(price / 12));
  return pricePrettifier(monthlyPayment);
}

export function pricePrettifier(price: string | number): string {
  const prettyNumber = checkPriceType(price);
  return prettyNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function getRandomInt() {
  const min = Math.ceil(25500);
  const max = Math.floor(530000);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
