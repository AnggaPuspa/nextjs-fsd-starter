import { getUsers } from '@/entities/user/api/getUsers';
import { UserAvatar } from '@/entities/user/ui/UserAvatar';
import { BanUserButton } from '@/features/user-management/ui/BanUserButton';
import { ExportUserCsv } from '@/features/user-management/ui/ExportUserCsv';
import { Card, CardBody } from '@/shared/ui';
import { formatDate } from '@/shared/lib/formatters';

export async function UserRecentTable() {
  const users = await getUsers();

  return (
    <Card className="mt-8">
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-500">Pengguna Terbaru</h2>
          <p className="text-sm text-gray-400">Daftar pengguna yang baru bergabung atau aktif.</p>
        </div>
        <ExportUserCsv />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium">Profil</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Status &amp; Role</th>
              <th className="px-6 py-4 font-medium">Terakhir Login</th>
              <th className="px-6 py-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <UserAvatar name={user.name} url={user.avatarUrl} size="sm" />
                    <span className="font-medium text-gray-500">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 items-start">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-blue-500 text-blue-600' : 'bg-blue-200 text-blue-300'
                    }`}>
                      {user.role}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-teal-400 text-teal-500' : 'bg-red-400 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-400">{formatDate(user.lastLogin)}</td>
                <td className="px-6 py-4 text-right">
                  <BanUserButton userId={user.id} isBanned={user.status === 'banned'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
