import {
    INSERT_DECLARATION
  } from "./types";

import DeclarationServices from "../services/declaration.services";
export const addUser = (name, tempature, contactedAnyone, selectedSymptomsIds) => async (dispatch) => {
  try {
    const res = await DeclarationServices.addUser({ name, tempature, contactedAnyone, selectedSymptomsIds });
    dispatch({
      type: INSERT_DECLARATION,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};