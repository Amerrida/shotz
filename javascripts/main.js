import { searchBar, buttonElem, showAllBtn} from "./events.js";
import { displayMovie } from "./data/movieData.js";
import { displayLocations } from "./data/locationsData.js";

const initializeApp = ()=>{
    displayMovie();
    displayLocations();
    searchBar();
    buttonElem();
    showAllBtn();

}
initializeApp();