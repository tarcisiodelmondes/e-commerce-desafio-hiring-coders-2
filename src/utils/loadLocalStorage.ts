export function loadLocalStorage(name: string) {
  const products = localStorage.getItem(name);

  if (!products) return undefined;

  return JSON.parse(products);
}
