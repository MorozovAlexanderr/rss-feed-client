export type User = {
  id: string;
  username: string;
};

export type UserResponse = {
  user: User;
  accessToken: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserSignInParams = {
  email: string;
  password: string;
};

export type UserSignUpParams = {
  username: string;
  email: string;
  password: string;
};

export type AuthState = {
  user: User | null;
  accessToken: string | null;
};
