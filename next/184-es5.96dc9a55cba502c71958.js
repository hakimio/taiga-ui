(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{Z2a8:function(t,n,e){"use strict";e.r(n),e.d(n,"TextAlign",(function(){return i})),e.d(n,"default",(function(){return i}));var i=e("jgtz").Extension.create({name:"textAlign",defaultOptions:{types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"},addGlobalAttributes:function(){var t=this;return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:function(n){return n.style.textAlign||t.options.defaultAlignment},renderHTML:function(n){return n.textAlign===t.options.defaultAlignment?{}:{style:"text-align: "+n.textAlign}}}}}]},addCommands:function(){var t=this;return{setTextAlign:function(n){return function(e){var i=e.commands;return!!t.options.alignments.includes(n)&&t.options.types.every((function(t){return i.updateAttributes(t,{textAlign:n})}))}},unsetTextAlign:function(){return function(n){var e=n.commands;return t.options.types.every((function(t){return e.resetAttributes(t,"textAlign")}))}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-l":function(){return t.editor.commands.setTextAlign("left")},"Mod-Shift-e":function(){return t.editor.commands.setTextAlign("center")},"Mod-Shift-r":function(){return t.editor.commands.setTextAlign("right")},"Mod-Shift-j":function(){return t.editor.commands.setTextAlign("justify")}}}})}}]);