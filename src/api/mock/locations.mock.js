// Mock data for location management (countries, states, cities)


// Mock countries data
let countries = [
  { id: '1', name: 'India', code: 'IN', statesCount: 5 },
  { id: '2', name: 'United States', code: 'US', statesCount: 4 },
  { id: '3', name: 'United Kingdom', code: 'UK', statesCount: 3 },
  { id: '4', name: 'Canada', code: 'CA', statesCount: 3 },
  { id: '5', name: 'Australia', code: 'AU', statesCount: 2 },
];

// Mock states data
let states = [
  // India
  { id: '1', name: 'Maharashtra', countryId: '1', countryName: 'India', citiesCount: 3 },
  { id: '2', name: 'Karnataka', countryId: '1', countryName: 'India', citiesCount: 2 },
  { id: '3', name: 'Tamil Nadu', countryId: '1', countryName: 'India', citiesCount: 2 },
  { id: '4', name: 'Gujarat', countryId: '1', countryName: 'India', citiesCount: 1 },
  { id: '5', name: 'Delhi', countryId: '1', countryName: 'India', citiesCount: 1 },
  
  // United States
  { id: '6', name: 'California', countryId: '2', countryName: 'United States', citiesCount: 3 },
  { id: '7', name: 'New York', countryId: '2', countryName: 'United States', citiesCount: 2 },
  { id: '8', name: 'Texas', countryId: '2', countryName: 'United States', citiesCount: 2 },
  { id: '9', name: 'Florida', countryId: '2', countryName: 'United States', citiesCount: 1 },
  
  // United Kingdom
  { id: '10', name: 'England', countryId: '3', countryName: 'United Kingdom', citiesCount: 2 },
  { id: '11', name: 'Scotland', countryId: '3', countryName: 'United Kingdom', citiesCount: 1 },
  { id: '12', name: 'Wales', countryId: '3', countryName: 'United Kingdom', citiesCount: 1 },
  
  // Canada
  { id: '13', name: 'Ontario', countryId: '4', countryName: 'Canada', citiesCount: 2 },
  { id: '14', name: 'British Columbia', countryId: '4', countryName: 'Canada', citiesCount: 1 },
  { id: '15', name: 'Quebec', countryId: '4', countryName: 'Canada', citiesCount: 1 },
  
  // Australia
  { id: '16', name: 'New South Wales', countryId: '5', countryName: 'Australia', citiesCount: 2 },
  { id: '17', name: 'Victoria', countryId: '5', countryName: 'Australia', citiesCount: 1 },
];

