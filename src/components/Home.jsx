import Footer from './Footer';
import Header from './header';

const Home = () => {
    const phone = '833-418-3096';
    return (
        <div>
            <Header phone={phone} />
            <Footer />
        </div>
    );
};

export default Home;
