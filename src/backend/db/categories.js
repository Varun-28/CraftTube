import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "science-experiments",
    categoryTitle: "Science Experiments",
    description: "Amazing tricks and fun experiments you can repeat at home",
    categoryImg: "https://firebasestorage.googleapis.com/v0/b/video-library-image-data.appspot.com/o/Science-craft%2Fscience1.jpg?alt=media&token=5d86ea5a-51ad-4633-ae9f-14fc5309ccff" 
  },
  {
    _id: uuid(),
    categoryName: "craft",
    categoryTitle: "Craft",
    description: "HACKS EVERYBODY IS GOING TO LOVE",
    categoryImg: "https://firebasestorage.googleapis.com/v0/b/video-library-image-data.appspot.com/o/craft%2Fcraft1.webp?alt=media&token=e83135d6-2cd4-4ad6-a008-e118c3a773d8" 
  },
  {
    _id: uuid(),
    categoryName: "smart-parenting-hacks",
    categoryTitle: "Smart Parenting Hacks",
    description: "COOL WAYS TO ENTERTAIN YOURSELF",
    categoryImg: "https://firebasestorage.googleapis.com/v0/b/video-library-image-data.appspot.com/o/smart-parenting-hacks%2Fparenting1.webp?alt=media&token=4478835a-95c6-4b0d-898a-82d2e6b0429c" 
  },
  {
    _id: uuid(),
    categoryName: "life-hacks",
    categoryTitle: "Life Hacks",
    description: "Useful Tricks For All Occasions",
    categoryImg: "https://firebasestorage.googleapis.com/v0/b/video-library-image-data.appspot.com/o/life-hacks%2Flife1.jpg?alt=media&token=0c32d956-1cdb-450e-a39d-a689d402ce3f" 
  },
];
