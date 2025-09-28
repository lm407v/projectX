import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { Timeframe } from '../data/types';

interface TimeframeToggleProps {
  value: Timeframe;
  onChange: (value: Timeframe) => void;
}

const TimeframeToggle = ({ value, onChange }: TimeframeToggleProps) => {
  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={value}
      onChange={(_, newValue: Timeframe | null) => {
        if (newValue) {
          onChange(newValue);
        }
      }}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 999,
        '& .MuiToggleButton-root': {
          textTransform: 'none',
          fontWeight: 600,
          border: 'none',
          px: 2,
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText'
          }
        }
      }}
    >
      {(['1D', '1W', '1M', 'YTD'] as Timeframe[]).map((option) => (
        <ToggleButton key={option} value={option}>
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TimeframeToggle;
