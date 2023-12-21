import { authors } from "./authors";
import blogPost from "./blogPost";

const post: blogPost[] = [
  {
    id: "1",
    author: authors[0],
    body: "<h1>this is first content</h1>",
    content: [{ label: "first heading", to: "/" }],
    createdAt: "nov 10 2021",
    updatedAt: "dec 10 2021",
    description: {
      description: "this is discription",
      subHeading: "this is subheading",
    },
    tittle: "this is title",
    image: "",
  },
];
