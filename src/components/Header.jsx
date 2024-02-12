import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import brandLogo from '../assets/Primary-Logo.svg';

const Header = ({ phone }) => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const rootStyles = {
        padding: matchesMD ? '10px 130px' : '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
    };

    const logoStyles = {
        width: matchesMD ? 'auto' : '80px',
    };

    const buttonStyles = {
        color: '#3300FF',
        border: '2px solid #3300FF',
        borderRadius: '8px',
        padding: matchesMD ? '8px 30px' : '4px 10px',
        fontWeight: 600,
        fontSize: matchesMD ? 'inherit' : '14px',
    };

    return (
        <div style={rootStyles}>
            <div>
                <img src={brandLogo} style={logoStyles} alt="" />
            </div>
            <div>
                {matchesMD ? (
                    <div>
                        <Button variant="outlined" style={buttonStyles}>
                            Call us: {phone}
                        </Button>
                    </div>
                ) : (
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: 400, color: '#3300FF', marginRight: '10px' }}>{phone}</span>
                        <Button variant="outlined" style={buttonStyles}>
                            Call us
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
