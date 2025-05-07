import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  // Selectors
  selectCountries,
  selectStates,
  selectCities,
  selectLocationLoading,
  selectLocationError,
  
  // Actions and thunks
  fetchCountries,
  fetchStates,
  fetchCities,
  createCountry,
  updateCountry,
  deleteCountry,
  createState,
  updateState,
  deleteState,
  createCity,
  updateCity,
  deleteCity,
  clearLocationError
} from '../store/slices/locationSlice';

export const useLocation = () => {
  const dispatch = useDispatch();
  
  // Get location data from Redux store
  const countries = useSelector(selectCountries);
  const states = useSelector(selectStates);
  const cities = useSelector(selectCities);
  const loading = useSelector(selectLocationLoading);
  const error = useSelector(selectLocationError);

  // Country operations
  const getCountries = useCallback(() => {
    return dispatch(fetchCountries());
  }, [dispatch]);

  const addCountry = useCallback((countryData) => {
    return dispatch(createCountry(countryData));
  }, [dispatch]);

  const editCountry = useCallback((id, countryData) => {
    return dispatch(updateCountry({ id, ...countryData }));
  }, [dispatch]);

  const removeCountry = useCallback((id) => {
    return dispatch(deleteCountry(id));
  }, [dispatch]);

  // State operations
  const getStates = useCallback((countryId = null) => {
    return dispatch(fetchStates(countryId));
  }, [dispatch]);

  const addState = useCallback((stateData) => {
    return dispatch(createState(stateData));
  }, [dispatch]);

  const editState = useCallback((id, stateData) => {
    return dispatch(updateState({ id, ...stateData }));
  }, [dispatch]);

  const removeState = useCallback((id) => {
    return dispatch(deleteState(id));
  }, [dispatch]);

  // City operations
  const getCities = useCallback((stateId = null) => {
    return dispatch(fetchCities(stateId));
  }, [dispatch]);

  const addCity = useCallback((cityData) => {
    return dispatch(createCity(cityData));
  }, [dispatch]);

  const editCity = useCallback((id, cityData) => {
    return dispatch(updateCity({ id, ...cityData }));
  }, [dispatch]);

  const removeCity = useCallback((id) => {
    return dispatch(deleteCity(id));
  }, [dispatch]);

  // Clear location error
  const clearError = useCallback(() => {
    dispatch(clearLocationError());
  }, [dispatch]);

  return {
    // Data
    countries,
    states,
    cities,
    loading,
    error,
    
    // Country methods
    fetchCountries: getCountries,
    addCountry,
    updateCountry: editCountry,
    deleteCountry: removeCountry,
    
    // State methods
    fetchStates: getStates,
    addState,
    updateState: editState,
    deleteState: removeState,
    
    // City methods
    fetchCities: getCities,
    addCity,
    updateCity: editCity,
    deleteCity: removeCity,
    
    // Error handling
    clearError
  };
};