import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

interface DashboardHeaderProps {
  metrics: {
    overallChange: { value: string; trend: 'up' | 'down' };
    portfolioValue: string;
    cashBalance: string;
  };
}

const DashboardHeader = ({ metrics }: DashboardHeaderProps) => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'common.white', px: { xs: 3, md: 6 }, py: 5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={700} letterSpacing={0.3}>
            Good morning, Alex
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85 }}>
            Here's a glance at your investments today.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddRoundedIcon />}
            sx={{ borderRadius: 99, textTransform: 'none', fontWeight: 600 }}
          >
            New order
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 99,
              color: 'common.white',
              borderColor: 'rgba(255,255,255,0.5)',
              minWidth: 0
            }}
          >
            <NotificationsNoneRoundedIcon />
          </Button>
          <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 44, height: 44 }}>A</Avatar>
        </Stack>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} mt={4}>
        <MetricCard title="Portfolio value" value={metrics.portfolioValue} helper={metrics.overallChange.value} />
        <MetricCard title="Cash balance" value={metrics.cashBalance} helper="Ready to invest" />
        <MetricCard
          title="Daily change"
          value={metrics.overallChange.value}
          helper={metrics.overallChange.trend === 'up' ? 'Above benchmark' : 'Below benchmark'}
        />
      </Stack>
    </Box>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  helper: string;
}

const MetricCard = ({ title, value, helper }: MetricCardProps) => (
  <Card
    sx={{
      flex: 1,
      bgcolor: 'rgba(255,255,255,0.12)',
      color: 'common.white',
      backdropFilter: 'blur(16px)',
      borderRadius: 3
    }}
    elevation={0}
  >
    <CardContent>
      <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)' }}>
        {title}
      </Typography>
      <Typography variant="h5" fontWeight={600} mt={0.5}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }} mt={1}>
        {helper}
      </Typography>
    </CardContent>
  </Card>
);

export default DashboardHeader;
