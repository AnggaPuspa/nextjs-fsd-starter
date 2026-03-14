import { getDashboardStats } from '@/entities/stat/api/getDashboardStats';
import { StatMetricCard } from '@/entities/stat/ui/StatMetricCard';
import { DateRangePicker } from '@/features/dashboard-filters/ui/DateRangePicker';
import { formatCurrency } from '@/shared/lib/formatters';

export async function DashboardStatsWidget() {
  const stats = await getDashboardStats();

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Ikhtisar Bisnis</h1>
          <p className="text-sm text-neutral-500 mt-1">Pantau performa platform secara real-time.</p>
        </div>
        <DateRangePicker />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatMetricCard
          title="Total Pengguna"
          value={stats.totalUsers.toLocaleString('id-ID')}
          trend={{ value: 12.5, isUp: true }}
        />
        <StatMetricCard
          title="Pengguna Aktif"
          value={stats.activeUsers.toLocaleString('id-ID')}
          trend={{ value: 2.1, isUp: false }}
        />
        <StatMetricCard
          title="Total Pendapatan"
          value={formatCurrency(stats.totalRevenue)}
          trend={{ value: 8.4, isUp: true }}
        />
        <StatMetricCard
          title="Konversi"
          value={`${stats.conversionRate}%`}
          trend={{ value: 0.8, isUp: true }}
        />
      </div>
    </section>
  );
}
