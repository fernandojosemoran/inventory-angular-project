// export type AuthResponse = {
//   errors: AuthErrorListResponse;
//   message: string;
//   status: number;
//   timestamp: string;
// };

export type CategoryErrorResponse = {
  response: {
    status: string;
    errors: CategoryErrorListResponse;
  };
  status: string;
};

export type CategoryErrorListResponse = {
  name?: string;
  description?: string;
  imageUrl?: string;
  file?: string;
};
