Element.removeTag
=================

Allows you to destroy an Element while leaving its contents in place.


How to use
----------

#### HTML
	# HTML
	<div>
		<div id="removeMe">
			This text will be in place of the <em>removeMe</em> element.
		</div>
	</div>

#### JS
	# JS
	$('removeMe').removeTag();

#### Result
	# HTML
	<div>
		This text will be in place of the <em>removeMe</em> element.
	</div>