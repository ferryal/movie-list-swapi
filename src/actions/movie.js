import axios from 'axios';
import config from '../config';
import { MOVIELIST, PEOPLEDETAIL, PEOPLE } from './ActionTypes';


function loading() {
  return {
    type: MOVIELIST.LOADING
  };
}

function fetchSuccess(data) {
  return {
    type: MOVIELIST.FETCH_SUCCESS,
    payload: { data }
  };
}

function fetchFailed() {
  return {
    type: MOVIELIST.FETCH_FAILED
  };
}

function fetchSuccesPeople(data) {
  return {
    type: PEOPLE.FETCH_SUCCESS,
    payload: { data }
  };
}

function fetchFailedPeople() {
  return {
    type: PEOPLE.FETCH_FAILED
  };
}

function fetchSuccessDetail(data) {
  return {
    type: PEOPLEDETAIL.FETCH_DETAIL_SUCCESS,
    payload: {data}
  };
}

function fetchFailedDetail() {
  return {
    type: PEOPLEDETAIL.FETCH_DETAIL_FAILED
  }
}

export function fetchMovies() {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/api/films`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}


export function fetchCharacters(page) {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/api/people/?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccesPeople(response));
      } else {
        dispatch(fetchFailedPeople());
      }
    }).catch(() => {
      dispatch(fetchFailedPeople());
    });
  };
}


export function fetchPeopleDetail(id) {
  return (dispatch) => {
    axios.get(`${config.apiUrl}/api/people/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessDetail(response));
      } else {
        dispatch(fetchFailedDetail());
      }
    }).catch(() => {
      dispatch(fetchFailedDetail());
    })
  }
}