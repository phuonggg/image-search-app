import {
  IS_ALL,
  IS_PEOPLE,
  IS_NATURE,
  IS_THING,
  PUSH_PEOPLE,
  PUSH_NATURE,
  PUSH_THING,
} from "../actions";

// intitial display favorite images lists will all favorite images in list All, other lists are empty
const initialState = {
  isLoaded: false,
  all: JSON.parse(localStorage.getItem("result")),
  people: [],
  nature: [],
  thing: [],
  display: JSON.parse(localStorage.getItem("result")),
};

// check if object favoriteCategory exists in local storage
const checkFC = () => {
  if (JSON.parse(localStorage.getItem("favoriteCategory")) === null) {
    localStorage.setItem("favoriteCategory", JSON.stringify(initialState));
  }
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case IS_ALL:
      checkFC();
      const currentCategoryIA = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      //declare new state for case IS_ALL
      const newState = {
        ...currentCategoryIA,
        isLoaded: true,
        all: currentCategoryIA.all,
        display: currentCategoryIA.all,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newState));
      return newState;

    case IS_PEOPLE:
      checkFC();
      const currentCategoryIP = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      //declare new state for case IS_PEOPLE
      const newStateIP = {
        ...currentCategoryIP,
        isLoaded: true,
        people: currentCategoryIP.people,
        display: currentCategoryIP.people,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStateIP));
      return newStateIP;

    case IS_NATURE:
      checkFC();
      const currentCategoryIN = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      // declare new state for case IS_NATURE
      const newStateIN = {
        ...currentCategoryIN,
        isLoaded: true,
        nature: currentCategoryIN.nature,
        display: currentCategoryIN.nature,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStateIN));
      return newStateIN;

    case IS_THING:
      checkFC();
      const currentCategoryIT = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      // declare new state for case IS_THING
      const newStateIT = {
        ...currentCategoryIT,
        isLoaded: true,
        thing: currentCategoryIT.thing,
        display: currentCategoryIT.thing,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStateIT));
      return newStateIT;

    case PUSH_PEOPLE:
      checkFC();
      const currentCategoryPP = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      const itemPP = action.payload;
      const existItemPP = currentCategoryPP.people.filter(
        (item) => item.id === itemPP.id
      );
      if (existItemPP.length === 0) {
        currentCategoryPP.people.push(itemPP);
      }
      const newStatePP = {
        ...currentCategoryPP,
        isLoaded: true,
        people: currentCategoryPP.people,
        display: currentCategoryPP.people,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStatePP));
      return newStatePP;

    case PUSH_NATURE:
      checkFC();
      const currentCategoryPN = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      const itemPN = action.payload;
      const existItemPN = currentCategoryPN.nature.filter(
        (item) => item.id === itemPN.id
      );
      if (existItemPN.length === 0) {
        currentCategoryPN.nature.push(itemPN);
      }
      const newStatePN = {
        ...currentCategoryPN,
        isLoaded: true,
        nature: currentCategoryPN.nature,
        display: currentCategoryPN.nature,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStatePN));
      return newStatePN;

    case PUSH_THING:
      checkFC();
      const currentCategoryPT = JSON.parse(
        localStorage.getItem("favoriteCategory")
      );
      const itemPT = action.payload;
      const existItemPT = currentCategoryPT.thing.filter(
        (item) => item.id === itemPT.id
      );
      if (existItemPT.length === 0) {
        currentCategoryPT.thing.push(itemPT);
      }
      const newStatePT = {
        ...currentCategoryPT,
        isLoaded: true,
        thing: currentCategoryPT.thing,
        display: currentCategoryPT.thing,
      };
      localStorage.setItem("favoriteCategory", JSON.stringify(newStatePT));
      return newStatePT;

    default:
      return state;
  }
};

export default favorite;
