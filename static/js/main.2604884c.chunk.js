(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={container:"Statistics_container__276hK",option:"Statistics_option__32ZDU"}},,function(e,t,n){e.exports={btnContainer:"FeedbackOptions_btnContainer__2ZBpS",btnOption:"FeedbackOptions_btnOption__2h9MH"}},function(e,t,n){e.exports={section:"Section_section___I0IU",title:"Section_title__3SCLu"}},,,,,function(e,t,n){e.exports={container:"Container_container__4iWRH"}},function(e,t,n){e.exports={notification:"Notification_notification__3S_ux"}},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),o=n(6),s=n.n(o),r=(n(19),n(20),n(7)),l=n(8),d=n(9),b=n(13),u=n(12),j=n(10),p=n.n(j);function h(e){var t=e.children;return Object(a.jsx)("div",{className:p.a.container,children:t})}var v=n(4),O=n.n(v);function f(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:O.a.btnContainer,children:t.map((function(e){return Object(a.jsx)("button",{className:O.a.btnOption,name:e,onClick:n,children:e[0].toUpperCase()+e.slice(1)},e)}))})}var x=n(2),_=n.n(x);function k(e){var t=e.good,n=e.neutral,i=e.bad,c=e.total,o=e.positivePercentage;return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsxs)("span",{className:_.a.option,children:["Good: ",t]}),Object(a.jsxs)("span",{className:_.a.option,children:["Neutral: ",n]}),Object(a.jsxs)("span",{className:_.a.option,children:["Bad: ",i]}),Object(a.jsxs)("span",{className:_.a.option,children:["Total: ",c]}),Object(a.jsxs)("span",{className:_.a.option,children:["Positive feedback: ",o,"%"]})]})}var m=n(5),g=n.n(m);function N(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:g.a.section,children:[Object(a.jsx)("h2",{className:g.a.title,children:t}),n]})}var F=n(11),S=n.n(F);function P(e){var t=e.message;return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:S.a.notification,children:t})})}var C=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.handleFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(100*t/n)||0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,i=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(a.jsx)("div",{children:Object(a.jsxs)(h,{children:[Object(a.jsx)(N,{title:"Please leave feedback",children:Object(a.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:this.handleFeedback})}),c>0?Object(a.jsx)(N,{title:"Statistics",children:Object(a.jsx)(k,{good:t,bad:i,neutral:n,total:c,positivePercentage:o})}):Object(a.jsx)(P,{message:"No feedback given \ud83d\ude14"})]})})}}]),n}(i.Component);C.defaultProps={initialValue:0},s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2604884c.chunk.js.map