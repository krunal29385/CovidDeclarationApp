import {
    GET_SYMPTOMS
  } from "./types";

  import SymptomsServices from "../services/symptoms.services";

  export const getSymptoms = () => async (dispatch) => {
    try {
      const res = await SymptomsServices.getSymptoms();
      dispatch({
        type: GET_SYMPTOMS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };