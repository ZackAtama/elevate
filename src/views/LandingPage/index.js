import * as React from 'react'
import { 
    Grid,
    Typography,
    Button,
    IconButton
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';

import sally from '../../assets/Saly-11.png'
import img1 from '../../assets/Rectangle 6.png'
import img2 from '../../assets/Rectangle 7.png'
import img3 from '../../assets/Rectangle 8.png'
import arrowNext from '../../assets/arrow-next.png'
import mediumLogo from '../../assets/medium-logo.png'
import instagramLogo from '../../assets/instagram.png'

const LandingPage = () => {
    return (
        <Grid container spacing={2} style={{ padding: '10px 10%', backgroundColor: '#1B1B1B' }}>
            <Grid item xs={12} style={{ padding: '20px 0px' }} align='right'>
                <IconButton
                    id="sliderBtn"
                    size="large"
                    edge="start"
                    aria-label="menu"

                >
                    <MenuRoundedIcon style={{ fontSize: '25px' }}/>
                </IconButton>
            </Grid>
            <Grid container spacing={2} style={{ padding: '20px 0px' }}>
                <Grid item xs={12} md={12} lg={5} xl={5}>
                    <Typography style={{
                            color: '#1B1B1B',
                            fontFamily: "'Abel', sans-serif",
                            fontSize: '96px',
                            top: '108px',
                            webkitTextStroke: '1px #ffffff',
                            letterSpacing: '-0.07em',
                            textAlign: 'left',
                            lineHeight: '118%'
                        }}
                    >
                        the cradle.
                    </Typography>
                    <Typography
                        style={{
                            width: '78px',
                            height: '15px',
                            top: '230px',
                            borderRadius: '56px',
                            background: '#EFAB14',
                            textAlign: 'left'
                        }}
                    ></Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={7} xl={7}>
                    <Grid container>
                        <Grid item xs={8} md={6} lg={7} xl={5} style={{ padding: '10px 14% 20px 0px' }}>
                            <Typography style={{
                                    color: 'white',
                                    fontFamily: "'Abel', sans-serif",
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: '72px',
                                    top: '108px',
                                    letterSpacing: '-0.07em',
                                    textTransform: 'lowercase',
                                    textAlign: 'left',
                                    lineHeight: '90%'
                                }}
                            >
                                insights by the elevate <span style={{ color: '#EFAB14' }}>family</span> & <span style={{ color: '#EFAB14' }}>Community</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={6} lg={5} xl={7} align='right'>
                            <img src={sally} style={{ width: '100%' }} alt=''/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ paddingTop: '50px' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} style={{ padding: '10px 40px', textAlign: 'right' }}>
                    <Button id='sliderBtn' style={{ padding: '0px 5px', textTransform: 'capitalize', fontFamily: 'Abel', fontStyle: 'normal', fontSize: '18px' }}>
                        Slide for more <img src={arrowNext} style={{ width: '20px', marginLeft: '50px' }} alt=''/>
                    </Button>
                </Grid>
                <Grid className="sliderCard" item xs={12} md={4} lg={4} xl={4} style={{ padding: '20px 40px' }}>
                    <img src={img1} style={{ width: '100%' }} alt=''/>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            textAlign: 'left',
                            marginTop: '20px'
                        }}
                    >
                        <img src={mediumLogo} style={{ height: '20px', marginBottom: '-7px', padding: '0px 4px' }} alt=''/> elevateug
                    </Typography>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '18px',
                            textAlign: 'left',
                            marginTop: '10px'
                        }}
                    >
                        Drones in Marketing 101
                    </Typography>
                </Grid>
                <Grid className="sliderCard" item xs={12} md={4} lg={4} xl={4} style={{ padding: '20px 40px' }}>
                    <img src={img2} style={{ width: '100%' }} alt=''/>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            textAlign: 'left',
                            marginTop: '20px'
                        }}
                    >
                        <img src={instagramLogo} style={{ height: '20px', marginBottom: '-7px', padding: '0px 4px' }} alt=''/> elevateug
                    </Typography>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '18px',
                            textAlign: 'left',
                            marginTop: '10px'
                        }}
                    >
                        Artcov Juice Concept
                    </Typography>
                </Grid>
                <Grid className="sliderCard" item xs={12} md={4} lg={4} xl={4} style={{ padding: '20px 40px' }}>
                    <img src={img3} style={{ width: '100%' }} alt=''/>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            textAlign: 'left',
                            marginTop: '20px'
                        }}
                    >
                        <img src={mediumLogo} style={{ height: '20px', marginBottom: '-7px', padding: '0px 4px' }} alt=''/> elevateug
                    </Typography>
                    <Typography style={{
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '18px',
                            textAlign: 'left',
                            marginTop: '10px'
                        }}
                    >
                        Let your creativity be you
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12} style={{ padding: '10px 40px' }}>
                <Typography style={{ padding: '0px 5px', color: 'white', textTransform: 'lowercase', fontFamily: 'Abel', fontStyle: 'normal', fontSize: '18px', textAlign: 'center' }}>
                    scroll to discover
                </Typography>
                <IconButton
                    id="sliderBtn"
                    size="large"
                    edge="start"
                    aria-label="menu"

                >
                    <ArrowCircleDownRoundedIcon style={{ fontSize: '30px' }}/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default LandingPage
