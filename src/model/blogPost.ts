import author from "./author";
import linkModals from "./links";
export default interface blogPost {
  id: string;
  tittle: string;
  image: string;
  description: postDiscription;
  body: string;
  content: linkModals[];
  createdAt: string;
  updatedAt: string;
  author: author;
  category: string;
}
interface postDiscription {
  subHeading: string;
  description: string;
}
