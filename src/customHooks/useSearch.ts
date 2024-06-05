import { useState } from 'react';

interface Car {
  name: string;
  price: string;
  model: string;
  image: string;
  fuelType: string;
  transmission: string;
  mileage: string;
  color: string;
}

const useSearch = (initialData: Car[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Car[]>(initialData);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length < 2) {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter(car =>
        car.name.toLowerCase().includes(term.toLowerCase()) ||
        car.model.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return { searchTerm, filteredData, handleSearch };
};

export default useSearch;
