import ChooseUs from "../components/ChooseUs";
import PopularCourse from "../components/PopularCourse";
import RegisterNow from "../components/RegisterNow";
import Slider from "../components/Slider";


const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<PopularCourse></PopularCourse>
			<RegisterNow></RegisterNow>
			<ChooseUs></ChooseUs>
		</div>
	);
};

export default Home;