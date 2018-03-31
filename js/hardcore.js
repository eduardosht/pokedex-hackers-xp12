function favoritarPokemon( pokemonID ) {
	let localStore 	 = localStorage.getItem( "favoritados" );

	if ( localStore === null || localStore === '' ) {
		localStorage.setItem( "favoritados", pokemonID );
	} else {
		let transformArr = localStore.split(",");
		console.log(isInArray( pokemonID, transformArr ));
		console.log(pokemonID);
		if ( ! isInArray( pokemonID, transformArr ) ) {
			localStorage.setItem( "favoritados", localStore + ',' + pokemonID );
		}
	}
}

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}