// Mock cities data
let cities = [
  // Maharashtra, India
  { id: '1', name: 'Mumbai', stateId: '1', stateName: 'Maharashtra', countryId: '1', countryName: 'India' },
  { id: '2', name: 'Pune', stateId: '1', stateName: 'Maharashtra', countryId: '1', countryName: 'India' },
  { id: '3', name: 'Nagpur', stateId: '1', stateName: 'Maharashtra', countryId: '1', countryName: 'India' },
  
  // Karnataka, India
  { id: '4', name: 'Bangalore', stateId: '2', stateName: 'Karnataka', countryId: '1', countryName: 'India' },
  { id: '5', name: 'Mysore', stateId: '2', stateName: 'Karnataka', countryId: '1', countryName: 'India' },
  
  // Tamil Nadu, India
  { id: '6', name: 'Chennai', stateId: '3', stateName: 'Tamil Nadu', countryId: '1', countryName: 'India' },
  { id: '7', name: 'Coimbatore', stateId: '3', stateName: 'Tamil Nadu', countryId: '1', countryName: 'India' },
  
  // Gujarat, India
  { id: '8', name: 'Ahmedabad', stateId: '4', stateName: 'Gujarat', countryId: '1', countryName: 'India' },
  
  // Delhi, India
  { id: '9', name: 'New Delhi', stateId: '5', stateName: 'Delhi', countryId: '1', countryName: 'India' },
  
  // California, USA
  { id: '10', name: 'Los Angeles', stateId: '6', stateName: 'California', countryId: '2', countryName: 'United States' },
  { id: '11', name: 'San Francisco', stateId: '6', stateName: 'California', countryId: '2', countryName: 'United States' },
  { id: '12', name: 'San Diego', stateId: '6', stateName: 'California', countryId: '2', countryName: 'United States' },
  
  // New York, USA
  { id: '13', name: 'New York City', stateId: '7', stateName: 'New York', countryId: '2', countryName: 'United States' },
  { id: '14', name: 'Buffalo', stateId: '7', stateName: 'New York', countryId: '2', countryName: 'United States' },
  
  // Texas, USA
  { id: '15', name: 'Houston', stateId: '8', stateName: 'Texas', countryId: '2', countryName: 'United States' },
  { id: '16', name: 'Dallas', stateId: '8', stateName: 'Texas', countryId: '2', countryName: 'United States' },
  
  // Florida, USA
  { id: '17', name: 'Miami', stateId: '9', stateName: 'Florida', countryId: '2', countryName: 'United States' },
  
  // England, UK
  { id: '18', name: 'London', stateId: '10', stateName: 'England', countryId: '3', countryName: 'United Kingdom' },
  { id: '19', name: 'Manchester', stateId: '10', stateName: 'England', countryId: '3', countryName: 'United Kingdom' },
  
  // Scotland, UK
  { id: '20', name: 'Edinburgh', stateId: '11', stateName: 'Scotland', countryId: '3', countryName: 'United Kingdom' },
  
  // Wales, UK
  { id: '21', name: 'Cardiff', stateId: '12', stateName: 'Wales', countryId: '3', countryName: 'United Kingdom' },
  
  // Ontario, Canada
  { id: '22', name: 'Toronto', stateId: '13', stateName: 'Ontario', countryId: '4', countryName: 'Canada' },
  { id: '23', name: 'Ottawa', stateId: '13', stateName: 'Ontario', countryId: '4', countryName: 'Canada' },
  
  // British Columbia, Canada
  { id: '24', name: 'Vancouver', stateId: '14', stateName: 'British Columbia', countryId: '4', countryName: 'Canada' },
  
  // Quebec, Canada
  { id: '25', name: 'Montreal', stateId: '15', stateName: 'Quebec', countryId: '4', countryName: 'Canada' },
  
  // New South Wales, Australia
  { id: '26', name: 'Sydney', stateId: '16', stateName: 'New South Wales', countryId: '5', countryName: 'Australia' },
  { id: '27', name: 'Newcastle', stateId: '16', stateName: 'New South Wales', countryId: '5', countryName: 'Australia' },
  
  // Victoria, Australia
  { id: '28', name: 'Melbourne', stateId: '17', stateName: 'Victoria', countryId: '5', countryName: 'Australia' },
];

// Mock API functions with delay to simulate network requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all countries
export const getCountries = async () => {
  await delay(500);
  return [...countries];
};

// Get states (optionally filtered by countryId)
export const getStates = async (countryId) => {
  await delay(500);
  if (countryId) {
    return states.filter(state => state.countryId === countryId);
  }
  return [...states];
};

// Get cities (optionally filtered by stateId)
export const getCities = async (stateId) => {
  await delay(500);
  if (stateId) {
    return cities.filter(city => city.stateId === stateId);
  }
  return [...cities];
};

// Mock API handlers for CRUD operations
// These functions simulate API calls and modify the local mock data

// Country CRUD operations
export const createCountryHandler = async (countryData) => {
  await delay(500);
  const newCountry = {
    id: uuidv4(),
    ...countryData,
    statesCount: 0
  };
  countries.push(newCountry);
  return newCountry;
};

export const updateCountryHandler = async (id, countryData) => {
  await delay(500);
  const index = countries.findIndex(country => country.id === id);
  if (index === -1) throw new Error('Country not found');
  
  const updatedCountry = {
    ...countries[index],
    ...countryData
  };
  countries[index] = updatedCountry;
  
  // Update country name in related states and cities
  states.forEach(state => {
    if (state.countryId === id) {
      state.countryName = updatedCountry.name;
    }
  });
  
  cities.forEach(city => {
    if (city.countryId === id) {
      city.countryName = updatedCountry.name;
    }
  });
  
  return updatedCountry;
};

export const deleteCountryHandler = async (id) => {
  await delay(500);
  const index = countries.findIndex(country => country.id === id);
  if (index === -1) throw new Error('Country not found');
  
  // Remove the country
  countries.splice(index, 1);
  
  // Remove related states
  const relatedStates = states.filter(state => state.countryId === id);
  relatedStates.forEach(state => {
    // Remove related cities
    cities = cities.filter(city => city.stateId !== state.id);
  });
  
  // Remove related states
  states = states.filter(state => state.countryId !== id);
  
  return id;
};

