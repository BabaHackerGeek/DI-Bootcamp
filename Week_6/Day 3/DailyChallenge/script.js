const API_KEY = '0dafea3e829f8e69e1e1412b'; // My private API key
const BASE_URL = 'https://v6.exchangerate-api.com/v6/'; // Base URL for the API

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const convertButton = document.getElementById('convert');
    const switchButton = document.getElementById('switch');
    const resultDisplay = document.getElementById('converted-amount');

    // Object to store currency codes and names
    let currencies = {};

    // Fetch the list of supported currencies
    async function fetchCurrencies() {
        try {
            const response = await fetch(`${BASE_URL}${API_KEY}/latest/USD`); // Fetch data for base currency USD
            const data = await response.json();
            currencies = data.conversion_rates;

            populateCurrencyOptions();
        } catch (error) {
            console.error('Error fetching currencies:', error);
        }
    }

    // Populate the currency select dropdowns
    function populateCurrencyOptions() {
        fromCurrencySelect.innerHTML = '';
        toCurrencySelect.innerHTML = '';

        // Populate 'From' currency dropdown
        Object.keys(currencies).forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = code;
            fromCurrencySelect.appendChild(option);
        });

        // Populate 'To' currency dropdown
        Object.keys(currencies).forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = code;
            toCurrencySelect.appendChild(option);
        });
    }

    // Fetch the conversion rate and calculate the converted amount
    async function fetchConversionRate(from, to, amount) {
        try {
            const response = await fetch(`${BASE_URL}${API_KEY}/latest/${from}`);
            const data = await response.json();
            const rate = data.conversion_rates[to];
            return (amount * rate).toFixed(2);
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
        }
    }

    // Handle conversion button click
    convertButton.addEventListener('click', async () => {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

        if (fromCurrency && toCurrency && !isNaN(amount)) {
            const convertedAmount = await fetchConversionRate(fromCurrency, toCurrency, amount);
            resultDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultDisplay.textContent = 'Please enter a valid amount and select currencies.';
        }
    });

    // Handle switch currencies button click
    switchButton.addEventListener('click', () => {
        const temp = fromCurrencySelect.value;
        fromCurrencySelect.value = toCurrencySelect.value;
        toCurrencySelect.value = temp;

        // Trigger conversion with switched currencies
        convertButton.click();
    });

    // Initial fetch to populate currency options
    fetchCurrencies();
});
