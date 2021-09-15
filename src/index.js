import state from "./redux/state";
import { rerenderEntireTree } from "./render";
import reportWebVitals from "./reportWebVitals";

rerenderEntireTree(state);

reportWebVitals();
