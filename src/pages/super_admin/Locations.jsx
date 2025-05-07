import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/input';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { Globe, Map, MapPin, Plus, Trash, Edit, Search } from 'lucide-react';
import CountryForm from './locations/CountryForm';
import StateForm from './locations/StateForm';
import CityForm from './locations/CityForm';
import { useLocation } from '../../hooks/useLocation';

const Locations = () => {
  // State for managing modal visibility
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showStateModal, setShowStateModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  
  // State for editing items
  const [editingCountry, setEditingCountry] = useState(null);
  const [editingState, setEditingState] = useState(null);
  const [editingCity, setEditingCity] = useState(null);
  
  // Search states
  const [countrySearch, setCountrySearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');

  // State for current active tab
  const [activeTab, setActiveTab] = useState("countries");

  // Get location data and functions from custom hook
  const { 
    countries, 
    states, 
    cities, 
    fetchCountries, 
    fetchStates, 
    fetchCities,
    deleteCountry,
    deleteState,
    deleteCity,
    loading 
  } = useLocation();

  // Fetch initial data based on active tab
  useEffect(() => {
    if (activeTab === "countries") {
      fetchCountries();
    } else if (activeTab === "states") {
      fetchStates();
    } else if (activeTab === "cities") {
      fetchCities();
    }
  }, [activeTab, fetchCountries, fetchStates, fetchCities]);

  // Handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  // Define table columns for countries
  const countryColumns = [
    {
      header: 'Country Name',
      accessor: 'name',
    },
    {
      header: 'Code',
      accessor: 'code',
    },
    {
      header: 'States Count',
      accessor: 'statesCount',
      cell: (row) => row.statesCount || 0,
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              setEditingCountry(row);
              setShowCountryModal(true);
            }}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-red-500 hover:text-red-700"
            onClick={() => confirmDelete('country', row.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Define table columns for states
  const stateColumns = [
    {
      header: 'State Name',
      accessor: 'name',
    },
    {
      header: 'Country',
      accessor: 'countryName',
    },
    {
      header: 'Cities Count',
      accessor: 'citiesCount',
      cell: (row) => row.citiesCount || 0,
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              setEditingState(row);
              setShowStateModal(true);
            }}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-red-500 hover:text-red-700"
            onClick={() => confirmDelete('state', row.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Define table columns for cities
  const cityColumns = [
    {
      header: 'City Name',
      accessor: 'name',
    },
    {
      header: 'State',
      accessor: 'stateName',
    },
    {
      header: 'Country',
      accessor: 'countryName',
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              setEditingCity(row);
              setShowCityModal(true);
            }}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-red-500 hover:text-red-700"
            onClick={() => confirmDelete('city', row.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Confirmation for delete
  const confirmDelete = (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      if (type === 'country') {
        deleteCountry(id);
      } else if (type === 'state') {
        deleteState(id);
      } else if (type === 'city') {
        deleteCity(id);
      }
    }
  };

  // Filter functions
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredStates = states.filter(state => 
    state.name.toLowerCase().includes(stateSearch.toLowerCase()) ||
    (state.countryName && state.countryName.toLowerCase().includes(stateSearch.toLowerCase()))
  );

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(citySearch.toLowerCase()) ||
    (city.stateName && city.stateName.toLowerCase().includes(citySearch.toLowerCase())) ||
    (city.countryName && city.countryName.toLowerCase().includes(citySearch.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Location Management</h1>
      </div>

      <Tabs defaultValue="countries" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-4">
          <TabsTrigger value="countries">
            <Globe className="mr-2 h-4 w-4" />
            Countries
          </TabsTrigger>
          <TabsTrigger value="states">
            <Map className="mr-2 h-4 w-4" />
            States
          </TabsTrigger>
          <TabsTrigger value="cities">
            <MapPin className="mr-2 h-4 w-4" />
            Cities
          </TabsTrigger>
        </TabsList>

        {/* Countries Tab */}
        <TabsContent value="countries">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Countries</CardTitle>
              <Button size="sm" onClick={() => { setEditingCountry(null); setShowCountryModal(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add Country
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search countries..."
                    className="pl-8"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                  />
                </div>
              </div>
              <DataTable
                columns={countryColumns}
                data={filteredCountries}
                isLoading={loading}
                className="border rounded-lg"
                emptyMessage="No countries found. Add your first country!"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* States Tab */}
        <TabsContent value="states">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>States</CardTitle>
              <Button size="sm" onClick={() => { setEditingState(null); setShowStateModal(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add State
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search states..."
                    className="pl-8"
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                  />
                </div>
              </div>
              <DataTable
                columns={stateColumns}
                data={filteredStates}
                isLoading={loading}
                className="border rounded-lg"
                emptyMessage="No states found. Add your first state!"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cities Tab */}
        <TabsContent value="cities">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Cities</CardTitle>
              <Button size="sm" onClick={() => { setEditingCity(null); setShowCityModal(true); }}>
                <Plus className="mr-2 h-4 w-4" />
                Add City
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search cities..."
                    className="pl-8"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                  />
                </div>
              </div>
              <DataTable
                columns={cityColumns}
                data={filteredCities}
                isLoading={loading}
                className="border rounded-lg"
                emptyMessage="No cities found. Add your first city!"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal for adding/editing country */}
      <CountryForm 
        isOpen={showCountryModal} 
        onClose={() => setShowCountryModal(false)} 
        editData={editingCountry}
      />

      {/* Modal for adding/editing state */}
      <StateForm 
        isOpen={showStateModal} 
        onClose={() => setShowStateModal(false)} 
        editData={editingState}
        countries={countries}
      />

      {/* Modal for adding/editing city */}
      <CityForm 
        isOpen={showCityModal} 
        onClose={() => setShowCityModal(false)} 
        editData={editingCity}
        states={states}
        countries={countries}
      />
    </div>
  );
};

export default Locations;