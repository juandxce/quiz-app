(this["webpackJsonpcode-test"]=this["webpackJsonpcode-test"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n.n(c),o=n(21),i=n.n(o),s=n(44),u=n(129),l=n(127),p=n(19),j=n(66),b=n(59),d=n.n(b),h={userResponses:[],fetchingQuizSagaRequest:!1,quizQuestions:[],currentStep:0},f=Object(j.a)({name:"QuizApp",initialState:h,reducers:{fetchQuizSagaRequest:function(e){e.fetchingQuizSagaRequest=!0},setQuizQuestions:function(e,t){e.fetchingQuizSagaRequest=!1,e.quizQuestions=t.payload.map((function(e){return e.question=d.a.sanitize(e.question),e}))},setUserResponses:function(e,t){e.userResponses=t.payload},increaseCurrentStep:function(e){e.currentStep=e.currentStep+1},resetToInitialState:function(e){return h}}}),g=f.actions,m=f.reducer,x=n(27),O=n.n(x),v=Object(l.a)({spacer:{margin:"2vw auto",textAlign:"center"},btnTopSpace:{marginTop:"2vw"}}),w=function(e){var t=e.history,n=v(),a=Object(p.b)(),o=Object(p.c)((function(e){return e.QuizApp})),i=o.fetchingQuizSagaRequest,l=o.quizQuestions;return Object(c.useEffect)((function(){i||l.length||a(g.fetchQuizSagaRequest())}),[a,i,l.length]),Object(r.jsx)(O.a,{children:Object(r.jsxs)("div",{className:n.spacer,children:[Object(r.jsx)(s.a,{variant:"h3",gutterBottom:!0,children:"Welcome to the Trivia Challenge!"}),Object(r.jsx)(s.a,{children:"You will be presented with 10 True or False questions."}),Object(r.jsx)(s.a,{children:"Can you score 100%?"}),Object(r.jsx)(u.a,{variant:"outlined",color:"primary",onClick:function(){t.push("/start-quiz")},size:"large",className:n.btnTopSpace,children:"Begin"})]})})},z=a.a.memo(w),y=n(52),q=n(51),C=n(136),S=n(132),Q=n(131),k=n(130),A=n(42),R=n.n(A),N=Object(l.a)({questionCard:{maxWidth:"80vw",textAlign:"center",margin:"0 auto"},flexCenter:{justifyContent:"center"},clearColor:{color:"white"},CardMedia:{height:"40vh"}});function T(e){var t=e.question,n=void 0===t?"":t,c=e.options,a=void 0===c?[]:c,o=e.onAnswer,i=void 0===o?function(e){console.log("response:",e)}:o,l=N(),p=["#f50057","#3f51b5","orange","pink","red"];return Object(r.jsxs)(C.a,{className:l.questionCard,children:[Object(r.jsx)(k.a,{component:"img",alt:"CoolCategoryImage",image:"https://images.unsplash.com/photo-1583699998579-5872a2117151?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",title:"CoolCategoryImage",className:l.CardMedia}),Object(r.jsx)(Q.a,{children:Object(r.jsx)(s.a,{variant:"body1",color:"textSecondary",component:"p",children:R()(n)})}),Object(r.jsx)(S.a,{className:l.flexCenter,children:a.map((function(e,t){return Object(r.jsx)(u.a,{variant:"contained",onClick:function(){i(e.value)},size:"large",className:l.clearColor,style:{backgroundColor:e.color||p[t]},fullWidth:!0,children:e.value},t)}))})]})}var I=a.a.memo(T),B=n(11);function M(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}var F=Object(l.a)({spacer:{margin:"2vw auto",textAlign:"center"}}),W=function(){var e=F(),t=Object(p.b)(),n=Object(p.c)((function(e){return e.QuizApp})),a=n.fetchingQuizSagaRequest,o=n.currentStep,i=n.quizQuestions,u=Object(c.useState)([]),l=Object(q.a)(u,2),j=l[0],b=l[1],d=Object(c.useState)(!0),h=Object(q.a)(d,2),f=h[0],m=h[1],x=(null===i||void 0===i?void 0:i[o])||{},v=x.category,w=x.question,z=x.correct_answer,C=x.incorrect_answers,S=void 0===C?[]:C;Object(c.useEffect)((function(){a||i.length||t(g.fetchQuizSagaRequest())}),[t,a,i.length]);if(Object(c.useEffect)((function(){console.log("cardFader",f),f||setTimeout((function(){m(!0)}),100)}),[f]),o&&o===i.length)return t(g.setUserResponses(j)),Object(r.jsx)(B.a,{to:"/results"});var Q=[{value:z}].concat(Object(y.a)(S.map((function(e){return{value:e}}))));return Object(r.jsx)("div",{className:e.spacer,children:f&&Object(r.jsxs)(O.a,{children:[Object(r.jsx)(s.a,{gutterBottom:!0,variant:"h4",align:"center",children:v}),Object(r.jsx)(I,{question:w,category:v,options:M(Q),onAnswer:function(e){m(!1),b((function(t){return[].concat(Object(y.a)(t),[e])})),t(g.increaseCurrentStep())}})]})})},D=a.a.memo(W),E=n(133),P=n(134),_=n(135),Y=n(63),H=n.n(Y),G=Object(l.a)({correct:{backgroundColor:"rgba(117, 201, 84, 0.15)"},incorrect:{backgroundColor:"rgba(193, 66, 66, 0.15)"},listItem:{border:"1px solid #888",margin:"1vw 0",borderRadius:"10px"},spacer:{margin:"2vw auto",textAlign:"center"}}),J=function(e){var t=e.history,n=G(),c=Object(p.b)(),a=Object(p.c)((function(e){return e.QuizApp})),o=a.quizQuestions,i=a.userResponses,l=[],j=i.reduce((function(e,t,n){return o[n].correct_answer===t?(l[n]=e+1,e+1):e}),0);return Object(r.jsx)(O.a,{children:Object(r.jsx)("div",{className:n.spacer,children:i.length&&i.length===o.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(s.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["You Scored",Object(r.jsx)("br",{}),"".concat(j,"/").concat(o.length)]}),Object(r.jsx)(E.a,{dense:!0,children:o.map((function(e,t){var c=e.correct_answer===i[t];return Object(r.jsx)(P.a,{className:"".concat(n.listItem," ").concat(c?n.correct:n.incorrect),children:Object(r.jsx)(_.a,{primary:R()(e.question),secondary:c?"Correct Answer number: ".concat(l[t]):"Correct answer: ".concat(e.correct_answer," - your answer: ").concat(i[t])})},t)}))}),Object(r.jsx)(u.a,{variant:"outlined",color:"primary",size:"large",startIcon:Object(r.jsx)(H.a,{}),onClick:function(){c(g.resetToInitialState()),t.push("/")},children:"Play Again?"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"You haven't completed a quiz"}),Object(r.jsx)(u.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){t.push("/start-quiz")},children:"Start playing"})]})})})},L=a.a.memo(J),U=Object(l.a)({quizPageWrapper:{display:"flex",alignItems:"center",height:"100vh",overflow:"auto",flexDirection:"column"}});function V(){var e=U();return Object(r.jsx)("div",{className:"App ".concat(e.quizPageWrapper),children:Object(r.jsxs)(B.d,{children:[Object(r.jsx)(B.b,{exact:!0,path:"/",component:z}),Object(r.jsx)(B.b,{path:"/start-quiz",component:D}),Object(r.jsx)(B.b,{path:"/results",component:L})]})})}var X=a.a.memo(V),K=n(39),Z=n(12),$=n(64),ee=n(67),te=Object(Z.combineReducers)({QuizApp:m}),ne=n(20),re=n.n(ne),ce=n(29),ae=n(65);function oe(){return(oe=Object(ae.a)(re.a.mark((function e(){var t,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",e.next=3,fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");case 3:if((t=e.sent).ok){e.next=10;break}return e.t0=Error,e.next=8,t.text();case 8:throw e.t1=e.sent,new e.t0(e.t1);case 10:return e.next=12,t.json();case 12:return n=e.sent,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie={getQuizQuestions:function(){return oe.apply(this,arguments)}},se=re.a.mark(le),ue=re.a.mark(pe);function le(){var e;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ce.b)(5,500,ie.getQuizQuestions);case 2:return e=t.sent,t.next=5,Object(ce.a)(g.setQuizQuestions(e.results));case 5:case"end":return t.stop()}}),se)}function pe(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.d)(g.fetchQuizSagaRequest,le);case 2:case"end":return e.stop()}}),ue)}var je=re.a.mark(be);function be(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.c)(pe);case 2:case"end":return e.stop()}}),je)}var de=Object(ee.a)({}),he=[de],fe=Object(Z.createStore)(te,Object($.composeWithDevTools)(Z.applyMiddleware.apply(void 0,he)));window.store=fe,de.run(be);var ge=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(p.a,{store:fe,children:Object(r.jsx)(K.a,{children:Object(r.jsx)(B.d,{children:Object(r.jsx)(B.b,{path:"/",component:X})})})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(104);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(ge,{})}),document.getElementById("root")),me(console.log)}},[[105,1,2]]]);
//# sourceMappingURL=main.efefccdf.chunk.js.map