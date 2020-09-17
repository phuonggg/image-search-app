export const IS_ALL = "FAVORITE/IS_ALL";
export const IS_PEOPLE = "FAVORITE/IS_PEOPLE";
export const IS_NATURE = "FAVORITE/IS_NATURE";
export const IS_THING = "FAVORITE/IS_THING";

export const PUSH_ALL = "FAVORITE/PUSH_ALL";
export const PUSH_PEOPLE = "FAVORITE/PUSH_PEOPLE";
export const PUSH_NATURE = "FAVORITE/PUSH_NATURE";
export const PUSH_THING = "FAVORITE/PUSH_THING";

// actions when displaying a certain favorite images list
export const isAll = () => {
  return {
    type: IS_ALL,
  };
};
export const isPeople = () => ({
  type: IS_PEOPLE,
});
export const isNature = () => ({
  type: IS_NATURE,
});
export const isThing = () => ({
  type: IS_THING,
});

// actions when putting an image to a certain favorite images list
export const pushPeople = (params) => {
  return {
    type: PUSH_PEOPLE,
    payload: params,
  };
};

export const pushNature = (params) => {
  return {
    type: PUSH_NATURE,
    payload: params,
  };
};

export const pushThing = (params) => {
  return {
    type: PUSH_THING,
    payload: params,
  };
};
