import Link from "next/link";
import { UserAvatar } from "@/entities/user/ui/UserAvatar";
import { Icon } from "@/shared/ui/Icon";

export function AdminSidebar() {
  return (
    <aside className="w-[270px] bg-white rounded-[24px] shadow-md flex flex-col h-[calc(100vh-40px)] sticky top-5 shrink-0 overflow-hidden">
      {/* Brand / Logo */}
      <div className="p-6 flex items-center gap-3">
        <Icon name="rocket" className="text-[32px] text-blue-600 shrink-0" />
        <span className="text-xl font-bold text-gray-500 tracking-wide">Spike Admin</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pb-4">
        {/* HOME SECTION */}
        <div className="mb-6">
          <p className="px-8 text-xs font-bold text-gray-500 mb-4 tracking-wider">HOME</p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <Icon name="layout-dashboard" className="text-[20px] shrink-0" />
                <span className="text-[15px] font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard-2"
                className="flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full bg-[#E5F3FB] text-teal-500 transition-colors mr-5"
              >
                <Icon name="chart-bar" className="text-[20px] shrink-0" />
                <span className="text-[15px] font-medium">Dashboard 2</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* APPS SECTION */}
        <div className="mb-6">
          <p className="px-8 text-xs font-bold text-gray-500 mb-4 tracking-wider">APPS</p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/ecommerce"
                className="flex items-center justify-between pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <div className="flex items-center gap-4">
                  <Icon name="basket" className="text-[20px] shrink-0" />
                  <span className="text-[15px] font-medium">Ecommerce</span>
                </div>
                <Icon name="chevron-right" className="text-[16px] shrink-0" />
              </Link>
            </li>
            <li>
              <Link
                href="/user-profile"
                className="flex items-center justify-between pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <div className="flex items-center gap-4">
                  <Icon name="user-circle" className="text-[20px] shrink-0" />
                  <span className="text-[15px] font-medium">User Profile</span>
                </div>
                <Icon name="chevron-right" className="text-[16px] shrink-0" />
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center justify-between pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <div className="flex items-center gap-4">
                  <Icon name="chart-donut-3" className="text-[20px] shrink-0" />
                  <span className="text-[15px] font-medium">Blog</span>
                </div>
                <Icon name="chevron-right" className="text-[16px] shrink-0" />
              </Link>
            </li>
            <li>
              <Link
                href="/email"
                className="flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <Icon name="mail" className="text-[20px] shrink-0" />
                <span className="text-[15px] font-medium">Email</span>
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <Icon name="calendar" className="text-[20px] shrink-0" />
                <span className="text-[15px] font-medium">Calendar</span>
              </Link>
            </li>
            <li>
              <Link
                href="/kanban"
                className="flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full text-gray-500 hover:bg-surface hover:text-blue-600 transition-colors mr-5"
              >
                <Icon name="layout-kanban" className="text-[20px] shrink-0" />
                <span className="text-[15px] font-medium">Kanban</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <div className="flex items-center justify-between bg-surface p-4 rounded-[20px]">
          <div className="flex items-center gap-3">
            <UserAvatar url="/assets/images/profile/user-1.jpg" name="Mike" size="md" />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-gray-500 leading-tight tracking-wide">Mike</span>
              <span className="text-[13px] text-gray-400 font-medium">Admin</span>
            </div>
          </div>
          <button
            type="button"
            className="text-gray-500 hover:text-blue-600 transition-colors p-1"
            aria-label="Logout"
          >
            <Icon name="logout" className="text-[22px]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
