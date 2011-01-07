/*
---

description: Element.removeTag method
license:     MIT-style
authors:     [ Jaik Dean ]
requires:    [ Element ]
provides:    [ Element.removeTag ]

...
*/
Element.implement({
	removeTag: function(){
		var childNodes = this.childNodes;

		for (var i = childNodes.length - 1; i >= 0; i--) {
			if (childNodes[i].nodeType == document.TEXT_NODE) {
				this.appendText(childNodes[i].nodeValue, 'after');
			} else {
				document.id(childNodes[i]).inject(this, 'after');
			}
		}

		this.destroy();
	}
});