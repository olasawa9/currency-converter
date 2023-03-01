{
    const calculateResult = (amount, currency) => {

        const EUR = 4.83;
        const USD = 4.88;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = ` ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const currency = currencyElement.value

        const result = calculateResult(amountElement.value, currency)

        updateResultText(amountElement, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}