import * as React from 'react';
import { 
    styled,
    Box,
    Paper,
    Grid,
    Typography,
    Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Grid container spacing={2} style={{ padding: '10px 10%', backgroundColor: '#1B1B1B' }}>
            <Grid item xs={12} style={{ padding: '20px 0px' }} align='right'>
                <Typography style={{ color: '#ffffff', fontSize: '30px' }}>
                    <MenuIcon/>
                </Typography>
            </Grid>
            <Grid container spacing={2} style={{ padding: '20px 0px' }}>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <Typography style={{
                            position: 'absolute',
                            color: '#1B1B1B',
                            fontFamily: "'Abel', sans-serif",
                            fontSize: '96px',
                            top: '108px',
                            webkitTextStroke: '1px #ffffff',
                            letterSpacing: '-0.07em',
                            lineHeight: '118%'
                        }}
                    >
                        the cradle.
                    </Typography>
                    <Typography
                        style={{
                            position: 'absolute',
                            height: '15px',
                            width: '78px',
                            left: '130px',
                            top: '230px',
                            borderRadius: '56px',
                            background: '#EFAB14'
                        }}
                    ></Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}