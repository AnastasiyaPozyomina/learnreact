import {FETCH_POSTS} from '../types';

const initialState = {
  fetchedPosts: [
    {
      id: 1,
      date:'OCTOBER 22, 2020',
      title: 'HOW TO WEAR A JUMPSUIT TO A WEDDING',
      body:"For a year that was mostly spent indoors at home, I somehow convinced myself to get dressed nearly every single day. As much as I enjoy dressing down or generally casual and having nowhere to go, I obviously love fashion more so I knew that finding the motivation to keep creating looks and finding amazing pieces to share with you guys was imperative for me this past year more than ever. The Fashion Jackson aesthetic has always been the same: easy, effortless, and extremely versatile. Some people consider “basic” to be boring, but not me. In fact, I think when you take the time to combine basic pieces in a tasteful way, they speak much louder than loud pieces themselves!"
    },
    {
      id: 2,
      date:'November 5, 2020',
      title: 'Fashion',
      body:'Fashion Jackson" is the stylish creation of Dallas fashionista Amy Jackson, who launched her site as a sideline to her corporate career, and quickly turned it into a thriving business. Amys signature style is sophisticated but comfortable, with a little edge mixed in. A look through her daily outfit inspiration photography shows Amy typically wearing chic, streamlined street style ensembles, including skinny jeans, jumpsuits, and slim pants, layered smartly with blazers or leather jackets, and worn with sneakers. Fashion Jackson has been featured in WhoWhatWear, Elle, StyleCaster, has appeared in campaigns with Banana Republic, and worked with brands including Nordstrom, Neiman Marcus, Ann Taylor, and many more.'
    },
    {
      id: 3,
      date:'December 15, 2020',
      title: 'BILLIE HACK',
      body:'I love love love the simplicity of the regular sleeve version of the Billie sweatshirt dress. Having said that, I can not say no to a ruffle, so decided to add experiment with some little shoulder flourishes on one of my Billie creations. And I love the result!Truth be told I got the inspiration from a similar top Khadija on The Apprentice once wore. Not my usual source of fashion inspiration, admittedly!'
    },
    {
      id: 4,
      date:'JANUARY 03, 2021',
      title: '5 Easy Ways to Keep Your New Year’s Fitness Resolutions',
      body:'With every new year, come new resolutions and one of the most popular ones is to workout more/eat healthier/and generally just improve lifestyle. For me, exercise is much more about my overall health and wellness rather than vanity, but I see both sides! I love how much we’ve gotten outside this year (due in part to COVID and also moving to Nashville with lots of new trails and roads to explore), and I also started working with a personal trainer in 2020 whose workouts I’ve really been enjoying. I want to keep it up in 2021, so read my top five ways I plan to stay on track when it comes to taking care of myself in the new year!'
    },
    {
      id: 5,
      date:'JANUARY 05, 2021',
      title: 'Fashion Jackson',
      body:'Fashion Jackson" is the stylish creation of Dallas fashionista Amy Jackson, who launched her site as a sideline to her corporate career, and quickly turned it into a thriving business. Amys signature style is sophisticated but comfortable, with a little edge mixed in. A look through her daily outfit inspiration photography shows Amy typically wearing chic, streamlined street style ensembles, including skinny jeans, jumpsuits, and slim pants, layered smartly with blazers or leather jackets, and worn with sneakers. Fashion Jackson has been featured in WhoWhatWear, Elle, StyleCaster, has appeared in campaigns with Banana Republic, and worked with brands including Nordstrom, Neiman Marcus, Ann Taylor, and many more.'
    },
    {
      id: 6,
      date:'JANUARY 06, 2021',
      title: 'TILLY IS SHOULDER RUFFLE BILLIE HACK',
      body:'I love love love the simplicity of the regular sleeve version of the Billie sweatshirt dress. Having said that, I can not say no to a ruffle, so decided to add experiment with some little shoulder flourishes on one of my Billie creations. And I love the result!Truth be told I got the inspiration from a similar top Khadija on The Apprentice once wore. Not my usual source of fashion inspiration, admittedly!'
    },
  ]
 
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, fetchedPosts:  action.payload  };
    default:
      return state;
  }
};
