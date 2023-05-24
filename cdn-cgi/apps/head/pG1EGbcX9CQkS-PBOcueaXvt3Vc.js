;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="1938148467cb3dbdff509f85920b0138";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["JbPw8ZpUCn1D"]={appId:"P1xGIF6Nk8Zs",scope:{}};;CloudflareApps.installs["JbPw8ZpUCn1D"].options={"body":{"category":"sansSerif","fancy":"Lobster::latin","handwriting":"Indie+Flower::latin","monospace":"Inconsolata:400,700:latin","sansSerif":"Open+Sans:400,400italic,700:latin","serif":"Slabo+27px::latin"},"custom":[{"category":"serif","fancy":"Lobster::latin","handwriting":"Indie+Flower::latin","monospace":"Inconsolata:400,700:latin","sansSerif":"Open+Sans:400,400italic,700:latin","serif":"Slabo+27px::latin"}],"headers":{"category":"sansSerif","fancy":"Lobster::latin","handwriting":"Indie+Flower::latin","monospace":"Inconsolata:400,700:latin","sansSerif":"Montserrat:400,700:latin","serif":"Slabo+27px::latin"}};;if(CloudflareApps.matchPage(CloudflareApps.installs['JbPw8ZpUCn1D'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0);})
([(function(module,exports,__webpack_require__){"use strict";var _slicedToArray=(function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i['return'])_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError('Invalid attempt to destructure non-iterable instance')}}}())
function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}
(function(){if(!window.addEventListener)return
var STATE_ATTRIBUTE='data-cf-google-fonts-state'
var FONT_PATTERN=/\+/g
var FONT_TYPE={serif:'serif',sansSerif:'sans-serif',fancy:'cursive',handwriting:'cursive',monospace:'monospace'}
var loadingStyle=document.createElement('style')
loadingStyle.innerHTML='\n    body, body * {\n      color: transparent !important;\n    }\n  '
var googleFontLoader=document.createElement('script')
var fontStyles=document.createElement('style')
var options=CloudflareApps.installs['JbPw8ZpUCn1D'].options
function onFontLoadFinish(){document.body.setAttribute(STATE_ATTRIBUTE,'loaded')
loadingStyle.parentNode&&loadingStyle.parentNode.removeChild(loadingStyle)}
function updateElement(){var _options=options,headers=_options.headers,body=_options.body,custom=_options.custom
headers.selector='h1, h2, h3, h4, h5, h6, headers'
body.selector='body'
var fonts=[headers,body].concat(custom)
var families=fonts.map(function(_ref){var category=_ref.category,attrs=_objectWithoutProperties(_ref,['category'])
return attrs[category]})
window.WebFont.load({active:function active(){fontStyles.innerHTML=fonts.reduce(function(rules,_ref2){var category=_ref2.category,attrs=_objectWithoutProperties(_ref2,['category'])
var _attrs$category$split=attrs[category].split(':'),_attrs$category$split2=_slicedToArray(_attrs$category$split,1),fontFamily=_attrs$category$split2[0]
return rules+('\n            '+attrs.selector+' {\n              font-family: \''+fontFamily.replace(FONT_PATTERN,' ')+'\', '+FONT_TYPE[category]+' !important;\n            }\n          ')},'')
document.head.appendChild(fontStyles)
onFontLoadFinish()},inactive:function inactive(){onFontLoadFinish()},google:{families:families}})}
function bootstrap(){if("JbPw8ZpUCn1D"==='preview'){var _document$defaultView=document.defaultView.getComputedStyle(document.body),color=_document$defaultView.color
var devStylesheet=document.createElement('style')
devStylesheet.innerHTML='\n        body['+STATE_ATTRIBUTE+'] {\n          transition-duration: 150ms;\n          transition-property: color, text-shadow;\n          transition-timing-function: linear;\n        }\n\n        body['+STATE_ATTRIBUTE+'="updating"],\n        body['+STATE_ATTRIBUTE+'="updating"] * {\n          color: transparent !important;\n          text-shadow: 0 0 6px '+color+';\n        }\n      '
document.head.appendChild(devStylesheet)}
document.body.setAttribute(STATE_ATTRIBUTE,'boostrapping')
googleFontLoader.src='https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
googleFontLoader.async=true
googleFontLoader.addEventListener('load',updateElement)
document.head.appendChild(googleFontLoader)}
document.head.appendChild(loadingStyle)
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['JbPw8ZpUCn1D'].scope={setOptions:function setOptions(nextOptions){document.body.setAttribute(STATE_ATTRIBUTE,'updating')
options=nextOptions
updateElement()}}})()})]);}