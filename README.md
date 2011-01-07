Element.removeTag
=================

Allows you to destroy an Element while leaving its contents in place.


How to use
----------

#### HTML
	<div>
		<div id="removeMe">
			This text will be in place of the <em>removeMe</em> element.
		</div>
	</div>

#### JS
	$('removeMe').removeTag();

#### Result
	<div>
		This text will be in place of the <em>removeMe</em> element.
	</div>