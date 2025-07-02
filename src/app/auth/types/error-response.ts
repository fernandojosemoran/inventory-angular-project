export type ErrorResponse = {
  response: {
    errors: string[];
    message: string;
    status: number;
    timestamp: string;
  };
};
