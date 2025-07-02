export type SignupResponse = {
  status: string;
  response: Response;
};

export type Response = {
  id: string;
  code: string;
  name: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SignupRequest = {
  name: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
};
