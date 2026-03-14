'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/Button';

interface BanUserButtonProps {
  userId: string;
  isBanned?: boolean;
}

export function BanUserButton({ userId, isBanned = false }: BanUserButtonProps) {
  const [loading, setLoading] = useState(false);
  const [banned, setBanned] = useState(isBanned);

  const handleToggleBan = async () => {
    setLoading(true);
    // Simulasi mutasi API (Server Action / Route Handler)
    await new Promise((resolve) => setTimeout(resolve, 800));
    setBanned(!banned);
    setLoading(false);
  };

  return (
    <Button 
      variant={banned ? 'outline' : 'danger'} 
      onClick={handleToggleBan}
      disabled={loading}
    >
      {loading ? 'Processing...' : (banned ? 'Unban User' : 'Ban User')}
    </Button>
  );
}
