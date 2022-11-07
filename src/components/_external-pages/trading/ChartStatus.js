import { upperCase } from 'change-case-all';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@material-ui/core';

ChartStatus.propTypes = {
  chartViewMode: PropTypes.number,
  lastPrice: PropTypes.object,
  other: PropTypes.object
};

function ChartStatus({ chartViewMode, lastPrice, other }) {
  const { currency, close, high, low } = lastPrice;
  return (
    <Box {...other}>
      <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }} justifyContent="space-between">
        <Stack direction="row" spacing={0} alignItems="center">
          <Typography variant="h4">{currency ? upperCase(currency) : 'BTC'}</Typography>
          <img src="/static/icons/trading_ui/two_down_arrow.svg" alt="two arrow" style={{ width: 25 }} />
          <Typography variant="h6" sx={{ color: '#FD02BD' }}>
            {close}
          </Typography>
          <img
            src="/static/icons/trading_ui/trading_arrow_button.png"
            alt="two arrow"
            style={{ width: 40, height: 'auto', marginLeft: 5, marginRight: 10 }}
          />
          <Typography variant="caption">
            24h Volume: 234M &nbsp;&nbsp;&nbsp; H: <span style={{ color: '#FD02BD' }}>{high}</span> &nbsp;&nbsp;L:&nbsp;
            <span style={{ color: '#5600C3' }}>{low}</span>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <img src="/static/icons/trading_ui/five_min_button.png" alt="two arrow" style={{ height: 40 }} />
          <img src="/static/icons/trading_ui/setting_button.png" alt="two arrow" style={{ height: 40 }} />
        </Stack>
      </Stack>

      {chartViewMode === 1 && (
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: '#232133', p: 1, pr: 3, borderRadius: '5px' }}
        >
          <Stack direction="row" spacing={2}>
            <img src="/static/icons/trading_ui/pen.png" alt="two arrow" style={{ height: 28 }} />
            <img src="/static/icons/trading_ui/plus_icon.png" alt="two arrow" style={{ height: 26 }} />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Views</Typography>
            <Typography variant="body2">Studies</Typography>
            <img src="/static/icons/trading_ui/setting_icon.png" alt="setting_icon" style={{ height: 18 }} />
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

export default ChartStatus;