(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__LJbi_",description:"Profile_description__1M-H0",avatar:"Profile_avatar__3s94o",stats:"Profile_stats__3Utys",st_items:"Profile_st_items__1aE32"}},function(e,a,t){e.exports={table:"TransactionHistory_table__1mMXh",head:"TransactionHistory_head__vzsw6",item:"TransactionHistory_item__3IKZA",row:"TransactionHistory_row__1eil1"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__3X_7A",title:"Statistics_title__2XLK2",statList:"Statistics_statList__3v6mV",item:"Statistics_item__2vj__",label:"Statistics_label___8eqN",percentage:"Statistics_percentage__1yT0a"}},function(e,a,t){e.exports={item:"FriendsItem_item__3Xqmx",online:"FriendsItem_online__oe0Jk",offline:"FriendsItem_offline__1h1Jj",avatar:"FriendsItem_avatar__1824e",name:"FriendsItem_name__E5PxS"}},function(e,a,t){e.exports={nav:"Navigation_nav__-ARQd",list:"Navigation_list__Uk_fO",active:"Navigation_active__oZKEC",item:"Navigation_item__1eKnc"}},,,function(e,a,t){e.exports={friendsList:"FriendsList_friendsList__1IhPA"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),i=t.n(r),s=t(13),l=t(5),o=t.n(l),m=function(e){var a=e.props,t=a.tasks,n=a.page,r=a.setPage,i=n.value;return c.a.createElement("nav",{className:o.a.nav},c.a.createElement("ul",{className:o.a.list},t.map((function(e,a){return c.a.createElement("li",{className:o.a.item+(i==="page_".concat(a+1)?" ".concat(o.a.active):""),onClick:function(){return r({value:"page_".concat(a+1)})},key:a},e)}))))},u=t(1),d=t.n(u),p=function(e){var a=e.user,t=Object.entries(a.stats);return c.a.createElement("div",{className:d.a.profile},c.a.createElement("div",{className:d.a.description},c.a.createElement("img",{src:a.avatar,alt:"user avatar",className:d.a.avatar}),c.a.createElement("p",{className:d.a.name},a.name),c.a.createElement("p",{className:d.a.tag},"@".concat(a.tag)),c.a.createElement("p",{className:d.a.location},a.location)),c.a.createElement("ul",{className:d.a.stats},t.map((function(e,a){return c.a.createElement("li",{key:a,className:d.a.st_items},c.a.createElement("span",{className:d.a.label},e[0]),c.a.createElement("span",{className:d.a.quantity},e[1]))}))))},f=t(3),_=t.n(f),b=function(){return Math.round(255*Math.random())},y=[255,255,255],v=function(e){var a=e.title,t=e.statisticalData;return c.a.createElement("section",{className:_.a.statistics},a&&c.a.createElement("h2",{className:_.a.title},a),c.a.createElement("ul",{className:_.a.statList},t.map((function(e){var a=[b(),b(),b()],t=a.reduce((function(e,a){return e+a}),0);return y=t>550?y.map((function(e){return 0})):y.map((function(e){return 255})),c.a.createElement("li",{key:e.id,className:_.a.item,style:{backgroundColor:"rgba( ".concat(a[0]," , ").concat(a[1]," , ").concat(a[2],", 0.6)"),border:"1px solid rgb( ".concat(a[0]," , ").concat(a[1]," , ").concat(a[2],")"),color:"rgb( ".concat(y[0]," , ").concat(y[1]," , ").concat(y[2],")")}},c.a.createElement("span",{className:_.a.label},e.label),c.a.createElement("span",{className:_.a.percentage},e.percentage,"%"))}))))},E=t(4),g=t.n(E),N=function(e){var a=e.friends;return c.a.createElement(c.a.Fragment,null,a.map((function(e){return c.a.createElement("li",{key:e.id,className:g.a.item},c.a.createElement("span",{className:e.isOnline?g.a.online:g.a.offline}),c.a.createElement("img",{className:g.a.avatar,src:e.avatar,alt:"avatar"}),c.a.createElement("p",{className:g.a.name},e.name))})))},h=t(8),w=t.n(h),O=function(e){var a=e.friends;return c.a.createElement("ul",{className:w.a.friendsList},c.a.createElement(N,{friends:a}))},k=t(2),x=t.n(k),j=function(e){var a=e.transactions;return c.a.createElement("table",{className:"transaction-history "+x.a.table},c.a.createElement("thead",null,c.a.createElement("tr",{className:x.a.row},c.a.createElement("th",{className:x.a.head},"Type"),c.a.createElement("th",{className:x.a.head},"Amount"),c.a.createElement("th",{className:x.a.head},"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id,className:x.a.row},c.a.createElement("td",{className:x.a.item},e.type),c.a.createElement("td",{className:x.a.item},e.amount),c.a.createElement("td",{className:x.a.item},e.currency))}))))},S=t(9),L=t(10),P=t(11),J=t(12);var U=function(e){var a=e.page.value;return c.a.createElement("div",{className:"container"},"page_1"===a&&c.a.createElement("div",{className:"center"},c.a.createElement(p,{user:S})),"page_2"===a&&c.a.createElement(O,{friends:P}),"page_3"===a&&c.a.createElement(v,{title:"Upload stats",statisticalData:L}),"page_4"===a&&c.a.createElement(j,{transactions:J}))},A=(t(19),["profile","friends list","statistics","transaction history"]),F=function(){var e=Object(n.useState)({value:"page_1"}),a=Object(s.a)(e,2),t=a[0],r=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{props:{tasks:A,page:t,setPage:r}}),c.a.createElement(U,{page:t}))};i.a.render(c.a.createElement(F,null),document.querySelector("#root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.efccf376.chunk.js.map