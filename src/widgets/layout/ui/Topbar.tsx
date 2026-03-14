import { UserAvatar } from '@/entities/user/ui/UserAvatar';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';

export function Topbar() {
  return (
    <header className="bg-white rounded-[24px] shadow-sm w-full h-[74px] px-8 flex items-center justify-between z-40">
      {/* Left Side: Navigation Items */}
      <div className="flex items-center gap-6 text-gray-500">
        <button type="button" className="hover:text-blue-600 transition-colors">
          <Icon name="menu-2" className="text-[24px]" />
        </button>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium tracking-wide">
          <Link href="#" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            Apps
            <Icon name="chevron-down" className="text-[18px]" />
          </Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Chat</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Calender</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Email</Link>
        </div>
      </div>

      {/* Right Side: Search, Icons, Profile */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <div className="relative hidden xl:flex items-center">
          <Icon name="search" className="absolute left-4 text-[18px] text-gray-500" />
          <input
            type="text"
            placeholder="Try to searching ..."
            className="pl-11 pr-5 py-2.5 border border-gray-200 rounded-full text-[14px] text-gray-500 focus:outline-none focus:border-blue-600 transition-colors w-[260px] bg-transparent placeholder-gray-400"
          />
        </div>

        {/* Icons Group */}
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-blue-600 transition-colors p-2">
            <Icon name="moon" className="text-[22px]" />
          </button>
          
          <button className="relative text-gray-500 hover:text-blue-600 transition-colors p-2">
            <Icon name="message-circle" className="text-[22px]" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </button>
          
          <button className="relative text-gray-500 hover:text-blue-600 transition-colors p-2 mr-2">
            <Icon name="bell-ringing" className="text-[22px]" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-400 rounded-full"></div>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <UserAvatar url="/assets/images/profile/user-1.jpg" name="Mike Nielsen" size="md" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[15px] font-semibold text-gray-500 leading-tight">Mike Nielsen</span>
            <span className="text-[13px] text-gray-400 font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
