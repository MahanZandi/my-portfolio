import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { BetaAnalyticsDataClient } = await import('@google-analytics/data');
    
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
    });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
      ],
    });

    const chartData = response.rows?.map((row) => ({
      date: row.dimensionValues?.[0]?.value || '',
      visitors: parseInt(row.metricValues?.[0]?.value || '0'),
      pageViews: parseInt(row.metricValues?.[1]?.value || '0'),
    })) || [];

    return NextResponse.json(chartData);
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json([]);
  }
}
