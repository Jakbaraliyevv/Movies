import Catagories from "../../components/catagories";
import Navbar from "../../components/navbar";
import PremyeraFilms from "../../components/premyera";
import Showcase from "../../components/showcase";

function Home() {
  return (
    <div>
      <Navbar/>
      <Showcase />
      <Catagories />
      <PremyeraFilms />
    </div>
  );
}

export default Home;
