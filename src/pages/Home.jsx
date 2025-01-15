import ChooseUs from "../components/ChooseUs";
import Events from "../components/Events";
import GoogleMapComponent from "../components/GoogleMapComponent ";
import Notice from "../components/Notice";
import PeopleSay from "../components/PeopleSay";
import PopularCourse from "../components/PopularCourse";
import RegisterNow from "../components/RegisterNow";
import Slider from "../components/Slider";


const Home = () => {
	return (
		<div className="">
			<Slider></Slider>
			<PopularCourse></PopularCourse>
			<RegisterNow></RegisterNow>
			<ChooseUs></ChooseUs>
			<Events></Events>
			<Notice></Notice>
			<PeopleSay></PeopleSay>
			<GoogleMapComponent></GoogleMapComponent>
		</div>
	);
};

export default Home;