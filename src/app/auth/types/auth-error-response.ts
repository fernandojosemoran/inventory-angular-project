export type AuthErrorResponse = {
  response: AuthResponse;
  status: string;
};

export type AuthResponse = {
  errors: AuthErrorListResponse;
  message: string;
  status: number;
  timestamp: string;
};

export interface AuthErrorListResponse {
  lastName?: string;
  password?: string;
  name?: string;
  confirmPassword?: string;
  email?: string;
  "Bad credentials"?: string;
}
