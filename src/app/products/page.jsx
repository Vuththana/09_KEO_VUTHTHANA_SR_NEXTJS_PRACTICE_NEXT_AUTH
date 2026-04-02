import { auth } from "@/auth";
import ProductCardComponent from "@/components/CardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

export default async function page() {
  
  const session = await auth();
  // const products = await getAllProductService(); Enabble this to fetch data
  const products = [
  {
    productId: "3be45c74-d945-4ee0-be0b-f37c7234edfe",
    name: "Iphone 17 Promax",
    description: "the best phone",
    imageUrl: "string",
    price: 1900,
    categoryId: "9e88ae61-1b3b-484a-9d8a-9713486afdb0",
  },
  {
    productId: "7a12c9e1-5f44-4c2b-9c2e-1b7e9d3a8abc",
    name: "Samsung Galaxy S25 Ultra",
    description: "flagship android phone",
    imageUrl: "string",
    price: 1800,
    categoryId: "9e88ae61-1b3b-484a-9d8a-9713486afdb0",
  }
];
  console.log("this is session in products page :", session);
  console.log(products)
  return (
    <div className="flex justify-center gap-10">
      {products.map((product, index) => (
        <ProductCardComponent key={index} product={product} />
      ))}
    </div>
  );
}