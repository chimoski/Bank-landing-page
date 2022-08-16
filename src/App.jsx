import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import CardDeal from "./components/CardDeal";
import GetStarted from "./components/GetStarted";
import FeedBackCard from "./components/FeedBackCard";
import Button from "./components/Button";

const App = () => (
	<div className='bg-primary overflow-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`${styles.flexStart} bg-primary`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<Cta />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
