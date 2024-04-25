import { users } from "../data/credentials";

export const loginUser = ({ email, password }) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  return user;
};
