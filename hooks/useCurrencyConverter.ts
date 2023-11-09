import { useState, useEffect } from 'react';
import axios from 'axios';

function useCurrencyConverter(dollarAmount:number) {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation !== null) {
      const selectedCurrency = 'YOUR_SELECTED_CURRENCY'; 
      convertCurrency(dollarAmount, selectedCurrency);
    }
  }, [userLocation, dollarAmount]);

  async function convertCurrency(amount:number, selectedCurrency:string) {
    try {
      const response = await axios.get(
        `https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=${selectedCurrency}`,
        {
          headers: {
            'APILAYER_API_KEY': 'YOUR_API_KEY',
          },
        }
      );

      const conversionRate = response.data.rates[selectedCurrency];
      const convertedValue = amount * conversionRate;

      setConvertedAmount(convertedValue);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return convertedAmount;
}

export default useCurrencyConverter;
