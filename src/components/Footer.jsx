import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import LogoSm from './utils/LogoSm';
import lenderLogo from '../assets/footer/lender-footer-logo.svg';
import BBBLogo from '../assets/footer/BBB-footer-logo.svg';

const Footer = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const currentYear = new Date().getFullYear();

    const rootStyles = {
        backgroundColor: '#EFF2F8',
        padding: matchesMD ? '80px 215px' : '10px 30px',
    };
    const footerTextStyle = {
        color: '#5C708A',
    };

    const footerTopTextStyle = {
        color: '#1D252F',
        fontWeight: 300,
    };
    const logoStyles = {
        paddingRight: 20,
    };
    const loansTextStyle = {
        fontWeight: 500,
        fontSize: 16,
    };
    const breakLine = matchesMD && <br />;

    return (
        <div style={rootStyles}>
            <Grid container columnSpacing={{ xs: 0, md: 1 }} alignItems="center">
                <Grid item xs={12} md={3}>
                    <LogoSm />
                    <p style={loansTextStyle}>Achieve Loans</p>
                    <p style={footerTopTextStyle}>(844) 606-9533</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <p style={footerTopTextStyle}>NMLS #1810501</p>
                    <p style={footerTopTextStyle}>Policies</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <p style={footerTopTextStyle}>Privacy</p>
                    <p style={footerTopTextStyle}>Licenses</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div>
                        <img src={lenderLogo} style={logoStyles} alt="" />
                        <img src={BBBLogo} alt="" />
                    </div>
                </Grid>
            </Grid>

            {/* footer text */}
            <br />
            <p>
                <small style={footerTextStyle}>
                    Offer shown includes a 0.50% rate reduction for automatic payments (which are not required for loan approval). 10 and 15 year terms are available. Both terms
                    have a 5 year draw period. Payments are fully amortized during each period and determined on each month&rsquo;s outstanding principal balance. Closing fees
                    range from $750 to $6,685, depending on line amount and state law requirements and typically include origination (2.5% of line amount) and underwriting ($685)
                    fees if allowed by law. Property must be owner-occupied and the combined loan to value may not exceed 80%, including the new loan request. Property insurance is
                    required and flood insurance may be required if the subject property is located in a flood zone. You must pledge your home as collateral and could lose your
                    home if you fail to repay. Offers are only valid in states where Achieve Loans is licensed.Loans are not available to residents of all states and available loan
                    terms and fees may vary by state where offered. Contact Achieve Loans for further details.
                </small>
            </p>

            <p>
                <small style={footerTextStyle}>
                    Achieve.com, a d/b/a of Bills.com, LLC (NMLS ID #138464) operates as a marketing lead generator for affiliates and non-affiliates, and as a broker for loans and
                    debt resolution services offered by its affiliates. We also offer certain mobile applications that allow consumers to view and analyze their finances. We may
                    take applications for our affiliates, but we do not make credit decisions, originate loans, process consumer loans or bill payments, or provide any other
                    financial services. We do not collect any fees or other compensation from consumers.
                </small>
            </p>

            <p>
                <small style={footerTextStyle}>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Contact Us</a> | © Copyright {currentYear}
                </small>
            </p>
            {breakLine}
            <br />
            <p style={footerTopTextStyle}>© {currentYear} Achieve Loans. All rights reserved.</p>
        </div>
    );
};

export default Footer;
