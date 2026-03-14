'use client';

import { Button } from '@/shared/ui/Button';

export function ExportUserCsv() {
  const handleExport = () => {
    // Logika eksport (misal: fetching blob lalu donwload)
    alert('Exporting CSV...');
  };

  return (
    <Button variant="outline" onClick={handleExport}>
      Ekspor CSV
    </Button>
  );
}
