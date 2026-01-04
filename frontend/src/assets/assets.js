// Import images
import logo from ".//logo.png";
import search_icon from ".//search.png";
import profile_icon from ".//profile.png";
import cart_icon from ".//cart.png";
import menu_icon from ".//menu.png";
import dropdown_icon from ".//arrow.png";
import hero_img from ".//hero_right.png";

import p_img1 from "./p_1.png";
import p_img2 from "./p_2.png";
import p_img3 from "./p_img1.png";
import p_img4 from "./p_img3.png";
import p_img5 from "./p_img4.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img12.png";
import p_img8 from "./p_img14.png";
import p_img9 from "./p_img15.png";
import p_img10 from "./p_img17.png";

import p_img11 from "./p_img21.png";
import p_img12 from "./p_img24.png";
import p_img13 from "./p_img26.png";
import p_img14 from "./p_img28.png";
import p_img15 from "./p_img35.png";
import p_img16 from "./p_img36.png";
import p_img17 from "./p_img39.png";
import p_img18 from "./p_img46.png";
import p_img19 from "./p_img50.png";
import p_img20 from "./p_img51.png";

// Export as an object
export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img

};

export const products = [
  {
    _id: "p1",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight cotton top perfect for daily wear.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "p2",
    name: "Men Slim Fit T-Shirt",
    description: "Comfortable slim fit t-shirt made from premium fabric.",
    price: 120,
    image: [p_img2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345449,
    bestseller: true,
  },
  {
    _id: "p3",
    name: "Women High Waist Jeans",
    description: "Stylish high waist jeans with a modern fit.",
    price: 220,
    image: [p_img3],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345450,
    bestseller: false,
  },
  {
    _id: "p4",
    name: "Men Casual Shirt",
    description: "Casual shirt suitable for office and outings.",
    price: 180,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    _id: "p5",
    name: "Women Floral Dress",
    description: "Elegant floral dress with soft fabric.",
    price: 250,
    image: [p_img5],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 1716634345452,
    bestseller: true,
  },
  {
    _id: "p6",
    name: "Men Denim Jeans",
    description: "Classic denim jeans with durable stitching.",
    price: 300,
    image: [p_img6],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345453,
    bestseller: false,
  },
  {
    _id: "p7",
    name: "Women Winter Jacket",
    description: "Warm and stylish jacket for cold weather.",
    price: 450,
    image: [p_img7],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: 1716634345454,
    bestseller: true,
  },
  {
    _id: "p8",
    name: "Men Hoodie",
    description: "Soft cotton hoodie with adjustable hood.",
    price: 280,
    image: [p_img8],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345455,
    bestseller: false,
  },
  {
    _id: "p9",
    name: "Women Sports Leggings",
    description: "Stretchable leggings for workouts and yoga.",
    price: 150,
    image: [p_img9],
    category: "Women",
    subCategory: "Sportswear",
    sizes: ["S", "M", "L"],
    date: 1716634345456,
    bestseller: true,
  },
  {
    _id: "p10",
    name: "Men Track Pants",
    description: "Comfortable track pants for daily wear.",
    price: 170,
    image: [p_img10],
    category: "Men",
    subCategory: "Sportswear",
    sizes: ["M", "L", "XL"],
    date: 1716634345457,
    bestseller: false,
  },



  {
    _id: "p11",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight cotton top perfect for daily wear.",
    price: 100,
    image: [p_img11],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "p12",
    name: "Men Slim Fit T-Shirt",
    description: "Comfortable slim fit t-shirt made from premium fabric.",
    price: 120,
    image: [p_img12],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345449,
    bestseller: true,
  },
  {
    _id: "p13",
    name: "Women High Waist Jeans",
    description: "Stylish high waist jeans with a modern fit.",
    price: 220,
    image: [p_img13],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: 1716634345450,
    bestseller: false,
  },
  {
    _id: "p14",
    name: "Men Casual Shirt",
    description: "Casual shirt suitable for office and outings.",
    price: 180,
    image: [p_img14],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    _id: "p15",
    name: "Women Floral Dress",
    description: "Elegant floral dress with soft fabric.",
    price: 250,
    image: [p_img15],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 1716634345452,
    bestseller: true,
  },
  {
    _id: "p16",
    name: "Men Denim Jeans",
    description: "Classic denim jeans with durable stitching.",
    price: 300,
    image: [p_img16],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345453,
    bestseller: false,
  },
  {
    _id: "p17",
    name: "Women Winter Jacket",
    description: "Warm and stylish jacket for cold weather.",
    price: 450,
    image: [p_img17],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["M", "L"],
    date: 1716634345454,
    bestseller: true,
  },
  {
    _id: "p18",
    name: "Men Hoodie",
    description: "Soft cotton hoodie with adjustable hood.",
    price: 280,
    image: [p_img18],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345455,
    bestseller: false,
  },
  {
    _id: "p19",
    name: "Women Sports Leggings",
    description: "Stretchable leggings for workouts and yoga.",
    price: 150,
    image: [p_img19],
    category: "Women",
    subCategory: "Sportswear",
    sizes: ["S", "M", "L"],
    date: 1716634345456,
    bestseller: true,
  },
  {
    _id: "p20",
    name: "Men Track Pants",
    description: "Comfortable track pants for daily wear.",
    price: 170,
    image: [p_img20],
    category: "Men",
    subCategory: "Sportswear",
    sizes: ["M", "L", "XL"],
    date: 1716634345457,
    bestseller: false,
  }
];