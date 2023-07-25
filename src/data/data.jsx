import Template1 from "../utilities/Templates/Template1";
import Template2 from "../utilities/Templates/Template2";
import images from "./imagesData";

// Stores All Templates As a json State
const templates = [
  {
    id: 1,
    type: "local",
    thumbnail: images.image1,
    data: <Template1 />,
  },

  {
    id: 2,
    type: "local",
    thumbnail: images.image2,
    data: <Template1 />,
  },

  {
    id: 3,
    type: "local",
    thumbnail: images.image3,
    data: <Template2 />,
  },

  {
    id: 4,
    type: "local",
    thumbnail: images.image4,
    data: <Template1 />,
  },
];

export default templates;
