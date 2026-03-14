import { StatMetrics } from '../model/types';

export async function getDashboardStats(): Promise<StatMetrics> {
  // Simulasi fetch API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 14205,
        activeUsers: 8432,
        totalRevenue: 284500000,
        conversionRate: 4.2,
      });
    }, 800);
  });
} 
