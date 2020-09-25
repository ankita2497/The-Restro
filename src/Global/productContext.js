import React, { createContext, useReducer } from "react";
import { ProductReducer } from "./productReducer";
import soup1 from "../assets/soup1.jpg";
import soup2 from "../assets/soup2.jpg";
import soup3 from "../assets/soup3.jpg";
import soup4 from "../assets/soup4.jpg";
import soup5 from "../assets/soup5.jpg";
import soup7 from "../assets/soup7.jpeg";
import salads1 from "../assets/salads1.jpg";
import salads2 from "../assets/salads2.jpg";
import salads3 from "../assets/salads3.jpg";
import salads4 from "../assets/salads4.jpg";
import meat1 from "../assets/meat1.jpg";
import meat2 from "../assets/meat2.jpg";
import meat3 from "../assets/meat3.jpg";
import meat4 from "../assets/meat4.jpg";
import meat5 from "../assets/meat5.jpg";
import dessert1 from "../assets/dessert1.jpg";
import dessert2 from "../assets/dessert2.jpg";
import dessert3 from "../assets/dessert3.jpg";
import dessert4 from "../assets/dessert4.jpg";
import drink1 from "../assets/drink1.jpg";
import drink2 from "../assets/drink2.jpg";
import drink3 from "../assets/drink3.jpg";
import drink4 from "../assets/drink4.jpg";
import drink5 from "../assets/drink5.jpg";
export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useReducer(ProductReducer, [
    {
      id: 1,
      name: "Creamy Garlic mushroom Soup",
      price: 120,
      image: soup1,
      productStatus: "hot",
    },
    {
      id: 2,
      name: "Hammy Chickpea Soup",
      price: 150,
      image: soup2,
      productStatus: "new",
    },
    {
      id: 3,
      name: "Cold Cucumber Soup with Yogurt and Dill",
      price: 150,
      image: soup3,
      productStatus: "new",
    },
    {
      id: 4,
      name: "Chicken Soup",
      price: 110,
      image: soup4,
      productStatus: "new",
    },
    {
      id: 5,
      name: "Potato-and-Broccoli Soup",
      price: 160,
      image: soup5,
      productStatus: "hot",
    },
    {
      id: 6,
      name: "Mediterranean White Bean Soup",
      price: 100,
      image: soup7,
      productStatus: "new",
    },
    {
      id: 7,
      name: "Greek Salad",
      price: 100,
      image: salads1,
      productStatus: "hot",
    },
    {
      id: 8,
      name: " Mediterranean-Style Egg Salads",
      price: 120,
      image: salads2,
      productStatus: "new",
    },
    {
      id: 9,
      name: " Balsamic Steak Salad",
      price: 130,
      image: salads3,
      productStatus: "new",
    },
    {
      id: 10,
      name: " Instant Pot Chicken Taco Bowls Salad",
      price: 180,
      image: salads4,
      productStatus: "new",
    },
    {
      id: 11,
      name: " Baked Salmon with Buttery Honey Mustard Sauce",
      price: 210,
      image: meat1,
      productStatus: "hot",
    },
    {
      id: 12,
      name: " Bistec encebollado",
      price: 210,
      image: meat2,
      productStatus: "new",
    },
    {
      id: 13,
      name: " Kappamaki Cucumber Sushi ",
      price: 250,
      image: meat3,
      productStatus: "new",
    },
    {
      id: 14,
      name: "  Salomon Sushi ",
      price: 250,
      image: meat4,
      productStatus: "new",
    },
    {
      id: 15,
      name: " Pairings Salmon and Wine  ",
      price: 300,
      image: meat5,
      productStatus: "new",
    },
    {
      id: 16,
      name: "Angel Strawberry Dessert ",
      price: 120,
      image: dessert1,
      productStatus: "new",
    },
    {
      id: 17,
      name: "Devils Delight ",
      price: 170,
      image: dessert2,
      productStatus: "hot",
    },
    {
      id: 18,
      name: "Red Velvet Cheese ",
      price: 170,
      image: dessert3,
      productStatus: "new",
    },
    {
      id: 19,
      name: "Zebra Torte ",
      price: 200,
      image: dessert4,
      productStatus: "new",
    },
    {
      id: 20,
      name: "Mimosa ",
      price: 180,
      image: drink1,
      productStatus: "new",
    },
    {
      id: 21,
      name: "The mint julep ",
      price: 180,
      image: drink2,
      productStatus: "new",
    },
    {
      id: 22,
      name: "The Bloody Mary ",
      price: 190,
      image: drink3,
      productStatus: "new",
    },
    {
      id: 23,
      name: " Lemon Lavender Mocktail with Strawberry Lime Mojito Combo",
      price: 190,
      image: drink4,
      productStatus: "new",
    },
    {
      id: 24,
      name: " Blue Lagoon",
      price: 150,
      image: drink5,
      productStatus: "new",
    },
  ]);

  return (
    <productContext.Provider value={{ products }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
