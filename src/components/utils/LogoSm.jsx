import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import brandLogo from '../../assets/Primary-Logo.svg';

const LogoSm = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const logoStyles = {
        width: matchesMD ? 'auto' : '80px',
    };

    return (
        <div>
            <img src={brandLogo} style={logoStyles} alt="" />
        </div>
    );
};

export default LogoSm;
