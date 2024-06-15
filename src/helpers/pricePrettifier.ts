export function pricePrettifier(price: number): number {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
