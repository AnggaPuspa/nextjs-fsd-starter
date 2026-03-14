import { UserAvatar } from '@/entities/user/ui/UserAvatar';

export function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-neutral-500 cursor-pointer hover:text-neutral-900 transition">Pencarian Global (Ctrl+K)</span>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-neutral-500 hover:text-neutral-900 transition">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-neutral-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-neutral-900">Admin Utama</p>
            <p className="text-xs text-neutral-500">Super Administrator</p>
          </div>
          <UserAvatar name="Admin" size="sm" />
        </div>
      </div>
    </header>
  );
}
