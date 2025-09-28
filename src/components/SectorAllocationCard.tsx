import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { SectorAllocation } from '../data/types';

const COLORS = ['#1a73e8', '#34a853', '#fbbc04', '#ea4335', '#9334e6'];

interface SectorAllocationCardProps {
  data: SectorAllocation[];
}

const SectorAllocationCard = ({ data }: SectorAllocationCardProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="overline" color="text.secondary">
              Sector allocation
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Diversification
            </Typography>
          </div>
          <Chip
            label="5 sectors"
            icon={<PieChartRoundedIcon />}
            sx={{ bgcolor: 'primary.light', color: 'primary.dark' }}
          />
        </Stack>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={entry.sector} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, _name, { payload }) => [
                `${value}%`,
                (payload as SectorAllocation).sector
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        <Stack spacing={1.5} mt={2}>
          {data.map((entry, index) => (
            <Stack direction="row" spacing={1.5} alignItems="center" key={entry.sector}>
              <span
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: COLORS[index % COLORS.length]
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {entry.sector}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {entry.value}%
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SectorAllocationCard;