// State CRUD operations
export const createStateHandler = async (stateData) => {
  await delay(500);
  const country = countries.find(c => c.id === stateData.countryId);
  if (!country) throw new Error('Country not found');
  
  const newState = {
    id: uuidv4(),
    ...stateData,
    countryName: country.name,
    citiesCount: 0
  };
  
  states.push(newState);
  
  // Update country's statesCount
  country.statesCount = (country.statesCount || 0) + 1;
  
  return newState;
};

export const updateStateHandler = async (id, stateData) => {
  await delay(500);
  const index = states.findIndex(state => state.id === id);
  if (index === -1) throw new Error('State not found');
  
  // Get updated country if it changed
  let countryName = states[index].countryName;
  if (stateData.countryId && stateData.countryId !== states[index].countryId) {
    const country = countries.find(c => c.id === stateData.countryId);
    if (!country) throw new Error('Country not found');
    countryName = country.name;
    
    // Update old country's statesCount
    const oldCountry = countries.find(c => c.id === states[index].countryId);
    if (oldCountry) {
      oldCountry.statesCount = Math.max(0, (oldCountry.statesCount || 0) - 1);
    }
    
    // Update new country's statesCount
    country.statesCount = (country.statesCount || 0) + 1;
  }
  
  const updatedState = {
    ...states[index],
    ...stateData,
    countryName
  };
  
  states[index] = updatedState;
  
  // Update state name in related cities
  cities.forEach(city => {
    if (city.stateId === id) {
      city.stateName = updatedState.name;
      city.countryId = updatedState.countryId;
      city.countryName = countryName;
    }
  });
  
  return updatedState;
};

export const deleteStateHandler = async (id) => {
  await delay(500);
  const index = states.findIndex(state => state.id === id);
  if (index === -1) throw new Error('State not found');
  
  // Update country's statesCount
  const countryId = states[index].countryId;
  const country = countries.find(c => c.id === countryId);
  if (country) {
    country.statesCount = Math.max(0, (country.statesCount || 0) - 1);
  }
  
  // Remove the state
  states.splice(index, 1);
  
  // Remove related cities
  cities = cities.filter(city => city.stateId !== id);
  
  return id;
};

// City CRUD operations
export const createCityHandler = async (cityData) => {
  await delay(500);
  const state = states.find(s => s.id === cityData.stateId);
  if (!state) throw new Error('State not found');
  
  const newCity = {
    id: uuidv4(),
    ...cityData,
    stateName: state.name,
    countryId: state.countryId,
    countryName: state.countryName
  };
  
  cities.push(newCity);
  
  // Update state's citiesCount
  state.citiesCount = (state.citiesCount || 0) + 1;
  
  return newCity;
};

export const updateCityHandler = async (id, cityData) => {
  await delay(500);
  const index = cities.findIndex(city => city.id === id);
  if (index === -1) throw new Error('City not found');
  
  // If state changed, get the new state data
  let stateName = cities[index].stateName;
  let countryId = cities[index].countryId;
  let countryName = cities[index].countryName;
  
  if (cityData.stateId && cityData.stateId !== cities[index].stateId) {
    const state = states.find(s => s.id === cityData.stateId);
    if (!state) throw new Error('State not found');
    
    stateName = state.name;
    countryId = state.countryId;
    countryName = state.countryName;
    
    // Update old state's citiesCount
    const oldState = states.find(s => s.id === cities[index].stateId);
    if (oldState) {
      oldState.citiesCount = Math.max(0, (oldState.citiesCount || 0) - 1);
    }
    
    // Update new state's citiesCount
    state.citiesCount = (state.citiesCount || 0) + 1;
  }
  
  const updatedCity = {
    ...cities[index],
    ...cityData,
    stateName,
    countryId,
    countryName
  };
  
  cities[index] = updatedCity;
  
  return updatedCity;
};

export const deleteCityHandler = async (id) => {
  await delay(500);
  const index = cities.findIndex(city => city.id === id);
  if (index === -1) throw new Error('City not found');
  
  // Update state's citiesCount
  const stateId = cities[index].stateId;
  const state = states.find(s => s.id === stateId);
  if (state) {
    state.citiesCount = Math.max(0, (state.citiesCount || 0) - 1);
  }
  
  // Remove the city
  cities.splice(index, 1);
  
  return id;
};