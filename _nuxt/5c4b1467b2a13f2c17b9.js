(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{417:function(t,e,n){var content=n(484);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0ddbce0c",content,!1,{sourceMap:!1})},418:function(t,e,n){var content=n(486);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("f0fcac38",content,!1,{sourceMap:!1})},419:function(t,e,n){var content=n(489);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("bfb4c2e8",content,!1,{sourceMap:!1})},483:function(t,e,n){"use strict";var r=n(417);n.n(r).a},484:function(t,e,n){(e=n(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},485:function(t,e,n){"use strict";var r=n(418);n.n(r).a},486:function(t,e,n){(e=n(12)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},487:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/4/30","url":"https://www.pref.tokushima.lg.jp/jigyoshanokata/kyoiku/kanko/5036931/","text":"「新型感染症対策がんばる観光応援事業」の実施について (観光)"},{"date":"2020/4/30","url":"https://www.pref.tokushima.lg.jp/jigyoshanokata/kurashi/seikatsueisei/5036913/","text":"生活衛生関係営業者応援給付金のご案内 (生活衛生・動物愛護)"},{"date":"2020/4/30","url":"https://www.pref.tokushima.lg.jp/jigyoshanokata/sangyo/shokogyo/5035852/","text":"徳島県新型コロナ対応！企業応援給付金のご案内 (商工業)"},{"date":"2020/4/30","url":"https://www.pref.tokushima.lg.jp/ippannokata/sangyo/nogyo/5035380/","text":"県産農林水産物を積極的にご利用ください！ (農業)"},{"date":"2020/4/30","url":"https://www.pref.tokushima.lg.jp/ippannokata/sangyo/nogyo/5036908/","text":"和牛肉等学校給食提供推進事業について (農業)"}]}')},488:function(t,e,n){"use strict";var r=n(419);n.n(r).a},489:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-af5960b0]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-af5960b0]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-af5960b0]{padding:4px 8px}}",""]),t.exports=e},492:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(407),l=r.default.extend({props:{title:{type:String,required:!0},icon:{type:String,required:!0},date:{type:String,required:!0}},computed:{formattedDate:function(){return Object(o.b)(this.date)}}}),d=(n(483),n(5)),c=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null).exports,m=r.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),h=(n(485),Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports),f=n(387),w=n(487),x=n(429),v=n(427),_=n(431),k=n(430),N=n(425),C=n(426),W=r.default.extend({components:{PageHeader:c,WhatsNew:h,ConfirmedCasesDetailsCard:N.a,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:C.a,TestedNumberCard:v.a,TelephoneAdvisoryReportsNumberCard:_.a,ConsultationDeskReportsNumberCard:k.a},data:function(){var data={Data:f,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("徳島県内の最新感染動向"),date:f.lastUpdate},newsItems:w.newsItems};return data},head:function(){return{title:this.$t("徳島県内の最新感染動向")}}}),y=(n(488),Object(d.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card")],1)],1)}),[],!1,null,"af5960b0",null));e.default=y.exports}}]);