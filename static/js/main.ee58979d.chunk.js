(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),i=n.n(c),s=(n(17),n(10)),h=n(9),o=n(2),m=n(3),d=n(5),r=n(4),u=n(1),p=n(6),b=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={inputTxt:"",list:[{txt:"\u6d4b\u8bd5\u5f85\u529e\u4e8b\u9879\u4e00",checked:!1},{txt:"\u6d4b\u8bd5\u5f85\u529e\u4e8b\u9879\u4e8c",checked:!1},{txt:"\u6d4b\u8bd5\u5f85\u529e\u4e8b\u9879\u4e09",checked:!0},{txt:"\u6d4b\u8bd5\u5f85\u529e\u4e8b\u9879\u56db",checked:!0}]},n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.handleAddItem=n.handleAddItem.bind(Object(u.a)(n)),n.handleComplete=n.handleComplete.bind(Object(u.a)(n)),n.handleRemoveItem=n.handleRemoveItem.bind(Object(u.a)(n)),n.handleEditItem=n.handleEditItem.bind(Object(u.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){this.setState({inputTxt:e.target.value})}},{key:"handleAddItem",value:function(e){e.preventDefault(),this.setState({inputTxt:"",list:[{txt:this.state.inputTxt,checked:!1}].concat(Object(h.a)(this.state.list))})}},{key:"handleComplete",value:function(e){var t=this.state.list;t[e].checked=!t[e].checked,this.setState({list:t})}},{key:"handleRemoveItem",value:function(e){var t=this.state.list;t.splice(e,1),this.setState({list:t})}},{key:"handleEditItem",value:function(e,t){this.setState({list:this.state.list.map(function(n,a){return a===e?Object(s.a)({},n,{txt:t.target.value}):n})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Todolist"},l.a.createElement("h1",null,"Todolist"),l.a.createElement("form",{onSubmit:this.handleAddItem},l.a.createElement("input",{type:"text",className:"Todolist__input",placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879",onChange:this.handleInputChange,value:this.state.inputTxt})),l.a.createElement(v,{list:this.state.list,handleComplete:this.handleComplete,handleRemoveItem:this.handleRemoveItem,handleEditItem:this.handleEditItem}))}}]),t}(a.Component)),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.handleComplete,c=t.handleRemoveItem,i=t.handleEditItem;return l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{className:"number-box"},n.filter(function(e){return!1===e.checked}).length),"\u6b63\u5728\u8fdb\u884c"),l.a.createElement("ul",{className:"List"},n.map(function(t,n){return!t.checked&&l.a.createElement("li",{className:"List__item",key:n},l.a.createElement("span",{className:"List__item--remove",onClick:c.bind(e,n)},"X"),l.a.createElement("div",{className:t.checked?"List__item--complete":null},l.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:a.bind(e,n)}),l.a.createElement("input",{type:"text",value:t.txt,onChange:i.bind(e,n),className:"List__value"})))})),l.a.createElement("h4",null,l.a.createElement("span",{className:"number-box"},n.filter(function(e){return!0===e.checked}).length),"\u5df2\u7ecf\u5b8c\u6210"),l.a.createElement("ul",{className:"List"},n.map(function(t,n){return t.checked&&l.a.createElement("li",{className:"List__item",key:n},l.a.createElement("span",{className:"List__item--remove",onClick:c.bind(e,n)},"X"),l.a.createElement("div",{className:t.checked?"List__item--complete":null},l.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:a.bind(e,n)}),t.txt))})))}}]),t}(a.Component),k=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.ee58979d.chunk.js.map