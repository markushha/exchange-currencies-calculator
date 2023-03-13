import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  async function getCurrencies() {
    try {
        setLoading(true);
        const response = await axios.get('https://api.exchangerate.host/latest', {
            params: {
                base: baseCurrency
            }
        });
        setCurrencies(response.data.rates);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    getCurrencies();
  }, []);

    // if(loading) return <div>Loading...</div>;
    // if(error) return <div>{error}</div>;
    // if(!currencies) return <div>No currencies</div>;

    console.log(currencies);

  return (
    <div className="App">
        {currencies && (
            <div>{currencies}</div>
        )}
    </div>
  );
}

export default App;
