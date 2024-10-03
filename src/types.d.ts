export interface IUser {
  name: string;
  email: string;
  role: 'user' | 'editor' | 'admin';
  isActive: boolean;

}