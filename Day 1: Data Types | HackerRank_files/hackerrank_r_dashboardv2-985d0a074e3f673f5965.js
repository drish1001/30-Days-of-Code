(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"+FjN":function(e,t,a){"use strict";var r=a("QbLZ"),n=a.n(r),i=a("jo6Y"),s=a.n(i),o=a("cDcd"),l=a.n(o),c=a("17x9"),u=a.n(c),d=a("MGin"),p=a("YZNL"),m=a("OEX3");a("CTui");function h(e){var t=e.cardTitle,a=e.title,r=e.detail,i=e.buttonText,o=e.buttonClass,c=e.primaryCard,u=e.link,h=s()(e,["cardTitle","title","detail","buttonText","buttonClass","primaryCard","link"]);return l.a.createElement(d.Link,n()({className:"base-card",to:u},h),l.a.createElement(p.a,{layer:c?3:2,active:!0,title:t},l.a.createElement("h3",{className:"base-card-title",title:a},a),l.a.createElement("div",{className:"base-card-detail text-content"},r),i&&l.a.createElement(m.c,{className:o},i)))}h.propTypes={cardTitle:u.a.string,title:u.a.oneOfType([u.a.string,u.a.element]).isRequired,detail:u.a.oneOfType([u.a.string,u.a.element]).isRequired,buttonText:u.a.string,buttonClass:u.a.string,primaryCard:u.a.bool,link:u.a.string},h.defaultProps={buttonClass:"ui-btn-line-primary",primaryCard:!1},t.a=h},"+bxi":function(e,t,a){},"/AxJ":function(e,t,a){},"3//K":function(e,t,a){"use strict";a.r(t);var r=a("QbLZ"),n=a.n(r),i=a("Yz+Y"),s=a.n(i),o=a("iCc5"),l=a.n(o),c=a("V7oC"),u=a.n(c),d=a("FYw3"),p=a.n(d),m=a("mRg0"),h=a.n(m),f=a("cDcd"),v=a.n(f),y=a("faye"),b=a.n(y),k=a("17x9"),g=a.n(k),E=a("/MKj"),T=a("fvjX"),N=a("xeH2"),S=a.n(N),w=(a("mVoI"),function(e){function t(e){l()(this,t);var a=p()(this,(t.__proto__||s()(t)).call(this,e));return a.headerTitle={myTracks:"My tracks",yourSkills:"Your skills",tutorials:"Tutorials",exploreSkills:"Explore HackerRank Skills"},a}return h()(t,e),u()(t,[{key:"render",value:function(){return v.a.createElement("div",{className:"v2-section-header"},v.a.createElement("div",{className:"text-para-headline bold"},this.headerTitle[this.props.category]))}}]),t}(v.a.Component));w.propTypes={category:g.a.string.isRequired},w.propTypes={category:g.a.string.isRequired};var _=w,C=a("hiPE"),x=a("TkKc"),j=a("8Fln"),P=a("2VWb"),R=a("F6ln"),A=a("DzHm"),I=a("TSYQ"),O=a.n(I);a("oe+n");var L=function(e){function t(){var e,a,r,n;l()(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return a=r=p()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(o))),r.onClick=function(e){var t=r.props;(0,t.onClick)(t.options[e])},n=a,p()(r,n)}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props;this.state;return v.a.createElement("ul",{className:"horizontal-dropdown"},t.options.map(function(a,r){return v.a.createElement("li",{key:r,className:O()("horizontal-dropdown-item",{active:a.value===t.value}),onClick:e.onClick.bind(e,r)},a.name)}))}}]),t}(v.a.Component);L.propTypes={options:g.a.array.isRequired,value:g.a.any,onClick:g.a.func},L.defaultProps={value:null,onClick:function(){}};var M=L,D=a("p7rj"),F=a("OJx6"),V=a.n(F),W=(a("FkOY"),a("+bxi"),function(e){function t(e){l()(this,t);var a=p()(this,(t.__proto__||s()(t)).call(this,e));return a.displaySection=function(e){var t=e.target,r=t.checked,n=t.value;r&&n!==a.state.displayedSection&&a.setState({displayedSection:n,studentSelectionValue:null,professionalSelectionValue:null,disableSubmit:!0}),V.a.batch_track("Click","ProfiledSurvey",{attribute1:"DisplaySection",attribute2:n})},a.onClose=function(){a.setState({showModal:!1}),V.a.batch_track("Click","ProfiledSurvey",{attribute1:"Close"})},a.onSelectStudent=function(e){a.setState({studentSelectionValue:e.value,disableSubmit:!1}),V.a.batch_track("Click","ProfiledSurvey",{attribute1:"SelectStudent",attribute2:e.value})},a.onSelectProfessional=function(e){a.setState({professionalSelectionValue:e.value,disableSubmit:!1}),V.a.batch_track("Click","ProfiledSurvey",{attribute1:"SelectProfessional",attribute2:e.value})},a.submitSurvey=function(){var e=a.props.profileActions,t=a.state,r=t.studentSelectionValue,n=t.professionalSelectionValue,i=t.displayedSection;a.setState({showSuccess:!0}),setTimeout(function(){a.setState({showModal:!1})},1e3),e.updateProfile("me",{updated_modal_profiled_data:{updated:!0,graduating_year:r,work_start_year:a.getWorkStartYear(n)}}).then(function(){V.a.batch_track("Click","ProfiledSurvey",{attribute1:"Submit",attribute2:i,attribute3:r||n})})},a.state={displayedSection:null,studentSelectionValue:null,professionalSelectionValue:null,showModal:!1,showSuccess:!1,disableSubmit:!0},a}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.profileActions;void 0===t.profiledDataRequired&&(this.fetchProfileModalData=a.fetchProfileModalData(),this.fetchProfileModalData.then(function(t){!0===t.profiledDataRequired&&(e.setState({showModal:!0}),a.updateProfile("me",{updated_modal_profiled_data:{updated:!0}}),V.a.batch_track("ProfiledSurvey","ProfiledSurvey",{attribute1:"Survey Shown"}))}))}},{key:"componentWillUnmount",value:function(){this.fetchProfileModalData&&this.fetchProfileModalData.abort()}},{key:"getWorkStartYear",value:function(e){return null===e?null:(new Date).getFullYear()-e}},{key:"renderContent",value:function(){var e=this.state.disableSubmit,t=this.props.appUtil;return v.a.createElement("div",{className:"profiled-survey pjA"},v.a.createElement("div",{className:"fixed-top-right"},v.a.createElement("a",{className:"close",onClick:this.onClose},v.a.createElement("i",{className:"icon-cancel-small"}))),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"span16"},v.a.createElement("img",{src:t.assetPath("brand/h_mark_sm.png")})),v.a.createElement("div",{className:"span16 pdT"},v.a.createElement("div",{className:"color-dark fnt-sz-big fnt-wt-500 psB"},"Tell us about yourself"),v.a.createElement("div",{className:"color-alt-grey-dark fnt-sz-normal fnt-wt-500"},"I am a...")),v.a.createElement("div",{className:"span16 pjT color-alt-grey-dark fnt-sz-normal fnt-wt-500"},v.a.createElement("div",{className:"span8 text-right pjR"},v.a.createElement("div",{className:"pull-right"},v.a.createElement(R.a,{id:"radio-student",name:"profiled-survey-radio",label:"Student",onChange:this.displaySection,value:"student"}))),v.a.createElement("div",{className:"span8 text-left pjL"},v.a.createElement("div",{className:"pull-left"},v.a.createElement(R.a,{id:"radio-professional",name:"profiled-survey-radio",label:"Professional",onChange:this.displaySection,value:"professional"}))))),this.renderBody(),v.a.createElement("div",{className:"row text-center mjT psT"},v.a.createElement("button",{className:"btn btn-green",disabled:e,onClick:this.submitSurvey},"Submit")))}},{key:"renderBody",value:function(){switch(this.state.displayedSection){case"student":return this.renderStudentBody();case"professional":return this.renderProfessionalBody();case null:default:return v.a.createElement("div",{className:"row pjT"},v.a.createElement("div",{className:"span16 text-center"},"This will help us recommend jobs and challenges for you."))}}},{key:"renderStudentBody",value:function(){for(var e=this.props.appUtil,t=this.state.studentSelectionValue,a=[],r=(new Date).getFullYear(),n=r-2;n<=r+8;n++)a.push({label:n,value:n});return v.a.createElement("div",{className:"row pjT"},v.a.createElement("div",{className:"span16 text-center"},v.a.createElement("img",{src:e.assetPath("dashboard/survey/student-selection.svg")})),v.a.createElement("div",{className:"span16 pdT"},"Which year will you graduate?"),v.a.createElement("div",{className:"span16 pdT"},v.a.createElement("div",{className:"span3 block-center text-left"},v.a.createElement(j.c,{name:"student-selection",value:t,clearable:!1,searchable:!1,onChange:this.onSelectStudent,options:a}))))}},{key:"renderProfessionalBody",value:function(){for(var e=this.props.appUtil,t=this.state.professionalSelectionValue,a=[{name:"<1",value:0}],r=1;r<=9;r++)a.push({name:r,value:r});return a.push({name:"9+",value:10}),v.a.createElement("div",{className:"row pjT"},v.a.createElement("div",{className:"span16 text-center"},v.a.createElement("img",{src:e.assetPath("dashboard/survey/pro-selection.svg")})),v.a.createElement("div",{className:"span16 pdT"},"How many years of experience do you have"),v.a.createElement("div",{className:"span16 pdT"},v.a.createElement(M,{options:a,value:t,onClick:this.onSelectProfessional})))}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.showSuccess;return v.a.createElement(P.a,{modalClass:"survey-modal",open:t},t&&v.a.createElement(A.a,null,a?v.a.createElement("div",{className:"profiled-survey pjA"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"span16"},v.a.createElement("i",{className:"icon-ok fnt-sz-xbig color-green"})),v.a.createElement("div",{className:"span16 mjT"},"Thank you. This will help us recommend Jobs and challenges for you."))):this.renderContent()))}}]),t}(v.a.Component));W=Object(D.a)(W);var q=W=Object(E.b)(function(e){return{profiledDataRequired:e.community.profile.profiledDataRequired}},function(e){return{profileActions:Object(T.b)(x.a,e)}})(W),Y=a("7lYa"),B=a("o14C");function H(e){var t=e.badge,a=Object(B.g)(t);return v.a.createElement("div",{className:"skill-progress-bar"},v.a.createElement(Y.a,{value:a,theme:"theme-m"}),v.a.createElement("div",{className:"progress-count text-content"},v.a.createElement("span",{className:"percentage"},a,"%"),v.a.createElement("span",{className:"points-left"},Object(B.a)(t,"dashboard"))))}H.propTypes={badge:g.a.object};var K=a("mFgg"),U=a("+FjN"),Z=a("eOGF"),z=a("MHAo"),J=(a("3Of2"),a("/AxJ"),function(e){function t(){var e,a,r,n;l()(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return a=r=p()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(o))),r.sendMetrics=function(e){var t=r.props.track,a=t.type,n=t.slug,i=t.badge_type,s=t.level,o=t.stars,l=!!S()(e.target).closest("button").length?"button":"card",c=void 0;c="badge"===a?{attribute1:i,attribute2:s,attribute3:o,attribute4:l}:{attribute1:n,attribute4:l},V.a.batch_track("Click","BadgeTrackResumePractice",c)},n=a,p()(r,n)}return h()(t,e),u()(t,[{key:"getLink",value:function(){var e=this.props.track,t=e.type,a=e.slug,r=e.taxonomy;return e.slug===z.c.INTERVIEW_PREPARATION_KIT?"/interview/"+z.c.INTERVIEW_PREPARATION_KIT:"badge"===t?Object(B.c)(e):Object(Z.b)("/domains/"+("tutorial"===r?"tutorials/":"")+a,{filters:{status:["unsolved"]}})}},{key:"trackToBadgeConverter",value:function(e){var t=e.slug===z.c.INTERVIEW_PREPARATION_KIT;return n()({},e,{badge_type:e.slug,badge_name:e.name,stars:0,level:0,total_challenges:e.total_challenges||e.challenges_count,category_name:t?"Interview Preparation":e.category_name})}},{key:"render",value:function(){var e=this.props,t=e.track,a=e.primary,r=e.className,n=e.appUtil,i=t.type,s=this.getLink(),o="track"===i?this.trackToBadgeConverter(t):t,l=o.slug===z.c.INTERVIEW_PREPARATION_KIT;return v.a.createElement("div",{className:O()("skill-progress-card",r,{"interview-promotion-card":l})},v.a.createElement(U.a,{cardTitle:o.category_name,primaryCard:a,title:o.badge_name,detail:v.a.createElement(H,{badge:o}),buttonText:"Continue Practice",buttonClass:O()("ui-btn-large",a?"ui-btn-primary":"ui-btn-line-primary"),onClick:this.sendMetrics,link:s}),"badge"===o.type&&v.a.createElement("div",{className:"badge-wrap"},v.a.createElement(K.b,{badge:o,shadow:!0})),l&&v.a.createElement("div",{className:"interview-banner"},v.a.createElement("img",{className:"new-banner-svg",alt:"New",src:n.assetPath("svgs/new-banner.svg")})))}}]),t}(f.PureComponent));J.propTypes={track:g.a.object,primary:g.a.bool,appUtil:g.a.object.isRequired};var G=J=Object(D.a)(J),Q=function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"getContent",value:function(){return this.props.hasRecent?"HackerRank offers a variety of skills for you to practice. Feel free to choose an additional programming language too.":"Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.hasRecent,r=e.className,n=this.getContent();return v.a.createElement("div",{className:O()("explore-skill-card",r)},v.a.createElement(U.a,{cardTitle:t,title:a?"Add another skill":"Add your first skill",detail:n,buttonText:"Explore Skills",buttonClass:"ui-btn-large ui-btn-line-primary",onClick:this.props.animateToSkills,"data-analytics":a?"AddAnotherSkill":"AddFirstSkill"}))}}]),t}(f.PureComponent);Q.propTypes={text:g.a.string.isRequired,hasRecent:g.a.bool.isRequired,animateToSkills:g.a.func.isRequired},Q.defaultProps={text:"",hasRecent:!1};var X=Q,$=function(e){function t(){var e,a,r,n;l()(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return a=r=p()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(o))),r.updateInterviewTryStatus=function(){var e=r.props,t=e.profile,a=e.profileActions;t&&t.username&&!t.tried_interview_prep&&a.updateProfile("me",{tried_interview_prep:!0})},n=a,p()(r,n)}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.appUtil;return v.a.createElement("div",{className:O()("interview-promotion-card",t),onClick:this.updateInterviewTryStatus},v.a.createElement("div",{className:"interview-banner"},v.a.createElement("img",{className:"new-banner-svg",alt:"New",src:a.assetPath("svgs/new-banner.svg")})),v.a.createElement(U.a,{cardTitle:"Interview Preparation",title:"Interview Preparation Kit",detail:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare for your upcoming interviews.",buttonText:"View",buttonClass:"ui-btn-large ui-btn-primary",link:"/interview/"+z.c.INTERVIEW_PREPARATION_KIT,"data-analytics":"InterviewPromotionCard"}))}}]),t}(v.a.Component);$.propTypes={className:g.a.string,profileActions:g.a.object.isRequired,profile:g.a.object.isRequired,appUtil:g.a.object.isRequired};var ee=$=Object(T.d)(D.a,Object(E.b)(null,function(e){return{profileActions:Object(T.b)(x.a,e)}}))($),te=a("KJde"),ae=a.n(te),re=(a("OlZa"),function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"getInterviewPreparationDetails",value:function(){return{short_description:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare",short_name:"Interview Preparation Kit",title:"Interview Preparation",slug:z.c.INTERVIEW_PREPARATION_KIT}}},{key:"renderTutorialCard",value:function(e){var t=e.title,a=e.slug,r=e.short_description,n=e.tagline,i=e.is_recent,s=e.short_name,o=e.name,l=void 0,c=void 0,u=void 0;a===z.c.INTERVIEW_PREPARATION_KIT?(u="/interview",c="ViewTutorial",l="View Tutorial"):(u="/domains/tutorials/"+a,c=i?"ResumeTutorial":"StartTutorial",l=i?"Resume Tutorial":"Start Tutorial");var d=v.a.createElement("div",null,v.a.createElement("div",{className:"tutorial-content text-content"},v.a.createElement(ae.a,{text:r||n,maxLine:"2",ellipsis:"...",basedOn:"letters"})),v.a.createElement("div",{className:"start-tutorial bold"},l));return v.a.createElement("div",{key:a,className:"tutorial-card-box"},v.a.createElement("div",{className:"tutorial-card-tile"},v.a.createElement(U.a,{cardTitle:t||"Tutorial","data-analytics":c,"data-attr1":a,title:s||o,detail:d,link:u})))}},{key:"render",value:function(){var e=this.props.tracks;return v.a.createElement("div",{className:"tutorials-section"},v.a.createElement("div",{className:"tutorial-row"},this.renderTutorialCard(this.getInterviewPreparationDetails()),e.map(this.renderTutorialCard)))}}]),t}(f.PureComponent));re.propTypes={tracks:g.a.array.isRequired};var ne=re,ie=a("MGin"),se=a("YZNL"),oe=(a("Zmvw"),function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"renderCategory",value:function(e){return e.tracks.map(function(t){return v.a.createElement("div",{className:e.slug+"-info",key:t.name},v.a.createElement(ie.Link,{to:"/domains/"+t.slug,"data-analytics":"TrackLink","data-attr1":e.slug,"data-attr2":t.slug},v.a.createElement("div",{className:"track-item bold"},v.a.createElement("div",{className:"track-name"},t.name))))})}},{key:"renderSkillSection",value:function(){var e=this;return this.props.tracks.map(function(t){return"Tutorials"===t.name?null:v.a.createElement(se.a,{title:t.name,key:t.name},v.a.createElement("div",{className:"skills-category"},e.renderCategory(t)))})}},{key:"render",value:function(){return v.a.createElement("div",{className:"skills-section"},v.a.createElement("div",{className:"skills-wrapper"},this.renderSkillSection()))}}]),t}(f.PureComponent));oe.propTypes={tracks:g.a.array.isRequired};var le=oe,ce=a("R5/Y"),ue=a.n(ce);a("kZhj");a.d(t,"PureDashboard",function(){return pe});var de=function(e){function t(){return l()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.startIntroTourCheck()}},{key:"tourAnalytics",value:function(e,t){var a={attribute1:t};V.a.track("Click",e,a)}},{key:"showIntroTour",value:function(){this.introjs||(this.introjs=ue.a.introJs(),this.introjs.setOptions({showStepNumbers:!1,showBullets:!1,showButtons:!0,scrollToElement:!0,exitOnEsc:!0,exitOnOverlayClick:!1,keyboardNavigation:!1,disableInteraction:!0,tooltipClass:"theme-m",steps:this.getIntroSteps()}).start(),S()(".introjs-tooltiptext").addClass("text-content"),this.handleIntroEvents())}},{key:"getIntroSteps",value:function(){var e=!!S()(this.tourSkillCard).find(".badge-wrap")[0]?"\n      <div class='introjs-tooltip-heading'>\n        Introducing Badges\n      </div>\n      <div>\n        You can now earn badges as you progress through some of our most popular tracks.\n      </div>\n      Solve harder challenges to earn more points and level-up faster.":"\n      <div class='introjs-tooltip-heading'>\n        Improved Dashboard and Badges\n      </div>\n      <div class=\"introjs-tooltip-subheading\">\n        We've upgraded your dashboard!\n      </div>\n      You can now also earn badges as you progress through some of our most popular tracks.\n    ";return[{element:this.tourSkillCard,intro:e,position:"top",dataAttr:"DashboardCard"},{element:this.tourExploreCard,intro:"<div class='introjs-tooltip-heading'>Explore Skills</div>Use this to explore the various tracks, skills and tutorials available on HackerRank.",position:"top",dataAttr:"ExploreSkills"},{element:this.tourFeedbackWidget,intro:"<div class='introjs-tooltip-heading'>Feedback Widget</div>Share your feedback with us, and tell us how we can make this new experience better for you.",position:"left",dataAttr:"FeedbackWidget"}].filter(function(e){return!!e.element})}},{key:"handleIntroEvents",value:function(){var e=this,t=this.getIntroSteps();this.introjs.onexit(function(){if(!e.introJsCompleted){var a=t[e.introjs._currentStep]||{};e.tourAnalytics("BadgeUXSkip",a.dataAttr)}}),this.introjs.onchange(function(){var a=void 0,r=e.introjs._currentStep;"forward"===e.introjs._direction?(a="BadgeUXNext",r-=1):(a="BadgeUXBack",r+=1);var n=t[r]||{};e.tourAnalytics(a,n.dataAttr)}),this.introjs.oncomplete(function(){var a=t[e.introjs._currentStep]||{};e.tourAnalytics("BadgeUXDone",a.dataAttr),e.introJsCompleted=!0})}},{key:"componentWillUnmount",value:function(){this.introjs&&this.introjs.exit()}},{key:"animateToSkills",value:function(){S()("body, html").animate({scrollTop:S()(this.mySkills).offset().top-20},300)}},{key:"getTutorialTracks",value:function(){return(this.props.trackGroups.filter(function(e){return"tutorials"===e.slug})[0]||{}).tracks}},{key:"getCategorizedMyTracks",value:function(){var e=this.props,t=e.trackGroups,a=e.myTracks,r={};return t.forEach(function(e){e.tracks.forEach(function(t){r[t.slug]=e.name})}),a.map(function(e){return n()({},e,{category_name:e.category_name||e.badge_name||r[e.slug]})})}},{key:"tourComponentsLoaded",value:function(){return this.tourSkillCard&&this.tourExploreCard&&this.tourFeedbackWidget}},{key:"startIntroTourCheck",value:function(){var e=this.props,t=e.profile,a=e.profileActions;this.tourComponentsLoaded()&&t.username&&"opted-in"===t.badges_opt_in_status&&(a.updateProfile("me",{badges_opt_in_status:"tour-visited"}),this.showIntroTour())}},{key:"renderMyTracks",value:function(){var e=this,t=this.props.profile,a=t.tried_interview_prep,r=this.getCategorizedMyTracks(),n=a?4:3;return v.a.createElement("div",{className:"my-tracks"},v.a.createElement(_,{category:"yourSkills"}),v.a.createElement("div",{className:"tracks-row"},!a&&v.a.createElement(ee,{className:"card-box",profile:t}),r.slice(0,n).map(function(t,r){return v.a.createElement(G,{ref:function(t){0===r&&(e.tourSkillCard=b.a.findDOMNode(t))},primary:!!a&&0===r,className:"card-box",key:t.badge_type||t.slug,track:t})}),!r.length&&v.a.createElement(X,{ref:function(t){e.tourExploreCard=b.a.findDOMNode(t)},text:"New Skill",className:"card-box",hasRecent:r.length>0,animateToSkills:this.animateToSkills.bind(this)})))}},{key:"renderTutorials",value:function(){var e=this.getTutorialTracks();return e?v.a.createElement("div",{className:"my-tutorials"},v.a.createElement(_,{category:"tutorials"}),v.a.createElement(ne,{tracks:e})):null}},{key:"renderAllSkills",value:function(){var e=this,t=this.props.trackGroups;return v.a.createElement("div",{className:"my-skills",ref:function(t){e.mySkills=t}},v.a.createElement(_,{category:"exploreSkills"}),v.a.createElement(le,{tracks:t}))}},{key:"render",value:function(){return v.a.createElement("div",{className:"container dashboard-page dashboard-v2"},v.a.createElement(q,null),this.renderMyTracks(),this.renderAllSkills(),this.renderTutorials())}}]),t}(v.a.Component);de.propTypes={profile:g.a.object.isRequired,dashboardActions:g.a.object,myTracks:g.a.array.isRequired,trackGroups:g.a.array.isRequired,showAllTracks:g.a.bool.isRequired};var pe=de;de=Object(E.b)(function(e){var t=e.community,a=t.profile,r=t.dashboard;return{profile:a,myTracks:r.myTracks,trackGroups:r.trackGroups,showAllTracks:r.showAllTracks}},function(e){return{dashboardActions:Object(T.b)(C.a,e),profileActions:Object(T.b)(x.a,e)}})(de);t.default=de},"3Of2":function(e,t,a){},AsEK:function(e,t,a){},CTui:function(e,t,a){},F6ln:function(e,t,a){"use strict";var r=a("QbLZ"),n=a.n(r),i=a("jo6Y"),s=a.n(i),o=a("cDcd"),l=a.n(o),c=a("17x9"),u=a.n(c),d=a("TSYQ"),p=a.n(d),m=(a("RFbB"),function(e){var t=e.onChange,a=s()(e,["onChange"]);return delete a.isLabelHTML,l.a.createElement("div",{className:p()("custom-radio-v3",e.className)},l.a.createElement("input",n()({type:"radio",onChange:t},a)),l.a.createElement("span",{className:"check"}),e.label&&e.isLabelHTML?l.a.createElement("label",{htmlFor:e.id,dangerouslySetInnerHTML:{__html:e.label}}):l.a.createElement("label",{htmlFor:e.id},e.label))});m.propTypes={id:u.a.string,label:u.a.string,onChange:u.a.func},t.a=m},KJde:function(e,t,a){"use strict";var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();var n=a("cDcd"),i=a("LH3R"),s=i.canvasStyle,o=i.mirrorProps;function l(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={text:e.text,clamped:!1},a.units=[],a.maxLine=0,a.canvas=null,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.reflow(e)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"initCanvas",value:function(){if(!this.canvas){var e=this.canvas=document.createElement("div");e.className="LinesEllipsis-canvas "+this.props.className,this.copyStyleToCanvas(),Object.keys(s).forEach(function(t){e.style[t]=s[t]}),document.body.appendChild(e)}}},{key:"copyStyleToCanvas",value:function(){var e=this,t=window.getComputedStyle(this.target);o.forEach(function(a){e.canvas.style[a]=t[a]})}},{key:"reflow",value:function(e){var t=e.basedOn||/^[\x00-\x7F]+$/.test(e.text)?"words":"letters";switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error("Unsupported options basedOn: "+t)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map(function(e){return"<span class='LinesEllipsis-unit'>"+e+"</span>"}).join("");var a=this.putEllipsis(this.calcIndexes()),r=a>-1;this.setState({clamped:r,text:r?this.units.slice(0,a).join(""):e.text})}},{key:"calcIndexes",value:function(){var e=[0],t=this.canvas.firstElementChild;if(!t)return e;for(var a=0,r=1,n=t.offsetTop;(t=t.nextElementSibling)&&(t.offsetTop>n&&(r++,e.push(a),n=t.offsetTop),a++,!(r>this.maxLine)););return e}},{key:"putEllipsis",value:function(e){if(e.length<=this.maxLine)return-1;var t=e[this.maxLine],a=this.units.slice(0,t),r=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(function(e,t){return"<span class='LinesEllipsis-unit'>"+e+"</span>"}).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>"+this.props.ellipsis+"</span>";for(var n=this.canvas.lastElementChild,i=l(n,2);i&&(n.offsetTop>r||n.offsetHeight>i.offsetHeight||n.offsetTop>i.offsetTop);)this.canvas.removeChild(i),i=l(n,2),a.pop();return a.length}},{key:"isClamped",value:function(){return this.state.clamped}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,r=t.clamped,i=this.props,s=i.component,o=i.ellipsis,l=i.trimRight,c=i.className;return n.createElement(s,{className:"LinesEllipsis "+(r?"LinesEllipsis--clamped":"")+" "+c,ref:function(t){return e.target=t}},r&&l?a.replace(/[\s\uFEFF\xA0]+$/,""):a,n.createElement("wbr",null),r&&n.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}]),t}();c.defaultProps={component:"div",text:"",maxLine:1,ellipsis:"…",trimRight:!0,className:""},e.exports=c},LH3R:function(e,t,a){"use strict";e.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","padding-left","padding-right"]}},OlZa:function(e,t,a){},RFbB:function(e,t,a){},YZNL:function(e,t,a){"use strict";var r=a("QbLZ"),n=a.n(r),i=a("jo6Y"),s=a.n(i),o=a("cDcd"),l=a.n(o),c=a("TSYQ"),u=a.n(c);a("AsEK");function d(e){var t=e.title,a=e.layer,r=e.active,i=e.className,o=e.children,c=s()(e,["title","layer","active","className","children"]);return l.a.createElement("div",n()({className:u()("ui-card",i,"ui-layer-"+a,{"active-card":r})},c),t&&l.a.createElement("h5",{className:"ui-title text-sec-headline-xs"},t),l.a.createElement("div",{className:"card-content"},o))}d.defaultProps={title:"",layer:2,active:!1},t.a=d},Zmvw:function(e,t,a){},kZhj:function(e,t,a){},mVoI:function(e,t,a){},"oe+n":function(e,t,a){}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/hackerrank_r_dashboardv2-985d0a074e3f673f5965.js.map