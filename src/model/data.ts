import { authors } from "./authors.ts";
import blogPost from "./blogPost";
import cardImage from "../assets/images/webp/foodImage.webp";
export const post: blogPost[] = [
  {
    id: "1",
    author: authors[0],
    body: "<h1>this is first content</h1>",
    content: [{ label: "blog", to: "/blog-page" }],
    createdAt: "nov 10 2021",
    updatedAt: "dec 10 2021",
    description: {
      description: "this is discription",
      subHeading: "this is subheading",
    },
    tittle: "sukhvinder",
    image: cardImage,
    category: "travel",
  },
  {
    id: "2",
    author: authors[1],
    body: "<h1>this is first content2</h1>",
    content: [{ label: "", to: "/blog-page" }],
    createdAt: "nov 10 2021",
    updatedAt: "dec 10 2021",
    description: {
      description: "this is discription",
      subHeading: "this is subheading",
    },
    tittle: "ravi",
    image: cardImage,
    category: "travel",
  },
  {
    id: "3",
    author: authors[2],
    body: "<h1>this is first content3</h1>",
    content: [{ label: "update", to: "/update" }],
    createdAt: "nov 10 2021",
    updatedAt: "dec 10 2021",
    description: {
      description: "this is discription",
      subHeading: "this is subheading",
    },
    tittle: "ravi",
    image: cardImage,
    category: "travel",
  },
];
