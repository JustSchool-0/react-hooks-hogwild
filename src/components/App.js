import Nav from "./Nav";
import HogTile from "./HogTile";
import HogDetails from "./HogDetails";
import NewHogForm from "./NewHogForm";
import {useState} from "react";
import hogs from "../porkers_data";

function App() {
    const [selectedHog, setSelectedHog] = useState(null);
    const [isGreasedFilter, setIsGreasedFilter] = useState(false);
    const [sortOption, setSortOption] = useState(null);
    const [hiddenHogs, setHiddenHogs] = useState([]);
    const [hogList, setHogList] = useState(hogs);

    const filteredHogs = hogList.filter(hog => isGreasedFilter ? hog.greased : true);
    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortOption === "weight") {
            return a.weight - b.weight;
        }
        return 0;
    });
    const visibleHogs = sortedHogs.filter(hog => !hiddenHogs.includes(hog.name));

    const handleHogClick = (hog) => {
        setSelectedHog(hog);
    };

    const handleHideHog = (hog) => {
        setHiddenHogs([...hiddenHogs, hog.name]);
    };

    const addHog = (hog) => {
        setHogList([...hogList, hog]);
    };

    return (
        <div className="App">
            <Nav/>
            <div className="button-container">
                <button className="sort-button" onClick={() => setSortOption("name")}>Sort by Name</button>
                <button className="sort-button" onClick={() => setSortOption("weight")}>Sort by Weight</button>
                <button className="filter-button" onClick={() => setIsGreasedFilter(!isGreasedFilter)}>
                    {isGreasedFilter ? "Show All" : "Show Greased Only"}
                </button>
            </div>
            <div className="ui grid container hogs-container">
                {visibleHogs.map((hog) => (
                    <HogTile key={hog.name} hog={hog} onClick={handleHogClick}>
                        <button className="hide-button" onClick={() => handleHideHog(hog)}>Hide</button>
                    </HogTile>
                ))}
            </div>
            {selectedHog && <HogDetails hog={selectedHog}/>}
            <NewHogForm addHog={addHog}/>
        </div>
    );
}

export default App;