(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{233:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("AssemblyScript compiles a "),s("strong",[t._v("strict variant")]),t._v(" of "),s("a",{attrs:{href:"https://www.typescriptlang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),s("OutboundLink")],1),t._v(" (a typed superset of JavaScript) to "),s("a",{attrs:{href:"https://webassembly.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly"),s("OutboundLink")],1),t._v(" using "),s("a",{attrs:{href:"https://github.com/WebAssembly/binaryen",target:"_blank",rel:"noopener noreferrer"}},[t._v("Binaryen"),s("OutboundLink")],1),t._v(", looking like:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n      a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b\n      b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("asc fib.ts -b fib.wasm -O3\n")])])]),s("p",[t._v("Its architecture differs from a JavaScript VM in that it compiles a program "),s("strong",[t._v("ahead of time")]),t._v(", quite similar to other static compilers. One can think of it as a mix of TypeScript's syntax and C's capabilities.")]),t._v(" "),s("h2",{attrs:{id:"in-a-nutshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-a-nutshell"}},[t._v("#")]),t._v(" In a nutshell")]),t._v(" "),s("p",[t._v("On top of "),s("RouterLink",{attrs:{to:"/types.html"}},[t._v("WebAssembly types")]),t._v(", it not only provides "),s("RouterLink",{attrs:{to:"/environment.html#low-level-webassembly-operations"}},[t._v("low-level built-ins")]),t._v(" to access WebAssembly features directly, making it suitable as a thin layer on top of Wasm, but also comes with its own JavaScript-like "),s("RouterLink",{attrs:{to:"/environment.html#standard-library"}},[t._v("standard library")]),t._v(", making it suitable for non-browser use cases, along a relatively small "),s("RouterLink",{attrs:{to:"/runtime.html"}},[t._v("managed runtime")]),t._v(" (with memory management and garbage collection) enabling the creation of programs that look and feel much like TypeScript.")],1),t._v(" "),s("p",[t._v("For example, on the lowest level, memory can be accessed using the "),s("code",[t._v("load<T>(offset)")]),t._v(" and "),s("code",[t._v("store<T>(offset, value)")]),t._v(" built-ins that compile to WebAssembly instructions directly")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" load"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" load"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("while the standard library not only provides optimized native "),s("RouterLink",{attrs:{to:"/stdlib/math.html"}},[t._v("Math")]),t._v(" implementations (both double and single precision) but also implementations of "),s("RouterLink",{attrs:{to:"/stdlib/arraybuffer.html"}},[t._v("ArrayBuffer")]),t._v(", "),s("RouterLink",{attrs:{to:"/stdlib/typedarray.html"}},[t._v("Uint8Array")]),t._v(", "),s("RouterLink",{attrs:{to:"/stdlib/string.html"}},[t._v("String")]),t._v(", "),s("RouterLink",{attrs:{to:"/stdlib/map.html"}},[t._v("Map")]),t._v(" etc. on a higher level:")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Int32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("In turn it also comes with a bunch of features JavaScript doesn't have, mostly out of necessity, like the ability to declare "),s("RouterLink",{attrs:{to:"/peculiarities.html#operator-overloads"}},[t._v("operator overloads")]),t._v(" that arrays for example use as an implementation helper. It's not quite a subset, not quite a superset, but rather a variant.")],1),t._v(" "),s("p",[t._v("As of today, the compiler still has its "),s("RouterLink",{attrs:{to:"/basics.html#current-limitations"}},[t._v("limitations")]),t._v(" and we are waiting for WebAssembly features that are currently undergoing specification (marked as 🦄 throughout the documentation, especially "),s("a",{attrs:{href:"https://github.com/WebAssembly/reference-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference Types"),s("OutboundLink")],1),t._v(" 🦄, "),s("a",{attrs:{href:"https://github.com/WebAssembly/interface-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interface Types"),s("OutboundLink")],1),t._v(" 🦄 and "),s("a",{attrs:{href:"https://github.com/WebAssembly/gc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wasm GC"),s("OutboundLink")],1),t._v(" 🦄) to unleash its full potential. But it is open source, built upon an "),s("a",{attrs:{href:"https://webassembly.github.io/spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("open specification"),s("OutboundLink")],1),t._v(" and everyone can contribute, so we are getting there.")],1),t._v(" "),s("p",[t._v("Sounds appealing to you? Read on!")])])}),[],!1,null,null,null);a.default=r.exports}}]);