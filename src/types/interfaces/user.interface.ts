export interface UserRegister {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  role?: string;
}

export interface UserLogin {
  email?: string;
  password?: string;
}
