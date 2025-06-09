
class CurrencyConverter {
    async setBaseCurrency(currency) {
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Cannot fetch exchange rates!`);
        }

        const data = await response.json();
        this.rates = data.rates;
    }

    async convertTo(currency, amount = 1) {
        const _currency = currency.toUpperCase();

        if (!(_currency in this.rates)) {
            throw new Error(`Currency not found!`);
        }

        const result = (this.rates[_currency] * amount).toFixed(2);
        return result;
    }
}

(async () => {
    const cc = new CurrencyConverter();
    await cc.setBaseCurrency('usd');

    const bdt = await cc.convertTo('bdt');
    console.log('USD to BDT', bdt);

    const aud = await cc.convertTo('aud');
    console.log('USD to AUD', aud);

    await cc.setBaseCurrency('eur');
    const bdtAgain = await cc.convertTo('bdt');
    console.log('EUR to BDT', bdtAgain);
})()