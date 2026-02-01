function convertMoney(enterCurrency, fromCurrency, toCurrency) {
 // рубли на доллары
    if(fromCurrency === 'руб' && toCurrency === '$'){
        return enterCurrency * 0.01
    }
    if(fromCurrency === '$' && toCurrency === 'руб'){
        return enterCurrency * 100
    }
    if(fromCurrency === 'руб' && toCurrency === 'EUR'){
        return enterCurrency * 0.015
    }
    if(fromCurrency === 'EUR' && toCurrency === 'руб'){
        return enterCurrency * 150
    }
    if(fromCurrency === '$' && toCurrency === 'EUR'){
        return enterCurrency * 0.75
    }
    if(fromCurrency === 'EUR' && toCurrency === '$'){
        return enterCurrency * 1.25
    }
    // Если конвертация не происходит
    return null
}

convertMoney(1000, '$', 'EUR')