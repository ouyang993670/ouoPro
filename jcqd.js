/**
 * 脚本地址：https://github.com/ouyang993670/ouoPro/blob/main/jcqd.js
 * 说明：机场地址：https://purefast.net/auth/login 
 * 机场签到获得免费流量，使用jc_TOKEN填入这样得格式数据 账号&密码&	                   
 * 变量格式：export jc_TOKEN='xx@qq.com&xxx&'  多个账号用 \n分割 
 * 定时 10 50 12  * * *
 */
/*Obfuscated by JShaman.com*/const jsname='机场';const $=Env(jsname);const notify=$['isNode']()?require('./sendNotify'):'';const Notify=0x822e8^0x822e9;const debug=0x8cf3c^0x8cf3c;const request=require('request');let user_data=process['env']['jc_TOKEN'];let user_dataArr=[];let data='';let msg='';let setCookie='';!(async()=>{if(!await Envs())return;else{console['log']('\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：'+new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*(0x58c43^0x58c7f)*(0xc98dc^0xc9b34)+(0x30aa0^0x30aa8)*(0xaa308^0xaa334)*(0x1fb90^0x1fbac)*(0x84365^0x8408d))['toLocaleString']()+'\x20\x0a=============================================\x0a');await wyy();console['log']('\x0a===================\x20共找到\x20'+user_dataArr['length']+'\x20个账号\x20===================');let _0x8eacaf=0xc4e03^0xc4e03;for(let _0x23defc of user_dataArr){data=user_dataArr[_0x8eacaf]['split']('&');console['log']('\x0a=========\x20开始【第\x20'+(_0x8eacaf+(0x1d163^0x1d162))+'\x20个账号】=========\x0a');console['log']('开始登录');await login(_0x23defc);console['log']('开始签到');await qiandao(_0x23defc);_0x8eacaf++;}}})()['catch'](_0x2a1157=>console['log'](_0x2a1157))['finally'](()=>{$['done']();});async function login(_0x70397e){var _0x1bd3ce={'method':'POST','url':'https://purefast.net/auth/login','headers':{'authority':'purefast.net','method':'POST','path':'/auth/login','scheme':'https','accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','accept-language':'zh-CN,zh;q=0.9','origin':'https://purefast.net','referer':'https://purefast.net/auth/login','sec-ch-ua':'\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22','sec-ch-ua-mobile':'?0','sec-ch-ua-platform':'\x22Windows\x22','sec-fetch-dest':'empty','sec-fetch-mode':'cors','sec-fetch-site':'same-origin','user-agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/103.0.5060.66\x20Safari/537.36','x-requested-with':'XMLHttpRequest','Cookie':'lang=zh-cn','content-type':'application/x-www-form-urlencoded;\x20charset=UTF-8','Host':'purefast.net','Connection':'keep-alive'},'form':{'email':_0x70397e[0x9d48a^0x9d48a],'passwd':_0x70397e[0x1],'code':''}};request(_0x1bd3ce,function(_0x4c5a5c,_0xbb11b8){if(_0x4c5a5c)console['log']('\x0a【登录】\x20失败\x20❌\x20了呢,可能是网络被外星人抓走了!\x0a\x20');setCookie=_0xbb11b8['headers']['set-cookie'];console['log']('\x0a【登录】\x20成功\x0a');});await $['wait'](0x2*(0xaf490^0xaf778));}async function qiandao(_0x173a5e){var _0x32a304={'method':'POST','url':'https://purefast.net/user/checkin','headers':{'Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','Accept-Language':'zh-CN,zh;q=0.9','Connection':'keep-alive','Host':'purefast.net','Referer':'https://purefast.net/user','sec-ch-ua':'\x22.Not/A)Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22103\x22,\x20\x22Chromium\x22;v=\x22103\x22','sec-ch-ua-mobile':'?0','sec-ch-ua-platform':'\x22Windows\x22','Sec-Fetch-Mode':'cors','Sec-Fetch-Site':'same-origin','User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20WOW64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/103.0.5060.66\x20Safari/537.36','X-Requested-With':'XMLHttpRequest','Cookie':setCookie}};request(_0x32a304,function(_0x3f3b89,_0x5d56f8){if(_0x3f3b89)console['log']('\x0a【签到】\x20失败\x20❌\x20了呢,可能是网络被外星人抓走了!\x0a\x20');console['log']('\x0a签到成功');});await $['wait'](0xb8807^0xb8fd7);}async function Envs(){if(user_data){if(user_data['indexOf']('\x0a')!=-0x1){user_data['split']('\x0a')['forEach'](_0x3acfca=>{user_dataArr['push'](_0x3acfca);});}else{user_dataArr['push'](user_data);}}else{console['log']('\x0a\x20【'+$['name']+'】：未填写变量\x20user_data');return;}return!![];}async function SendMsg(_0x322b7f){if(!_0x322b7f)return;if(Notify>0x0){if($['isNode']()){var _0x4d7f1a=require('./sendNotify');await _0x4d7f1a['sendNotify']($['name'],_0x322b7f);}else{$['msg'](_0x322b7f);}}else{console['log'](_0x322b7f);}}function randomString(_0x4b2fed){_0x4b2fed=_0x4b2fed||0x20;var _0x5af45b='QWERTYUIOPASDFGHJKLZXCVBNM1234567890',_0x246910=_0x5af45b['length'],_0x5db971='';for(i=0x79a71^0x79a71;i<_0x4b2fed;i++)_0x5db971+=_0x5af45b['charAt'](Math['floor'](Math['random']()*_0x246910));return _0x5db971;}function randomInt(_0x3096b4,_0x331665){return Math['round'](Math['random']()*(_0x331665-_0x3096b4)+_0x3096b4);}function wyy(_0x233464=0x3*(0x230a2^0x2334a)){return new Promise(_0x451f81=>{let _0x3a1f18={'url':'https://keai.icu/apiwyy/api'};$['get'](_0x3a1f18,async(_0x3ce0df,_0x329025,_0xea02cc)=>{try{_0xea02cc=JSON['parse'](_0xea02cc);console['log']('\x0a\x20【网抑云时间】:\x20'+_0xea02cc['content']+'\x20\x20by--'+_0xea02cc['music']);}catch(_0x909f85){console['logErr'](_0x909f85,_0x329025);}finally{_0x451f81();}},_0x233464);});}function Env(_0x264622,_0x54e504){'undefined'!=typeof process&&JSON['stringify'](process['env'])['indexOf']('GITHUB')>-0x1&&process['exit'](0x0);class _0x1629be{constructor(_0x394faf){this['env']=_0x394faf;}['send'](_0x9f155f,_0x4b22bd='GET'){_0x9f155f='string'==typeof _0x9f155f?{'url':_0x9f155f}:_0x9f155f;let _0x513d48=this['get'];return'POST'===_0x4b22bd&&(_0x513d48=this['post']),new Promise((_0x3bcc5e,_0x1f6298)=>{_0x513d48['call'](this,_0x9f155f,(_0x4833ba,_0x48a6cb,_0x38a666)=>{_0x4833ba?_0x1f6298(_0x4833ba):_0x3bcc5e(_0x48a6cb);});});}['get'](_0x4772c7){return this['send']['call'](this['env'],_0x4772c7);}['post'](_0x39e622){return this['send']['call'](this['env'],_0x39e622,'POST');}}return new class{constructor(_0x20eee2,_0x6c3e83){this['name']=_0x20eee2,this['http']=new _0x1629be(this),this['data']=null,this['dataFile']='box.dat',this['logs']=[],this['isMute']=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x6c3e83),this['log']('','🔔'+this['name']+',\x20开始!');}['isNode'](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){return'undefined'!=typeof $task;}['isSurge'](){return'undefined'!=typeof $httpClient&&'undefined'==typeof $loon;}['isLoon'](){return'undefined'!=typeof $loon;}['toObj'](_0x5283eb,_0xe651fa=null){try{return JSON['parse'](_0x5283eb);}catch{return _0xe651fa;}}['toStr'](_0x11388c,_0x5cbdf0=null){try{return JSON['stringify'](_0x11388c);}catch{return _0x5cbdf0;}}['getjson'](_0x3aacfa,_0x3b01e5){let _0x4dad50=_0x3b01e5;const _0x2539d8=this['getdata'](_0x3aacfa);if(_0x2539d8)try{_0x4dad50=JSON['parse'](this['getdata'](_0x3aacfa));}catch{}return _0x4dad50;}['setjson'](_0x5c5f6f,_0x37d34e){try{return this['setdata'](JSON['stringify'](_0x5c5f6f),_0x37d34e);}catch{return!(0xac7ea^0xac7eb);}}['getScript'](_0xe77b0a){return new Promise(_0x438dd1=>{this['get']({'url':_0xe77b0a},(_0x1fb416,_0x2aabd7,_0x23084e)=>_0x438dd1(_0x23084e));});}['runScript'](_0x1bcee8,_0x29c2a8){return new Promise(_0x45638f=>{let _0x4459a6=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x4459a6=_0x4459a6?_0x4459a6['replace'](/\n/g,'')['trim']():_0x4459a6;let _0x3da0f4=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x3da0f4=_0x3da0f4?0x1*_0x3da0f4:0x8e667^0x8e673,_0x3da0f4=_0x29c2a8&&_0x29c2a8['timeout']?_0x29c2a8['timeout']:_0x3da0f4;const [_0x9a6349,_0x31347f]=_0x4459a6['split']('@'),_0x1940ea={'url':'http://'+_0x31347f+'/v1/scripting/evaluate','body':{'script_text':_0x1bcee8,'mock_type':'cron','timeout':_0x3da0f4},'headers':{'X-Key':_0x9a6349,'Accept':'*/*'}};this['post'](_0x1940ea,(_0x4681ed,_0x3174c6,_0x5ac0e6)=>_0x45638f(_0x5ac0e6));})['catch'](_0x37378b=>this['logErr'](_0x37378b));}['loaddata'](){if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x1685e3=this['path']['resolve'](this['dataFile']),_0x3165fb=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x3414ac=this['fs']['existsSync'](_0x1685e3),_0x572ac1=!_0x3414ac&&this['fs']['existsSync'](_0x3165fb);if(!_0x3414ac&&!_0x572ac1)return{};{const _0x25c29b=_0x3414ac?_0x1685e3:_0x3165fb;try{return JSON['parse'](this['fs']['readFileSync'](_0x25c29b));}catch(_0x15e797){return{};}}}}['writedata'](){if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x383919=this['path']['resolve'](this['dataFile']),_0x1d624e=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x1ad103=this['fs']['existsSync'](_0x383919),_0x2add61=!_0x1ad103&&this['fs']['existsSync'](_0x1d624e),_0x35c0ac=JSON['stringify'](this['data']);_0x1ad103?this['fs']['writeFileSync'](_0x383919,_0x35c0ac):_0x2add61?this['fs']['writeFileSync'](_0x1d624e,_0x35c0ac):this['fs']['writeFileSync'](_0x383919,_0x35c0ac);}}['lodash_get'](_0x33e864,_0x280ec0,_0x264d69){const _0x48a627=_0x280ec0['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0xc8c4d4=_0x33e864;for(const _0x4b79e0 of _0x48a627)if(_0xc8c4d4=Object(_0xc8c4d4)[_0x4b79e0],void 0x0===_0xc8c4d4)return _0x264d69;return _0xc8c4d4;}['lodash_set'](_0x26c90c,_0x16b7b4,_0x3be595){return Object(_0x26c90c)!==_0x26c90c?_0x26c90c:(Array['isArray'](_0x16b7b4)||(_0x16b7b4=_0x16b7b4['toString']()['match'](/[^.[\]]+/g)||[]),_0x16b7b4['slice'](0xea922^0xea922,-(0xccdb6^0xccdb7))['reduce']((_0x2cfd49,_0x35a171,_0x5ae7ce)=>Object(_0x2cfd49[_0x35a171])===_0x2cfd49[_0x35a171]?_0x2cfd49[_0x35a171]:_0x2cfd49[_0x35a171]=Math['abs'](_0x16b7b4[_0x5ae7ce+(0x56c54^0x56c55)])>>(0x43db1^0x43db1)==+_0x16b7b4[_0x5ae7ce+0x1]?[]:{},_0x26c90c)[_0x16b7b4[_0x16b7b4['length']-0x1]]=_0x3be595,_0x26c90c);}['getdata'](_0x224fa6){let _0x4a3f81=this['getval'](_0x224fa6);if(/^@/['test'](_0x224fa6)){const [,_0x5afa26,_0x4a0c7f]=/^@(.*?)\.(.*?)$/['exec'](_0x224fa6),_0xc4a5e=_0x5afa26?this['getval'](_0x5afa26):'';if(_0xc4a5e)try{const _0x14e80=JSON['parse'](_0xc4a5e);_0x4a3f81=_0x14e80?this['lodash_get'](_0x14e80,_0x4a0c7f,''):_0x4a3f81;}catch(_0xfdb198){_0x4a3f81='';}}return _0x4a3f81;}['setdata'](_0x37eb78,_0x5bb025){let _0x282229=!0x1;if(/^@/['test'](_0x5bb025)){const [,_0x29f26e,_0x17f3bf]=/^@(.*?)\.(.*?)$/['exec'](_0x5bb025),_0x53f479=this['getval'](_0x29f26e),_0xc13c54=_0x29f26e?'null'===_0x53f479?null:_0x53f479||'{}':'{}';try{const _0x43e48c=JSON['parse'](_0xc13c54);this['lodash_set'](_0x43e48c,_0x17f3bf,_0x37eb78),_0x282229=this['setval'](JSON['stringify'](_0x43e48c),_0x29f26e);}catch(_0x2391e2){const _0x1ad475={};this['lodash_set'](_0x1ad475,_0x17f3bf,_0x37eb78),_0x282229=this['setval'](JSON['stringify'](_0x1ad475),_0x29f26e);}}else _0x282229=this['setval'](_0x37eb78,_0x5bb025);return _0x282229;}['getval'](_0x4b0835){return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x4b0835):this['isQuanX']()?$prefs['valueForKey'](_0x4b0835):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x4b0835]):this['data']&&this['data'][_0x4b0835]||null;}['setval'](_0x32c25c,_0x2bfd19){return this['isSurge']()||this['isLoon']()?$persistentStore['write'](_0x32c25c,_0x2bfd19):this['isQuanX']()?$prefs['setValueForKey'](_0x32c25c,_0x2bfd19):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x2bfd19]=_0x32c25c,this['writedata'](),!0x0):this['data']&&this['data'][_0x2bfd19]||null;}['initGotEnv'](_0x2b4441){this['got']=this['got']?this['got']:require('got'),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x2b4441&&(_0x2b4441['headers']=_0x2b4441['headers']?_0x2b4441['headers']:{},void(0xb193a^0xb193a)===_0x2b4441['headers']['Cookie']&&void(0x812eb^0x812eb)===_0x2b4441['cookieJar']&&(_0x2b4441['cookieJar']=this['ckjar']));}['get'](_0x710e47,_0x201f50=()=>{}){_0x710e47['headers']&&(delete _0x710e47['headers']['Content-Type'],delete _0x710e47['headers']['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x710e47['headers']=_0x710e47['headers']||{},Object['assign'](_0x710e47['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x710e47,(_0x45b4f5,_0x1cfb68,_0x45b169)=>{!_0x45b4f5&&_0x1cfb68&&(_0x1cfb68['body']=_0x45b169,_0x1cfb68['statusCode']=_0x1cfb68['status']),_0x201f50(_0x45b4f5,_0x1cfb68,_0x45b169);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x710e47['opts']=_0x710e47['opts']||{},Object['assign'](_0x710e47['opts'],{'hints':!(0xf0c23^0xf0c22)})),$task['fetch'](_0x710e47)['then'](_0x521897=>{const {statusCode:_0x4574e5,statusCode:_0x5c829a,headers:_0x3961f2,body:_0x354556}=_0x521897;_0x201f50(null,{'status':_0x4574e5,'statusCode':_0x5c829a,'headers':_0x3961f2,'body':_0x354556},_0x354556);},_0x234e1c=>_0x201f50(_0x234e1c))):this['isNode']()&&(this['initGotEnv'](_0x710e47),this['got'](_0x710e47)['on']('redirect',(_0x4ff011,_0x5a2f1f)=>{try{if(_0x4ff011['headers']['set-cookie']){const _0x30f4b3=_0x4ff011['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();_0x30f4b3&&this['ckjar']['setCookieSync'](_0x30f4b3,null),_0x5a2f1f['cookieJar']=this['ckjar'];}}catch(_0x4ae3f3){this['logErr'](_0x4ae3f3);}})['then'](_0x48e40e=>{const {statusCode:_0x1ce426,statusCode:_0x2c7a95,headers:_0x4825cf,body:_0x5eb4ed}=_0x48e40e;_0x201f50(null,{'status':_0x1ce426,'statusCode':_0x2c7a95,'headers':_0x4825cf,'body':_0x5eb4ed},_0x5eb4ed);},_0x3017b3=>{const {message:_0x40cfd5,response:_0x48422b}=_0x3017b3;_0x201f50(_0x40cfd5,_0x48422b,_0x48422b&&_0x48422b['body']);}));}['post'](_0x5808c3,_0x21c99d=()=>{}){if(_0x5808c3['body']&&_0x5808c3['headers']&&!_0x5808c3['headers']['Content-Type']&&(_0x5808c3['headers']['Content-Type']='application/x-www-form-urlencoded'),_0x5808c3['headers']&&delete _0x5808c3['headers']['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x5808c3['headers']=_0x5808c3['headers']||{},Object['assign'](_0x5808c3['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x5808c3,(_0x1f552e,_0x14f414,_0x4c7326)=>{!_0x1f552e&&_0x14f414&&(_0x14f414['body']=_0x4c7326,_0x14f414['statusCode']=_0x14f414['status']),_0x21c99d(_0x1f552e,_0x14f414,_0x4c7326);});else if(this['isQuanX']())_0x5808c3['method']='POST',this['isNeedRewrite']&&(_0x5808c3['opts']=_0x5808c3['opts']||{},Object['assign'](_0x5808c3['opts'],{'hints':!0x1})),$task['fetch'](_0x5808c3)['then'](_0x5669fa=>{const {statusCode:_0x2ac231,statusCode:_0x422d43,headers:_0x27e93a,body:_0x578516}=_0x5669fa;_0x21c99d(null,{'status':_0x2ac231,'statusCode':_0x422d43,'headers':_0x27e93a,'body':_0x578516},_0x578516);},_0x4564e6=>_0x21c99d(_0x4564e6));else if(this['isNode']()){this['initGotEnv'](_0x5808c3);const {url:_0x31785e,..._0x329c93}=_0x5808c3;this['got']['post'](_0x31785e,_0x329c93)['then'](_0x21d5fe=>{const {statusCode:_0x4b2efa,statusCode:_0x2b267d,headers:_0x3238b5,body:_0x54e78c}=_0x21d5fe;_0x21c99d(null,{'status':_0x4b2efa,'statusCode':_0x2b267d,'headers':_0x3238b5,'body':_0x54e78c},_0x54e78c);},_0x276d1d=>{const {message:_0x598666,response:_0x274f63}=_0x276d1d;_0x21c99d(_0x598666,_0x274f63,_0x274f63&&_0x274f63['body']);});}}['time'](_0x36a360,_0x48cd75=null){const _0x341ba7=_0x48cd75?new Date(_0x48cd75):new Date();let _0x5d135c={'M+':_0x341ba7['getMonth']()+(0x303a9^0x303a8),'d+':_0x341ba7['getDate'](),'H+':_0x341ba7['getHours'](),'m+':_0x341ba7['getMinutes'](),'s+':_0x341ba7['getSeconds'](),'q+':Math['floor']((_0x341ba7['getMonth']()+(0xccfbc^0xccfbf))/(0x72e5f^0x72e5c)),'S':_0x341ba7['getMilliseconds']()};/(y+)/['test'](_0x36a360)&&(_0x36a360=_0x36a360['replace'](RegExp['$1'],(_0x341ba7['getFullYear']()+'')['substr'](0x4-RegExp['$1']['length'])));for(let _0x3febf2 in _0x5d135c)new RegExp('('+_0x3febf2+')')['test'](_0x36a360)&&(_0x36a360=_0x36a360['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x5d135c[_0x3febf2]:('00'+_0x5d135c[_0x3febf2])['substr']((''+_0x5d135c[_0x3febf2])['length'])));return _0x36a360;}['msg'](_0x2efbb2=_0x264622,_0xb29ebf='',_0x16bfbf='',_0x5580e0){const _0x5295c8=_0x5026fc=>{if(!_0x5026fc)return _0x5026fc;if('string'==typeof _0x5026fc)return this['isLoon']()?_0x5026fc:this['isQuanX']()?{'open-url':_0x5026fc}:this['isSurge']()?{'url':_0x5026fc}:void(0x9fe45^0x9fe45);if('object'==typeof _0x5026fc){if(this['isLoon']()){let _0x690e2b=_0x5026fc['openUrl']||_0x5026fc['url']||_0x5026fc['open-url'],_0x3ee82c=_0x5026fc['mediaUrl']||_0x5026fc['media-url'];return{'openUrl':_0x690e2b,'mediaUrl':_0x3ee82c};}if(this['isQuanX']()){let _0x41fece=_0x5026fc['open-url']||_0x5026fc['url']||_0x5026fc['openUrl'],_0x3e3105=_0x5026fc['media-url']||_0x5026fc['mediaUrl'];return{'open-url':_0x41fece,'media-url':_0x3e3105};}if(this['isSurge']()){let _0x2c4ecc=_0x5026fc['url']||_0x5026fc['openUrl']||_0x5026fc['open-url'];return{'url':_0x2c4ecc};}}};if(this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x2efbb2,_0xb29ebf,_0x16bfbf,_0x5295c8(_0x5580e0)):this['isQuanX']()&&$notify(_0x2efbb2,_0xb29ebf,_0x16bfbf,_0x5295c8(_0x5580e0))),!this['isMuteLog']){let _0x14e97b=['','==============📣系统通知📣=============='];_0x14e97b['push'](_0x2efbb2),_0xb29ebf&&_0x14e97b['push'](_0xb29ebf),_0x16bfbf&&_0x14e97b['push'](_0x16bfbf),console['log'](_0x14e97b['join']('\x0a')),this['logs']=this['logs']['concat'](_0x14e97b);}}['log'](..._0x4e77c4){_0x4e77c4['length']>0x0&&(this['logs']=[...this['logs'],..._0x4e77c4]),console['log'](_0x4e77c4['join'](this['logSeparator']));}['logErr'](_0x5000d9,_0x198b74){const _0x40f45c=!this['isSurge']()&&!this['isQuanX']()&&!this['isLoon']();_0x40f45c?this['log']('','❗️'+this['name']+',\x20错误!',_0x5000d9['stack']):this['log']('','❗️'+this['name']+',\x20错误!',_0x5000d9);}['wait'](_0x283c31){return new Promise(_0x31fda5=>setTimeout(_0x31fda5,_0x283c31));}['done'](_0x1a41a2={}){const _0x44e56c=new Date()['getTime'](),_0x349d9b=(_0x44e56c-this['startTime'])/(0xbd306^0xbd0ee);this['log']('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0x349d9b+'\x20秒'),this['log'](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x1a41a2);}}(_0x264622,_0x54e504);}