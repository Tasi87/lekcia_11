//idea	IIFE	-	Immediately Invoked Function Expression
//						Okamžite Spustiteľná Funkcia

// zápis Function Expression (šípková notácia)
	
	// vytvorenie:
	const firstFunction = () => {
		console.log("šípková notácia");
	}
	
	// zavolanie:
	firstFunction();

	// prerobemie na IIFE:
	(() => {
		console.log("expression")
	})();

	// IIFE cez function declaration:
	(function () {
		console.log("declaration")
	})();

// používa sa k modulárnemu programovaniu