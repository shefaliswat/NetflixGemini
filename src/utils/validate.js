import { errorMessages } from "./errorCodes";

export const checkValidData = (isSignIn, email, password, name) => {
  if (!email || !password) return errorMessages.emailOrPassword;
  if (email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/.test(email))
    return errorMessages.email;
  if (
    password &&
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    )
  )
    return errorMessages.password;
  if (!isSignIn) {
    if (!name) return errorMessages.name;
  }
  return null;
};
