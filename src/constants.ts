export const __prod__ = process.env.NODE_ENV === 'production';
export const baseUrl = __prod__
  ? 'https://sepetim-clone.herokuapp.com/graphql'
  : 'http://localhost:5000/graphql';

export const LOCALSTORAGE_TOKEN = 'token';

export const paths = {
  home: '/',
  verifyAccount: '/verify-account',
  login: '/login',
  register: '/register',
  restaurantDetailPage: '/restaurants/:slug',
  myProfile: '/my-profile',
  editProfile: '/edit-profile',
  categoryPage: '/category/:slug',
};
