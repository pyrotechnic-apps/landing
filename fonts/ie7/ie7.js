/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bl-icon-users2': '&#xe601;',
		'bl-icon-home3': '&#xe902;',
		'bl-icon-location': '&#xe947;',
		'bl-icon-mobile': '&#xe958;',
		'bl-icon-users': '&#xe972;',
		'bl-icon-cancel-circle': '&#xea0d;',
		'bl-icon-embed2': '&#xea80;',
		'bl-icon-terminal': '&#xea81;',
		'bl-icon-mail': '&#xea83;',
		'bl-icon-twitter2': '&#xea92;',
		'bl-icon-onedrive': '&#xeab0;',
		'bl-icon-github': '&#xeab1;',
		'bl-icon-apple': '&#xeabf;',
		'bl-icon-finder': '&#xeac0;',
		'bl-icon-linkedin': '&#xeac8;',
		'bl-icon-html5': '&#xeadf;',
		'bl-icon-git': '&#xeae2;',
		'bl-icon-safari': '&#xeae9;',
		'bl-icon-phone': '&#xe600;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/bl-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
