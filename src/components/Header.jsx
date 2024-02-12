import Button from '@mui/material/Button';
import brandLogo from '../assets/Primary-Logo.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ phone }) => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const rootStyles = useMediaQuery(theme.breakpoints.up('md'))
        ? {
              padding: '10px 130px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
          }
        : { padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)' };

    const logoStyles = useMediaQuery(theme.breakpoints.up('md')) ? {} : { width: '80px' };

    const buttonStyles = useMediaQuery(theme.breakpoints.up('md'))
        ? { color: '#3300FF', border: '2px solid #3300FF', borderRadius: '8px', padding: '8px 30px', fontWeight: 600 }
        : { color: '#3300FF', border: '2px solid #3300FF', borderRadius: '8px', padding: '4px 10px', fontWeight: 600, fontSize: 14 };

    const phoneStyle = { fontSize: 14, fontWeight: 400, color: '#3300FF', marginRight: 10 };

    return (
        <div style={rootStyles}>
            <div>
                <img src={brandLogo} style={logoStyles} alt="" />
            </div>

            <div>
                <span style={phoneStyle}>{!matchesMD && phone}</span>
                <Button variant="outlined" style={buttonStyles}>
                    {`Call us${matchesMD ? `: ${phone}` : ''}`}
                </Button>
            </div>
        </div>
    );
};

export default Header;
