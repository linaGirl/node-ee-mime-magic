	

	// magic numbers for common used image formats
	var imageTypes = {
		  "474946383961": 		"gif"
		, "474946383761": 		"gif"
		, "FFD8": 				"jpeg"
		, "89504E470D0A1A0A": 	"png"
	};

	// compile a regexp for detecting the types
	var keys = Object.keys( imageTypes )
		, l = keys.length
		, patterns = []
		, pattern;

	while( l-- ) patterns.push( keys[ l ] );
	pattern = "^(" + patterns.join( "|" ) + ").*$";


	// check for magic numbers in the first 20 bytes
	module.exports = function( imageData, callback ){
		if ( imageData ){
			if ( Buffer.isBuffer( imageData ) ){
				if ( imageData.length > 0 ){
					var match = new RegExp( pattern, "gi" ).exec( imageData.slice( 0, 20 ).toString( "hex" ) );
					if ( match ) callback( null, imageTypes[ match[ 1 ].toUpperCase() ] );
					else callback();
				} else callback( new Error( "empty_image" ) );
			} else callback( new Error( "buffer_expected" ) );
		} else callback( new Error( "no_data" ) );
	};