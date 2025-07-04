type AuthErrorListResponse = {
  lastName: string;
  password: string;
  name: string;
  confirmPassword: string;
  email: string;
  "Bad credentials": string;
};

const typeErrors: AuthErrorListResponse = {
  "Bad credentials": "Bad credentials",
  confirmPassword: "confirmPassword",
  email: "email",
  lastName: "lastName",
  name: "name",
  password: "password",
};

export default typeErrors;
