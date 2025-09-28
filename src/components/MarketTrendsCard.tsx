import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Box, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMemo } from 'react';
import type { Timeframe } from '../data/types';

interface MarketTrendsCardProps {
  timeframe: Timeframe;
}

const dataByTimeframe: Record<Timeframe, { name: string; value: number }[]> = {
  '1D': [
    { name: '9 AM', value: 248000 },
    { name: '10 AM', value: 249200 },
    { name: '11 AM', value: 247800 },
    { name: '12 PM', value: 248900 },
    { name: '1 PM', value: 250200 },
    { name: '2 PM', value: 251400 },
    { name: '3 PM', value: 251980 }
  ],
  '1W': [
    { name: 'Mon', value: 239000 },
    { name: 'Tue', value: 242500 },
    { name: 'Wed', value: 246300 },
    { name: 'Thu', value: 248800 },
    { name: 'Fri', value: 251920 }
  ],
  '1M': [
    { name: 'Week 1', value: 242000 },
    { name: 'Week 2', value: 245200 },
    { name: 'Week 3', value: 238500 },
    { name: 'Week 4', value: 247450 }
  ],
  YTD: [
    { name: 'Jan', value: 215000 },
    { name: 'Feb', value: 221000 },
    { name: 'Mar', value: 232000 },
    { name: 'Apr', value: 225000 },
    { name: 'May', value: 236500 },
    { name: 'Jun', value: 244100 },
    { name: 'Jul', value: 248400 },
    { name: 'Aug', value: 246500 },
    { name: 'Sep', value: 251980 }
  ]
};

const MarketTrendsCard = ({ timeframe }: MarketTrendsCardProps) => {
  const data = useMemo(() => dataByTimeframe[timeframe], [timeframe]);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>
            <Typography variant="overline" color="text.secondary">
              Market trends
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Net portfolio value
            </Typography>
          </div>
          <Chip
            label="+4.8%"
            color="success"
            icon={<TrendingUpRoundedIcon />}
            sx={{ bgcolor: 'success.light', color: 'success.dark' }}
          />
        </Stack>

        <Box height={260} mt={3}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a73e8" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#1a73e8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  background: '#0f172a',
                  borderRadius: 12,
                  border: 'none',
                  color: '#fff'
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1a73e8"
                fill="url(#colorValue)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        <Divider sx={{ my: 3 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between">
          <Insight label="Volatility" value="Low" helper="Beta 0.82" />
          <Insight label="Best performer" value="GOOGL" helper="+6.4%" />
          <Insight label="Risk level" value="Balanced" helper="Aligned to goal" />
        </Stack>
      </CardContent>
    </Card>
  );
};

const Insight = ({ label, value, helper }: { label: string; value: string; helper: string }) => (
  <Stack spacing={0.5}>
    <Typography variant="overline" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="subtitle1" fontWeight={600}>
      {value}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {helper}
    </Typography>
  </Stack>
);

export default MarketTrendsCard;
