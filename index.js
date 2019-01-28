var currencies = []
$.getJSON("https://free.currencyconverterapi.com/api/v6/currencies").done((data)=>{
	let object = data.results
	for(var key in object) {
    if(object.hasOwnProperty(key)) {
        var property = object[key];
        currencies.push(property.id)
    }
}

return currencies;

}).done(()=>{
		currencies.forEach((item)=>{
		$('#fromCurrency').append("<option>" + item + "</option>")
		$('#toCurrency').append("<option>" + item + "</option>")
	})
})

const convert = (fromCurr,toCurr, amt) =>{
	$.getJSON("https://free.currencyconverterapi.com/api/v6/convert?q=" + fromCurr + "_" + toCurr + "&compact=y").done((data)=>{
		console.log(data)
		let obj = data
		for(let key in obj) {
			if(obj.hasOwnProperty(key)) {
				let property = obj[key]
				let conversion = property.val * amt
				$('#exchange').text(conversion.toFixed(2))
			}
		}
	})
}

$('#convert').on('click',()=>{
	convert($('#fromCurrency').val(),$('#toCurrency').val(), $('#amt').val())
})


