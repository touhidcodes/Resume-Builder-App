import Template1 from "../utilities/Templates/Template1";
import Template2 from "../utilities/Templates/Template2";
import Template3 from "../utilities/Templates/Template3";
import Template4 from "../utilities/Templates/Template4";
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
    data: <Template2 />,
  },

  {
    id: 3,
    type: "local",
    thumbnail: images.image3,
    data: <Template3 />,
  },

  {
    id: 4,
    type: "local",
    thumbnail: images.image4,
    data: <Template4 />,
  },
];

export default templates;
