export default async function AllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data; 
  } catch (err) {
    console.error("Error fetching products:", err);
    return []; 
  }
}
// https://fakestoreapi.com/products
//https://mocki.io/v1/82880826-aaeb-475c-9e2f-44c975ef7f72