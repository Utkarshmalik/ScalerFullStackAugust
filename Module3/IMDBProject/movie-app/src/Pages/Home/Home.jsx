import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";


function Home(props){

    const {addToWatchList, removeFromWatchList, watchList} = props;

    return <div>

        <Banner/>
        <Movies watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />
        
    </div>

}

export default Home;