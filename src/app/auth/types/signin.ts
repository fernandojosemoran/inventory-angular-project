export type SingninResponse = {
  status: string;
  response: Response;
};

export type Response = {
  accessToken: string;
};

export type SingninRequest = {
  name: string;
  password: string;
  email: string;
};
