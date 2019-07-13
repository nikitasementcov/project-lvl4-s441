import faker from 'faker';
import cookies from 'js-cookie';

const userNameCookieName = 'userName';
const createRandomUserName = () => faker.name.findName();
export const getUserName = () => cookies.get(userNameCookieName);
export const initRandomUserName = () => {
  if (cookies.get(userNameCookieName) != null) return;
  cookies.set(userNameCookieName, createRandomUserName());
};
