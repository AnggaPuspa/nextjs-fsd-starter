import Link from 'next/link';

export function AdminSidebar() {
  const menus = [
    { label: 'Dashboard', href: '/dashboard', active: true },
    { label: 'Manajemen Pengguna', href: '#', active: false },
    { label: 'Laporan Keuangan', href: '#', active: false },
    { label: 'Pengaturan', href: '#', active: false },
  ];

  return (
    <aside className="w-64 bg-slate-900 min-h-screen p-6 text-slate-300">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white">
          A
        </div>
        <span className="text-xl font-bold text-white tracking-tight">AdminPanel</span>
      </div>

      <nav className="space-y-1">
        {menus.map((m) => (
          <Link
            key={m.label}
            href={m.href}
            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              m.active 
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            {m.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto absolute bottom-8 left-6 right-6">
        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Visi Keamanan</p>
          <p className="text-sm font-medium text-white">Sistem Aktif & Aman</p>
        </div>
      </div>
    </aside>
  );
}
