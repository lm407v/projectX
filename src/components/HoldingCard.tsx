import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import { useMemo } from 'react';
import type { Holding, Timeframe } from '../data/types';

const Sparkline = styled('div')(({ theme }) => ({
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'end',
  gap: theme.spacing(0.5),
  height: 56
}));

const SparkBar = styled('span')<{ value: number; color: string }>(({ value, color }) => ({
  display: 'block',
  width: 6,
  borderRadius: 999,
  height: `${value}%`,
  background: color
}));

interface HoldingCardProps {
  holding: Holding;
  timeframe: Timeframe;
}

const HoldingCard = ({ holding, timeframe }: HoldingCardProps) => {
  const isPositive = holding.change > 0;

  const progressValue = useMemo(() => {
    switch (timeframe) {
      case '1D':
        return 65;
      case '1W':
        return 72;
      case '1M':
        return 54;
      case 'YTD':
        return 80;
      default:
        return 60;
    }
  }, [timeframe]);

  const maxSparkValue = useMemo(() => Math.max(...holding.sparkline), [holding.sparkline]);

  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main' }}>
              {holding.symbol.slice(0, 1)}
            </Avatar>
            <div>
              <Typography variant="subtitle2" color="text.secondary">
                {holding.symbol}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {holding.name}
              </Typography>
            </div>
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {timeframe} performance
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3}>
          <Stack>
            <Typography variant="h5" fontWeight={600}>
              ${holding.price.toFixed(2)}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              {isPositive ? (
                <TrendingUpRoundedIcon color="success" fontSize="small" />
              ) : (
                <TrendingDownRoundedIcon color="error" fontSize="small" />
              )}
              <Typography variant="body2" color={isPositive ? 'success.main' : 'error.main'}>
                {holding.change.toFixed(2)} ({holding.changePercent.toFixed(2)}%)
              </Typography>
            </Stack>
          </Stack>
          <Box width={140}>
            <Typography variant="caption" color="text.secondary">
              Allocation
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{ mt: 1, height: 8, borderRadius: 99 }}
            />
          </Box>
        </Stack>

        <Sparkline>
          {holding.sparkline.map((value, index) => (
            <SparkBar
              key={index}
              value={Math.max(20, (value / maxSparkValue) * 100)}
              color={isPositive ? '#1a73e8' : '#ea4335'}
            />
          ))}
        </Sparkline>
      </CardContent>
    </Card>
  );
};

export default HoldingCard;
