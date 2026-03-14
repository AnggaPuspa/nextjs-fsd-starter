import { User } from '../model/types';

export async function getUsers(): Promise<User[]> {
  // Simulasi fetch API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Budi Santoso',
          email: 'budi@example.com',
          role: 'user',
          status: 'active',
          lastLogin: new Date().toISOString(),
          avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
        },
        {
          id: '2',
          name: 'Siti Aminah',
          email: 'siti@example.com',
          role: 'admin',
          status: 'active',
          lastLogin: new Date(Date.now() - 86400000).toISOString(),
          avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
        },
        {
          id: '3',
          name: 'Joko Widodo',
          email: 'joko@example.com',
          role: 'user',
          status: 'banned',
          lastLogin: new Date(Date.now() - 86400000 * 5).toISOString(),
          avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joko',
        },
      ]);
    }, 1000);
  });
}
