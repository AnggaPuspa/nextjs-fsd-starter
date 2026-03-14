import Image from 'next/image';

interface UserAvatarProps {
  url?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ url, name, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  if (url) {
    return (
      <div className={`relative rounded-full overflow-hidden bg-neutral-100 ${sizeClasses[size]}`}>
        <Image src={url} alt={name} fill className="object-cover" unoptimized />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium ${sizeClasses[size]}`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
