node-ee-mime-magic
==================

In memory mime sniffer without depencies ( using the files magic numbers )

currently supporting the following file types

* gif
* jpeg
* png
* tiff
* webp

## Usage

	var mimeMagic = require( "node-ee-mime-magic" );

	mimeMagic( buffer, function( err, mimeType ){
		if ( err || !mimeType ) console.log( "failed to detect mime type :(" );
		else console.log( "mime type:", mimeType.mime, "extension", mimeType.extension );
	} );