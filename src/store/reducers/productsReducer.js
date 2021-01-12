import {FETCH_PRODUCTS} from '../types';

const initialState = {
  fetchedProducts: [
    {
      _id: 1,
      image: '/learnreact/images/dresses/dress1.jpg',
      image2: '/learnreact/images/dresses/dress1.1.jpg',
      image3: '/learnreact/images/dresses/dress1.2.jpg',
      title: 'Ruched Maxi Dress',
      description: 'Casual beauty is a breeze in this short sleeve maxi dress. Let this easy-to-wear piece take you through the season with the simple sexy charm of its crisscross V-neck, figure-flattering ruching and alluring side slit.',
      price: 44,
      availableSizes: ['M', 'S', 'XL', 'XXL'],
      star: 5,
    },
    {
      _id: 2,
      image: '/learnreact/images/dresses/dress2.jpg',
      image2: '/learnreact/images/dresses/dress2.1.jpg',
      image3: '/learnreact/images/dresses/dress2.2.jpg',
      title: 'Ombre Glitter Long Dress',
      description: 'Two silhouettes in one! The base layer is a curve-hugging solid sheath dress softened by the translucent A-line overlay with ombre and glitter details. The halter neckline helps to elongate and slim your form, drawing the eye up and providing balance to the juxtaposing lengths of the garment',
      price: 34.99,
      availableSizes: ['XS', 'M', 'S'],
      star: 3,
    },
    {
      _id: 3,
      image: '/learnreact/images/dresses/dress3.jpg',
      image2: '/learnreact/images/dresses/dress3.1.jpg',
      image3: '/learnreact/images/dresses/dress3.2.jpg',
      title: 'Cozy Sweater Dress',
      description: 'The name says it all with this wonderfully winter-ready Cozy Sweater Dress! Detailed printing graces upper part of your décolletage in a way that beautifully juxtaposes the sleek and short fit of this bodycon turtleneck.',
      price: 43,
      availableSizes: ['XS', 'M', 'S', 'L'],
      star: 1,
    },
    {
      _id: 4,
      image: '/learnreact/images/dresses/dress4.jpg',
      image2: '/learnreact/images/dresses/dress4.1.jpg',
      image3: '/learnreact/images/dresses/dress4.2.jpg',
      title: 'Ribbed Button Detail Dress',
      description: "When you're aiming for both sexy and sophisticated, reach for this Ribbed Button Detail Dress! Ready for cooler days with a cozy mock neck silhouette, this bodycon midi strikes the perfect desk-to-dinner balance of casual and dressy. The front slit lets you show off your legs in a pair of your favorite knee high stilettos or block heel booties.",
      price: 44,
      availableSizes: ['XS', 'S'],
      star: 5,
    },
    {
      _id: 5,
      image: '/learnreact/images/dresses/dress5.jpg',
      image2: '/learnreact/images/dresses/dress5.1.jpg',
      image3: '/learnreact/images/dresses/dress5.2.jpg',
      title: 'Ribbed Mock Neck Long Dress',
      description: 'This full-coverage look is your sexiest yet. Our Ribbed Mock Neck Long Dress takes on the chill with a high neckline, long sleeve, maxi length silhouette that flaunts every irresistible curve with its ultra-snug fit.',
      price: 39,
      availableSizes: ['S', 'M', 'L'],
      star: 5,
    },
    {
      _id: 6,
      image: '/learnreact/images/dresses/dress6.jpg',
      image2: '/learnreact/images/dresses/dress6.1.jpg',
      image3: '/learnreact/images/dresses/dress6.2.jpg',
      title: 'Cold Shoulder Maxi Top',
      description: "This A-line mini dress steals the spotlight with flowing, cape style sleeves that captivate with embellished cold shoulder slits. A layered surplice neckline makes for an undeniably feminine look that's destined to captivate.",
      price: 44,
      availableSizes: ['S', 'M', 'XXL'],
      star: 4,
    },
    {
      _id: 7,
      image: '/learnreact/images/dresses/dress7.jpg',
      image2: '/learnreact/images/dresses/dress7.1.jpg',
      image3: '/learnreact/images/dresses/dress7.2.jpg',
      title: 'Deep Plunge Long Dress',
      description: "This sophisticated maxi takes the plunge into a gracefully ruched center seam that's easy on the midsection. Fit for a true temptress, the high front slit adds swaying movement to every seductive step you take.",
      price: 54,
      availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      star: 3,
    },
    {
      _id: 8,
      image: '/learnreact/images/dresses/dress8.jpg',
      image2: '/learnreact/images/dresses/dress8.1.jpg',
      image3: '/learnreact/images/dresses/dress8.2.jpg',
      title: 'V-Neck Sweater Dress',
      description: "Sweater dresses don't always have to be casual! This slinky style has a snug bodycon fit from the elbows and waist down, with a ruched V-neck bodice for extra seductive flair!.",
      price: 39,
      availableSizes: ['S', 'M'],
      star: 4,
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        fetchedProducts: action.payload,
      };
    default:
      return state;
  }
};
