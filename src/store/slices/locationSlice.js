import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/axios';
import { getCountries, getStates, getCities } from '../../api/mock/locations.mock';

const initialState = {
  countries: [],
  states: [],
  cities: [],
  loading: false,
  error: null
};

// Async thunks for countries
export const fetchCountries = createAsyncThunk(
  'locations/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an actual API call
      // For now we'll simulate fetching countries
      const countries = await getCountries();
      return countries;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch countries');
    }
  }
);

export const createCountry = createAsyncThunk(
  'locations/createCountry',
  async (countryData, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.post('/countries', countryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create country');
    }
  }
);

export const updateCountry = createAsyncThunk(
  'locations/updateCountry',
  async ({ id, ...countryData }, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.put(`/countries/${id}`, countryData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update country');
    }
  }
);

export const deleteCountry = createAsyncThunk(
  'locations/deleteCountry',
  async (id, { rejectWithValue }) => {
    try {
      // Mock API call
      await apiClient.delete(`/countries/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete country');
    }
  }
);

// Async thunks for states
export const fetchStates = createAsyncThunk(
  'locations/fetchStates',
  async (countryId, { rejectWithValue }) => {
    try {
      const states = await getStates(countryId);
      return states;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch states');
    }
  }
);

export const createState = createAsyncThunk(
  'locations/createState',
  async (stateData, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.post('/states', stateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create state');
    }
  }
);

export const updateState = createAsyncThunk(
  'locations/updateState',
  async ({ id, ...stateData }, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.put(`/states/${id}`, stateData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update state');
    }
  }
);

export const deleteState = createAsyncThunk(
  'locations/deleteState',
  async (id, { rejectWithValue }) => {
    try {
      // Mock API call
      await apiClient.delete(`/states/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete state');
    }
  }
);

// Async thunks for cities
export const fetchCities = createAsyncThunk(
  'locations/fetchCities',
  async (stateId, { rejectWithValue }) => {
    try {
      const cities = await getCities(stateId);
      return cities;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch cities');
    }
  }
);

export const createCity = createAsyncThunk(
  'locations/createCity',
  async (cityData, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.post('/cities', cityData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create city');
    }
  }
);

export const updateCity = createAsyncThunk(
  'locations/updateCity',
  async ({ id, ...cityData }, { rejectWithValue }) => {
    try {
      // Mock API call
      const response = await apiClient.put(`/cities/${id}`, cityData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update city');
    }
  }
);

export const deleteCity = createAsyncThunk(
  'locations/deleteCity',
  async (id, { rejectWithValue }) => {
    try {
      // Mock API call
      await apiClient.delete(`/cities/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete city');
    }
  }
);

// Create the locations slice
const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    clearLocationError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Country cases
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCountry.fulfilled, (state, action) => {
        state.countries.push(action.payload);
      })
      .addCase(updateCountry.fulfilled, (state, action) => {
        const index = state.countries.findIndex(country => country.id === action.payload.id);
        if (index !== -1) {
          state.countries[index] = action.payload;
        }
      })
      .addCase(deleteCountry.fulfilled, (state, action) => {
        state.countries = state.countries.filter(country => country.id !== action.payload);
      })
      
      // State cases
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createState.fulfilled, (state, action) => {
        state.states.push(action.payload);
      })
      .addCase(updateState.fulfilled, (state, action) => {
        const index = state.states.findIndex(s => s.id === action.payload.id);
        if (index !== -1) {
          state.states[index] = action.payload;
        }
      })
      .addCase(deleteState.fulfilled, (state, action) => {
        state.states = state.states.filter(s => s.id !== action.payload);
      })
      
      // City cases
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createCity.fulfilled, (state, action) => {
        state.cities.push(action.payload);
      })
      .addCase(updateCity.fulfilled, (state, action) => {
        const index = state.cities.findIndex(city => city.id === action.payload.id);
        if (index !== -1) {
          state.cities[index] = action.payload;
        }
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        state.cities = state.cities.filter(city => city.id !== action.payload);
      });
  }
});

// Export actions and reducer
export const { clearLocationError } = locationSlice.actions;
export default locationSlice.reducer;

// Selectors
export const selectCountries = (state) => state.locations.countries;
export const selectStates = (state) => state.locations.states;
export const selectCities = (state) => state.locations.cities;
export const selectLocationLoading = (state) => state.locations.loading;
export const selectLocationError = (state) => state.locations.error;