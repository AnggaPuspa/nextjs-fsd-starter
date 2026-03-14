import { ReactNode } from 'react';
import { Card, CardBody } from '@/shared/ui';

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
    <Card>
      <CardBody>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl font-bold text-gray-500">{value}</h2>
          {trend && (
            <span className={`text-sm font-medium ${trend.isUp ? 'text-teal-500' : 'text-red-500'}`}>
              {trend.isUp ? '+' : '-'}{trend.value}%
            </span>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
