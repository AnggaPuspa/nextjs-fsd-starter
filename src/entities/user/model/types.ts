export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'banned';
  lastLogin: string;
  avatarUrl?: string;
}
