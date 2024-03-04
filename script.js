function calculateDecimal() {
    var numerator = parseFloat(document.getElementById('numerator').value);
    var denominator = parseFloat(document.getElementById('denominator').value);
  
    if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
      var decimalResult = numerator / denominator;
      document.getElementById('result').innerHTML = `Sonuç: ${numerator} / ${denominator} = ${decimalResult.toFixed(2)}`;
    } else {
      document.getElementById('result').innerHTML = 'Geçerli sayısal değerler girin. Payda sıfır olamaz.';
    }
  }
  