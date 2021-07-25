import { Products } from "../interfaces/Products";

export function saveInLocalStorage(name: string, object: {}) {
  localStorage.setItem(name, JSON.stringify(object));
}
