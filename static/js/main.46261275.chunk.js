(this.webpackJsonpmygithubio=this.webpackJsonpmygithubio||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},34:function(e,t,a){},35:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),c=(a(32),a(6)),o=a(7),l=a(9),m=a(8),h=a(10),u=a(25),p=a(1),d=(a(33),a(34),a(35),a(11)),f=a(24),b=a.n(f),E=(a(52),function(e){if(" "===e)return NaN;var t=0;return"C"===(e=e.split(""))[0]?t+=0:"D"===e[0]?t+=2:"E"===e[0]?t+=4:"F"===e[0]?t+=5:"G"===e[0]?t+=7:"A"===e[0]?t+=9:"B"===e[0]&&(t+=11),t+=12*parseInt(e[1]),e[2]&&("#"===e[2]?t+=1:"b"===e[2]&&(t-=1)),t}),g=function(e){if(isNaN(e))return" ";var t="C C# D D# E F F# G G# A A# B".split(" "),a=Math.floor(e/12),n=t[e%12].split("");return n.splice(1,0,a.toString()),n=n.join("")},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setSharp=function(e){a.setState({sharp:e})},a.handleClick=function(e){a.state.active||(" "!==a.props.notekey&&(a.state.sharp?a.props.midi.playChordNow(14,[a.props.sharpNum],.5):a.props.midi.playChordNow(14,[a.props.noteNum],.5)),a.toggleActive(),setTimeout(a.toggleActive,100))},a.toggleActive=function(){a.setState({active:!a.state.active})},a.toggleActive=a.toggleActive.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.setSharp=a.setSharp.bind(Object(d.a)(a)),a.state={active:!1,sharp:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:this.props.data,className:this.state.active?"key active":"key",onClickCapture:this.handleClick},r.a.createElement("span",{title:this.props.sharpkey,className:"sharp"}),r.a.createElement("span",{title:this.props.notekey,className:"note"})))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).data=a.props.data.split(""),a.notes=a.props.notes.split(","),a.notesNum=a.notes.map((function(e,t){return E(e)})),a.sharps=a.notes.map((function(e,t){return g(a.notesNum[t]+1)})),a.sharpsNum=a.sharps.map((function(e,t){return E(e)})),a.zipped=a.data.map((function(e,t){return[e,a.notes[t],a.notesNum[t],a.sharps[t],a.sharpsNum[t]]})),a.className=a.props.shiftLeft?"row shiftLeft":"row",a.setSharp=function(e){for(var t=Object.keys(a.keys),n=0;n<t.length;n++)a.keys[t[n]].current.setSharp(e)},a.createRef=function(e){e=e.charCodeAt(0);var t=r.a.createRef(e);return a.keys[e]=t,t},a.setSharp=a.setSharp.bind(Object(d.a)(a)),a.keys={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.className},this.zipped.map((function(t){return r.a.createElement(v,{data:t[0],key:t[0],ref:e.createRef(t[0]),midi:e.props.midi,notekey:t[1],noteNum:t[2],sharpkey:t[3],sharpNum:t[4]})}))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){a.setState({useQwerty:!a.state.useQwerty}),a.props.showQwerty()},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.state={useQwerty:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("label",null,"Use QWERTY",r.a.createElement("input",{name:"useQwerty",type:"checkbox",checked:this.state.useQwerty,onChange:this.handleInputChange})))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggleShowQwerty=function(e){a.setState({showQwerty:!a.state.showQwerty})},a.toggleSharp=function(e){if("#"===e.target.id){var t=!a.state.sharp;a.setState({sharp:t});for(var n=Object.keys(a.rows),r=0;r<n.length;r++)a.rows[n[r]].current.setSharp(t)}},a.createRef=function(e){var t=r.a.createRef(e);return a.rows[e]=t,t},a.setNotes=function(e){e=e.split(",");for(var t=0;t<e.length;t++)if(" "!==e[t]){var a=e[t].split(""),n=parseInt(a[1]);isNaN(n)&&a.splice(1,0,"5"),e[t]=a.join("")}return e.join()},a.toggleSharp=a.toggleSharp.bind(Object(d.a)(a)),a.toggleShowQwerty=a.toggleShowQwerty.bind(Object(d.a)(a)),a.rows={},a.state={showQwerty:!1,sharp:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"keyboard",className:(this.state.sharp?"sharp":"")+" "+(this.state.showQwerty?"showQwerty":""),onClick:this.toggleSharp},r.a.createElement(b.a,{ref:function(t){return e.midi=t},instruments:[3]}),r.a.createElement(y,{ref:this.createRef(0),midi:this.midi,data:"`1234567890-=",notes:this.setNotes("F8#,G8#,A8#,C9,D9,E9,F9#,G9#,A9#,G2#,A2#,C3,D3")}),r.a.createElement(y,{ref:this.createRef(1),midi:this.midi,data:"QWERTYUIOP[]",notes:this.setNotes("A6#,G6#,D7,C6,F7#,G7#,A7#,G5#,D5,E8,E2,F2#")}),r.a.createElement(y,{ref:this.createRef(2),midi:this.midi,data:"ASDFGHJKL;'",notes:this.setNotes("F4#,C5,F6#,F5#,C8,A5#,E7,D6,F3#,E5,G4#")}),r.a.createElement(y,{ref:this.createRef(3),midi:this.midi,data:"#ZXCVBNM,./",notes:this.setNotes(" ,E3,E6,G3#,A3#,C4,A4#,E4,D8,C7,D4"),shiftLeft:!0}),r.a.createElement(y,{ref:this.createRef(4),midi:this.midi,data:" ",notes:" "})),r.a.createElement(j,{showQwerty:this.toggleShowQwerty}))}},{key:"componentDidMount",value:function(){this.setState(this.state)}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"titlebox"},r.a.createElement("div",{className:"name"},"musical notes on a keyboard"),r.a.createElement("div",{className:"titleline"},"Try this: (\u2609 is rhythm placeholder)"),r.a.createElement("div",{className:"titleline"},'/\u2609" " "\u2609"\u2609n\u2609no"\u2609\u2609\u2609A\u2609AAA\u2609M\u2609A\u2609A"/\u2609\u2609\u2609A\u2609AAA\u2609/mM\u2609MMM\u2609m/m\u2609mmmAMm/\u2609/\u2609/\u2609\u2609\u2609')),r.a.createElement(k,null))}}]),t}(r.a.Component),w=(r.a.Component,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Asiiah Song"}},{key:"render",value:function(){return r.a.createElement("div",{class:"root"},r.a.createElement("div",{class:"titlebox"},r.a.createElement("div",{class:"name"},"Asiiah Song"),r.a.createElement("div",{class:"titleline"},"PhD student, Computational Media, UC Santa Cruz",r.a.createElement("span",{itemscope:!0,itemtype:"https://schema.org/Person"},r.a.createElement("a",{class:"orchid",itemprop:"sameAs",content:"https://orcid.org/0000-0003-4803-4317",href:"https://orcid.org/0000-0003-4803-4317",target:"orcid.widget",rel:"me noopener noreferrer"},r.a.createElement("img",{class:"orchid",src:"https://orcid.org/sites/default/files/images/orcid_16x16.png",alt:"ORCID iD icon"}))))),r.a.createElement("div",{class:"portfolio"},r.a.createElement("div",{class:"floatinglinks"},r.a.createElement("div",{class:"CV"},r.a.createElement("a",{href:"CV.pdf",target:"_blank",download:!0},"CV \u21e9")),r.a.createElement("div",{class:"github"},r.a.createElement("a",{href:"https://github.com/julinas",target:"_blank"},"GitHub \u2b00"))),r.a.createElement("div",{class:"portfolio-item"},r.a.createElement("img",{src:"Recipe.png"}),r.a.createElement("a",{href:"https://github.com/julinas/recipe/blob/master/README.md",target:"_blank"},"Generative Recipes",r.a.createElement("br",null),"2018")),r.a.createElement("div",{class:"portfolio-item"},r.a.createElement("img",{src:"Townsim.png"}),r.a.createElement("a",{href:"https://github.com/AugmentedDesignLab/town-sim-py/blob/master/README.md",target:"_blank"},"TownSim",r.a.createElement("br",null),"2019")),r.a.createElement("div",{class:"portfolio-item"},r.a.createElement("img",{src:"Tarot.png"}),r.a.createElement("a",{href:"https://github.com/julinas/generative-tarot/blob/master/README.md",target:"_blank"},"Generative Tarot",r.a.createElement("br",null),"2019")),r.a.createElement("div",{class:"portfolio-item"},r.a.createElement("img",{src:"iSAM.JPG"}),r.a.createElement("a",{href:"https://github.com/julinas/iSAM/blob/master/README.md",target:"_blank"},"iSAM",r.a.createElement("br",null),"2020")),r.a.createElement("div",{class:"portfolio-item"},r.a.createElement("img",{src:"keyboard.png"}),r.a.createElement("a",{href:"notesonakeyboard",target:"_blank"},"notes on a keyboard",r.a.createElement("br",null),"2020"))))}}]),t}(r.a.Component)),C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:""},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:w}),r.a.createElement(p.a,{path:"/notesonakeyboard",component:w})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.46261275.chunk.js.map