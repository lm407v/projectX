import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import HoldingCard from './components/HoldingCard';
import MarketTrendsCard from './components/MarketTrendsCard';
import PositionsTable from './components/PositionsTable';
import SectorAllocationCard from './components/SectorAllocationCard';
import TimeframeToggle from './components/TimeframeToggle';
import { holdings, positions, sectors } from './data/mockData';
import { Timeframe } from './data/types';

function App() {
  const [timeframe, setTimeframe] = useState<Timeframe>('1D');

  const metrics = useMemo(() => {
    const base = {
      '1D': { value: '+1.8%', trend: 'up' },
      '1W': { value: '+4.2%', trend: 'up' },
      '1M': { value: '-2.3%', trend: 'down' },
      'YTD': { value: '+12.5%', trend: 'up' }
    } as const;

    return {
      overallChange: base[timeframe],
      portfolioValue: '$248,392',
      cashBalance: '$18,550'
    };
  }, [timeframe]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <DashboardHeader metrics={metrics} />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={4}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center">
            <Typography variant="h5" fontWeight={600} flex={1}>
              Portfolio Overview
            </Typography>
            <TimeframeToggle value={timeframe} onChange={setTimeframe} />
          </Stack>

          <Grid container spacing={3}>
            {holdings.map((holding) => (
              <Grid item xs={12} md={4} key={holding.symbol}>
                <HoldingCard holding={holding} timeframe={timeframe} />
              </Grid>
            ))}
            <Grid item xs={12} md={6}>
              <MarketTrendsCard timeframe={timeframe} />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectorAllocationCard data={sectors} />
            </Grid>
            <Grid item xs={12}>
              <PositionsTable rows={positions} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
