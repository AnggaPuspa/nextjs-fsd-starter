import { ReactNode } from 'react';
import { Card } from '@/shared/ui/Card';

interface StatMetricCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isUp: boolean;
  };
}

export function StatMetricCard({ title, value, icon, trend }: StatMetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
        {icon && <div className="text-neutral-400">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-3xl font-bold text-neutral-900">{value}</h2>
        {trend && (
          <span className={`text-sm font-medium ${trend.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend.isUp ? '+' : '-'}{trend.value}%
          </span>
        )}
      </div>
    </Card>
  );
}
