 # all-polyfills
 

 <div style="display:inline">

[![build](https://travis-ci.org/Sylvain59650/all-polyfills.png?branch=master)](https://travis-ci.org/Sylvain59650/all-polyfills)
![version](https://img.shields.io/npm/v/all-polyfills.svg)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/all-polyfills.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/all-polyfills.svg)
![minified](https://img.shields.io/bundlephobia/min/all-polyfills.svg)
![linter](https://img.shields.io/badge/eslint-ok-blue.svg)
![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![license](https://img.shields.io/npm/l/all-polyfills.svg)
[![hits](http://hits.dwyl.com/Sylvain59650/all-polyfills.svg)](http://hits.dwyl.com/Sylvain59650/all-polyfills)
</div>
 
 
 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > all-polyfills](https://github.com/Sylvain59650/all-polyfills/blob/master/README.md)
</div>

<p>
<i>You can load all features: (18 Ko)</i>

```html
<script src="node_modules/all-polyfills/distrib/all-polyfills.min.js"></script>
```

<i>You can load only required features:</i>
```html
<script src="node_modules/all-polyfills/distrib/fn/Math/acosh.min.js"></script>
```


<i>You can load only required categories features:</i>

categories features are :
- Array
- ArrayBuffer
- Element
- IDBKeyRange
- Math
- NodeList
- Number
- Object
- Regex
- String
- window

<p>example for categorie <i>Math</i></p>

```html
<script src="node_modules/all-polyfills/distrib/Math.min.js"></script>
```


<i>You can embed only required  features not minified in others scripts:</i>
```html
<script src="node_modules/all-polyfills/distrib/fn/Math/acosh.js"></script>
```
</p>

<h1>Availables polyfills</h1>

# Array
	copyWithin
	every
	fill
	filter
	find
	findIndex
	from
	includes
	indexOf
	isArray
	lastIndexOf
	of
	reduce
	reduceRight
	some
	toLocaleString
# ArrayBuffer
    transfer
# Element
	after
	before
	childElementCount
	children
	closest
	getAttributeNames
	hasAttribute
	hasAttributes
	hasChildNodes
	insertAdjacentText
	isFinite
	lastElementChild
	matches
	prepend
	remove
	replaceWith
	toggleAttribute
# IDBKeyRange
	includes
# Math
	acosh
	atanh
	cbrt
	clz32
	cosh
	expm1
	fround
	hypot
	imul
	log10
	log1p
	log2
	sign
	sinh
	tanh
	trunc
# NodeList
	forEach
# Number
	EPSILON
	isInteger
	isNaN
	isSafeInteger
	MAX_SAFE_INTEGER
	parseFloat
	parseInt
# Object
	assign
	create
	entries
	is
	keys
# Regex
	flags
# String
	codePointAt
	endsWith
	fromCodePoint
	includes
	padEnd
	padStart
	repeat
	startsWith
	substr
	trim
	trimLeft
	trimRight
# window
	CustomEvent
	screenLeft
	screenTop
