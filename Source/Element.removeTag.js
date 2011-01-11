/*
---

description: Element.removeTag method
license:     MIT-style
authors:     [ Jaik Dean ]
requires:
  core/1.3:  [ Element ]
provides:    [ Element.removeTag ]

...
*/
Element.implement({
	removeTag: function(){
		var childNodes = this.childNodes;

		for (var i = childNodes.length - 1; i >= 0; i--) {
			switch (typeOf(childNodes[i])) {
				case 'textnode':
				case 'whitespace':
					this.appendText(childNodes[i].nodeValue, 'after');
				break;
				case 'element':
					$(childNodes[i]).inject(this, 'after');
				break;
			}
		}

		this.destroy();
	}
});