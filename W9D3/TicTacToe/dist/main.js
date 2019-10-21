!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=function(t){this.msg=t}},function(t,e,r){const i=r(2),n=r(3);$(()=>{const t=$(".ttt"),e=new n;new i(e,t)})},function(module,exports){class View{constructor(t,e){this.game=t,this.root=e,this.setupBoard(),this.bindEvents()}bindEvents(){const that=this;$("li").on("click",(function(e){let target=e.target;that.game.playMove(eval(e.target.id)),that.makeMove(target)}))}makeMove($square){let x=eval($square.id)[0],y=eval($square.id)[1],result=this.game.board.grid[x][y];"o"===result?($($square).addClass("o"),meow.play()):"x"===result&&($($square).addClass("x"),bark.play());let draw=null===this.game.board.winner();if(this.game.board.isOver()){for(let t=0;t<3;t++)for(let e=0;e<3;e++){let r=this.game.board.grid[t][e];r!==result&&(draw||$(`[q='${t}${e}']`).addClass("loser"))}draw?$("#winner").text("The game is a draw!"):$("#winner").text(`The winner is ${"x"===result?"🐕":"🐈"}!`),$("li").off(),$("li").addClass("noHover");let t=this;setTimeout((function(){t.game.board.reset(),$("li").removeClass("x o loser"),$("#winner").text(""),t.bindEvents(),$("li").removeClass("noHover")}),5e3)}}setupBoard(){const t=$('<div class = "board">\n                      <div> <li q= "00" id="[0,0]"> </li> <li q= "10" id="[1,0]"></li> <li q= "20" id="[2,0]"></li></div>\n                      <div><li q= "01" id="[0,1]"></li><li q= "11" id="[1,1]"></li><li q= "21" id="[2,1]"></li></div>\n                      <div><li q= "02" id="[0,2]"></li><li q= "12" id="[1,2]"></li><li q= "22" id="[2,2]"></li></div>\n                      </div>');this.root.append(t)}}module.exports=View},function(t,e,r){const i=r(4),n=r(0);t.exports=class{constructor(){this.board=new i,this.currentPlayer=i.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,e){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),t.question("Enter rowIdx: ",r=>{const i=parseInt(r);t.question("Enter colIdx: ",t=>{const r=parseInt(t);e([i,r])})})}run(t,e){this.promptMove(t,r=>{try{this.playMove(r)}catch(t){if(!(t instanceof n))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),e()):this.run(t,e)})}swapTurn(){this.currentPlayer===i.marks[0]?this.currentPlayer=i.marks[1]:this.currentPlayer=i.marks[0]}winner(){return this.board.winner()}}},function(t,e,r){const i=r(0);class n{constructor(){this.grid=n.makeGrid()}reset(){this.grid=n.makeGrid()}isEmptyPos(t){if(!n.isValidPos(t))throw new i("Is not valid position!");return null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let e=0;e<3;e++)if(this.isEmptyPos([t,e]))return!1;return!0}placeMark(t,e){if(!this.isEmptyPos(t))throw new i("Is not an empty position!");this.grid[t[0]][t[1]]=e}print(){const t=[];for(let e=0;e<3;e++){const r=[];for(let t=0;t<3;t++)r.push(this.grid[e][t]?this.grid[e][t]:" ");t.push(`${r.join("|")}\n`)}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let e=0;e<t.length;e++){const r=this.winnerHelper(t[e]);if(null!=r)return r}return null}winnerHelper(t){for(let e=0;e<n.marks.length;e++){const r=n.marks[e];let i=!0;for(let e=0;e<3;e++){const n=t[e];this.grid[n[0]][n[1]]!=r&&(i=!1)}if(i)return r}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let e=0;e<3;e++){t.push([]);for(let r=0;r<3;r++)t[e].push(null)}return t}}n.marks=["x","o"],t.exports=n}]);