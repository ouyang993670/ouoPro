/**
 * 脚本地址： https://github.com/ouyang993670/ouoPro
 *
 * 说明：极速刷APP，脚本制作不易。希望各位道友通过下方连接接受我的邀请
 * APP下载地址：https://a.app.qq.com/o/simple.jsp?pkgname=com.taoliu.news&t=1668344552&invite_code=bbrsfi
 * 抓取域名 jss.taoliutech.com 下面的header中Authorization信息。
 * 如下方变量格式。第一个参数是header中Authorization，第二个参数是1则开启自动刷阅读领金币,反之关闭,第三个参数为1则开启自动提现，反之关闭
 * 变量格式：export JSS_TOKEN='xxx&1&1'  多个账号用\n  换行符分割
 * JSS_TOKEN示例：'Bearer eyJhbxx&0&0'
 *
 * 建议一天8次 定时 10 10/59 13-18  * * *
 */

const jsname='极速刷';const $=Env(jsname);const Notify=0xcc468^0xcc468;const debug=0x20fdb^0x20fdb;let user_data=process['env']['JSS_TOKEN'];let user_dataArr=[];let data='';let msg='';const request=require('request');const CryptoJS=require('crypto-js');let taskIds=[0x82c75^0x82c74,0x51f1e^0x51f1c,0xcd70f^0xcd70c,0x9d4d0^0x9d4d4,0x69f8c^0x69f89,0xe4a92^0xe4a94,0xb3151^0xb3156,0x729e1^0x729e9,0xb4aa2^0xb4aab,0x8b6bc^0x8b6b6];let taskOBJ={'complete_num':'','num':'','is_complete':'','taskId':'','taskName':''};let taskOBJArray=[];let setCookie='';!(async()=>{if(!await Envs())return;else{console['log']('\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：'+new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*(0xdef42^0xdef7e)*(0x5f13d^0x5f2d5)+(0xa16ba^0xa16b2)*(0xb5420^0xb541c)*(0x84be4^0x84bd8)*0x3e8)['toLocaleString']()+'\x20\x0a=============================================\x0a');await wyy();console['log']('\x0a===================\x20共找到\x20'+user_dataArr['length']+'\x20个账号\x20===================');let _0x43e8e4=0x889f4^0x889f4;for(let _0x106147 of user_dataArr){data=_0x106147['split']('&');console['log']('\x0a=========\x20开始【第\x20'+(_0x43e8e4+(0x3f1e8^0x3f1e9))+'\x20个账号】=========\x0a');console['log']('获取账号信息');await userInfo(data[0x91282^0x91282]);console['log']('开启初始任务【阅读之星分红计划】');await goFen(data[0x70362^0x70362]);console['log']('获取任务列表信息');await taskInfo(data[0x0]);console['log']('执行未完成任务');await taskWait(data[0x0]);if(data[0x1]==(0x35853^0x35852)){console['log']('开始刷【阅读资讯】获取奖励');let _0x1abd12=await taskInfoByYuedu(data[0xd4d78^0xd4d78]);await $['wait'](0x8ea14^0x8efc8);if(_0x1abd12){console['log']('今日阅读时间已达到上限。请明天再试\x0a');}else{await yueduSpecial(data[0x57265^0x57265]);await lastreceive(data[0x27154^0x27154],'2');}}if(data[0x2]==(0x23fcc^0x23fcd)){console['log']('开始执行提现,暂时限制3毛');await texian(data[0x3438c^0x3438c],'3000');}await userInfoSHOUYI(data[0x96a47^0x96a47]);_0x43e8e4++;}}})()['catch'](_0x40acc8=>console['log'](_0x40acc8))['finally'](()=>{$['done']();});async function yueduSpecial(_0x36c033){let _0xb5ff0e=0x1;for(let _0x57363c=0xaedc7^0xaedc7;_0x57363c<(0xb6402^0xb640d);_0x57363c++){console['log']('执行刷阅读资讯奖励，当前次数：'+(_0x57363c+(0x4c349^0x4c348)));let _0xf252b2={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/timer/detail_receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x36c033,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':_0xb5ff0e,'is_video':'0'}};request(_0xf252b2,function(_0x40d43d,_0x43fd4e){if(_0x40d43d)console['log']('\x0a【阅读资讯任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x2ca346=JSON['parse'](_0x43fd4e['body']);if(_0x2ca346['code']=='200'){console['log']('【阅读】获得金币：'+_0x2ca346['data']['reward_num']);if(_0x2ca346['data']['round']=='3'){_0xb5ff0e=0x30f63^0x30f60;}else{_0xb5ff0e=0xb6a4b^0xb6a4a;}}else{console['log'](_0x2ca346['msg']);}});let _0x1b6e32=randomInt(0x10,0x1e658^0x1e646);console['log']('随机等待时间：'+_0x1b6e32+'秒');await $['wait'](_0x1b6e32*(0x65f4b^0x65ca3));}}async function userInfo(_0x20a564){var _0x333e46=Math['floor'](new Date()['getTime']()/(0x7f3c7^0x7f02f));var _0x1e20b0={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/user/base_info','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x20a564,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};request(_0x1e20b0,function(_0x246fe9,_0x34f69d){if(_0x246fe9)console['log']('\x0a【获取用户信息】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x3e7339=JSON['parse'](_0x34f69d['body']);if(_0x3e7339['code']=='200'){console['log']('\x0a昵称：'+_0x3e7339['data']['user']['nickname']+'----当前金币数：'+_0x3e7339['data']['user']['assets']+'----邀请码:'+_0x3e7339['data']['user']['inviteCode']);}else{console['log'](_0x3e7339['msg']);}});await $['wait'](0xa3124^0xa32cc);console['log']('\x0a');}async function userInfoSHOUYI(_0x5c8328){var _0x3e47d7=Math['floor'](new Date()['getTime']()/(0x2e10a^0x2e2e2));var _0x1590f4={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/user/base_info','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x5c8328,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};request(_0x1590f4,function(_0x257109,_0x3562a2){if(_0x257109)console['log']('\x0a【获取用户信息】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x1ee680=JSON['parse'](_0x3562a2['body']);if(_0x1ee680['code']=='200'){let _0x44c9a9=(_0x1ee680['data']['user']['assets']/(0x4e420^0x4c330))['toFixed'](0x2);console['log']('\x0a昵称：'+_0x1ee680['data']['user']['nickname']+'----当前金币余额：'+_0x44c9a9+'元'+'----今天收益金币数：'+_0x1ee680['data']['user']['today_assets']+'----历史总收益:'+_0x1ee680['data']['user']['total_assets']);}else{console['log'](_0x1ee680['msg']);}});await $['wait'](0xb9cdc^0xb9f34);console['log']('\x0a');}async function taskInfo(_0x51e823){for(let _0x16c527 of taskIds){var _0x1f6363={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/earn/task_one_info?task_id='+_0x16c527,'headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x51e823,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};request(_0x1f6363,function(_0x3435a3,_0xab4c68){if(_0x3435a3)console['log']('\x0a【获取某任务信息】\x20失败\x20❌\x20\x0a\x20');let _0x5c3a63=JSON['parse'](_0xab4c68['body']);let _0x34e5e6=_0x5c3a63['data']['task_info'];if(_0x16c527=='1'){console['log']('【当天观看20个福利视频】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='2'){console['log']('【当天看资讯领15次金币】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='3'){console['log']('【当天看10分钟推荐视频】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']+'秒');}else if(_0x16c527=='4'){console['log']('【当天看10分钟精选视频】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']+'秒');}else if(_0x16c527=='5'){console['log']('【当天转盘抽奖10次】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='6'){console['log']('【当天完成4个看看赚任务】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='7'){console['log']('【当天播放10个精彩视频】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='8'){console['log']('【当天播放10个极速小视频】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else if(_0x16c527=='9'){if(_0x34e5e6){console['log']('【签到提醒】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else{console['log']('【签到提醒】--完成');}}else if(_0x16c527=='10'){if(_0x34e5e6){console['log']('【绑定手机】--当前进度/总进度：'+_0x34e5e6['complete_num']+'/'+_0x34e5e6['num']);}else{console['log']('【绑定手机】--完成');}}saveTaskList(_0x34e5e6);});await $['wait'](0x5e42a^0x5e7c2);}await $['wait'](0x9ed2a^0x9eec2);console['log']('\x0a');}async function taskInfoOne(_0x16b1fb){var _0x38bfb1={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/earn/task_one_info?task_id=2','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x16b1fb,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};let _0x3145a1=!![];request(_0x38bfb1,function(_0x335348,_0x4f696a){if(_0x335348)console['log']('\x0a【获取某任务信息】\x20失败\x20❌\x20\x0a\x20');let _0x3fd0fc=JSON['parse'](_0x4f696a['body']);if(_0x3fd0fc['data']['task_info']['complete_num']>(0x2489b^0x2489b)&&_0x3fd0fc['data']['task_info']['complete_num']%0x3==0x0){_0x3145a1=!![];}else{_0x3145a1=![];}});await $['wait'](0xd1559^0xd1085);return _0x3145a1;}async function taskInfoByYuedu(_0x52726e){var _0x1f6cd5={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/earn/task_one_info?task_id=2','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x52726e,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};let _0x13cd2d=!![];request(_0x1f6cd5,function(_0x109fc4,_0x169d7a){if(_0x109fc4)console['log']('\x0a【获取某任务信息】\x20失败\x20❌\x20\x0a\x20');let _0xcf7624=JSON['parse'](_0x169d7a['body']);if(_0xcf7624['data']['task_info']['complete_num']>(0x8637a^0x863ec)){_0x13cd2d=!![];}else{_0x13cd2d=![];}});await $['wait'](0x70622^0x703fe);return _0x13cd2d;}function saveTaskList(_0x4d5c31){if(_0x4d5c31){if(_0x4d5c31['is_complete']=='0'){taskOBJ['complete_num']=_0x4d5c31['complete_num'];taskOBJ['num']=_0x4d5c31['num'];taskOBJ['is_complete']=_0x4d5c31['is_complete'];taskOBJ['taskId']=_0x4d5c31['task_id'];taskOBJ['taskName']='【'+_0x4d5c31['name']+'】';taskOBJArray['push'](JSON['stringify'](taskOBJ));}else{console['log']('【'+_0x4d5c31['name']+'】任务已完成，将跳过该任务\x0a');}}else{console['log']('任务已完成，将跳过该任务\x0a');}}async function taskWait(_0x41eb53){if(taskOBJArray['length']>(0xbe2bb^0xbe2bb)){for(let _0x12cfff of taskOBJArray){let _0x5ba5c6=JSON['parse'](_0x12cfff);console['log']('开始任务：'+_0x5ba5c6['taskName']);if(_0x5ba5c6['taskId']=='1'){let _0x23d4c2=_0x5ba5c6['num']-_0x5ba5c6['complete_num'];for(let _0x497737=0x7fe57^0x7fe57;_0x497737<_0x23d4c2;_0x497737++){await taskReport(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);let _0x39899e=randomInt(0x1,0x18c50^0x18c56);console['log']('随机延时：'+_0x39899e);await $['wait'](_0x39899e*0x3e8);}}else if(_0x5ba5c6['taskId']=='2'){let _0x98a19e=_0x5ba5c6['num']-_0x5ba5c6['complete_num'];let _0x1acf01=0x48d52^0x48d53;for(let _0x4db001=0x2131d^0x2131d;_0x4db001<_0x98a19e;_0x4db001++){console['log']('执行刷阅读资讯奖励，当前次数：'+(_0x4db001+(0xb0464^0xb0465)));let _0x13f7dc={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/timer/detail_receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x41eb53,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':_0x1acf01,'is_video':'0'}};request(_0x13f7dc,function(_0x35d4ad,_0x1bbe22){if(_0x35d4ad)console['log']('\x0a【阅读资讯任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x48ad8a=JSON['parse'](_0x1bbe22['body']);if(_0x48ad8a['code']=='200'){console['log']('【阅读】获得金币：'+_0x48ad8a['data']['reward_num']);if(_0x48ad8a['data']['round']=='3'){_0x1acf01=0x73f1a^0x73f19;}else{_0x1acf01=0xd3afc^0xd3afd;}}else{console['log'](_0x48ad8a['msg']);}});await $['wait'](0x3e8);if(_0x1acf01==(0x3b3e5^0x3b3e4)){await taskReport(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);}let _0x1de28e=randomInt(0xe484e^0xe4841,0xb6bc2^0xb6bdf);console['log']('随机等待时间：'+_0x1de28e+'秒');await $['wait'](_0x1de28e*0x3e8);}}else if(_0x5ba5c6['taskId']=='3'||_0x5ba5c6['taskId']=='4'){let _0xf0fb98='';if(_0x5ba5c6['num']>(0x34ab4^0x34ab4)){_0xf0fb98=_0x5ba5c6['num']/0xa-_0x5ba5c6['complete_num']/0xa;}else{_0xf0fb98=0x3c;}console['log']('视频观看还剩次数:'+_0xf0fb98);for(let _0x1e3d2e=0xb7a0d^0xb7a0d;_0x1e3d2e<_0xf0fb98;_0x1e3d2e++){await taskReport(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);await $['wait'](0x2dad6^0x2f02e);}}else if(_0x5ba5c6['taskId']=='5'){let _0xad590c=_0x5ba5c6['complete_num'];if(_0xad590c<0x2){await drawTask(_0x41eb53);}let _0xee3c12=_0x5ba5c6['num']-_0x5ba5c6['complete_num'];for(let _0x21cc8a=0x338be^0x338be;_0x21cc8a<_0xee3c12;_0x21cc8a++){await taskReport(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);}}else if(_0x5ba5c6['taskId']=='6'){await lookMoeny(_0x41eb53);}else if(_0x5ba5c6['taskId']=='7'||_0x5ba5c6['taskId']=='8'){let _0xd7b58a=_0x5ba5c6['num']-_0x5ba5c6['complete_num'];console['log']('视频观看还剩次数:'+_0xd7b58a);for(let _0x426ab0=0x0;_0x426ab0<_0xd7b58a;_0x426ab0++){await taskReport(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);await $['wait'](0x95584^0x97f7c);}}else if(_0x5ba5c6['taskId']=='9'||_0x5ba5c6['taskId']=='10'){await receiveTask(_0x41eb53,_0x5ba5c6['taskId'],_0x5ba5c6['taskId']);}else{console['log']('APP出现新任务了，请联系作者OUO新增');}console['log']('\x0a领取'+_0x5ba5c6['taskName']+'任务总奖励');await receiveTask(_0x41eb53,_0x5ba5c6['taskId']);}let _0x5c9dc3=['1','2','3','4','5'];for(let _0x28f048 of _0x5c9dc3){console['log']('做福利任务加翻倍奖励进度【一般可以无视这里】');await lastreceive(_0x41eb53,_0x28f048);}}else{console['log']('任务都已完成\x0a');}}async function yuedu(_0x5adff3,_0x8123f3){var _0x41e450={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/timer/detail_receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x5adff3,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':_0x8123f3,'is_video':'0'}};request(_0x41e450,function(_0x46d4aa,_0x93d865){if(_0x46d4aa)console['log']('\x0a【阅读资讯任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x5b5a2b=JSON['parse'](_0x93d865['body']);if(_0x5b5a2b['code']=='200'){console['log']('【阅读】获得金币：'+_0x5b5a2b['data']['reward_num']);}else{console['log'](_0x5b5a2b['msg']);}});await $['wait'](0x3e80);}async function yuedu2(_0x41f2ae,_0x18bbaa){var _0x1258e6={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/timer/detail_receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x41f2ae,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':_0x18bbaa,'is_video':'0'}};request(_0x1258e6,function(_0x208ee7,_0x58444d){if(_0x208ee7)console['log']('\x0a【阅读资讯任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x213368=JSON['parse'](_0x58444d['body']);if(_0x213368['code']=='200'){console['log']('【阅读】获得金币：'+_0x213368['data']['reward_num']);}else{console['log'](_0x213368['msg']);}});await $['wait'](0xee09c^0xede1c);}async function taskReport(_0x23d0a0,_0x4ad6f5,_0x473436){var _0x465499={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/earn/task_report','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x23d0a0,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'task_id':_0x4ad6f5,'type':_0x473436}};request(_0x465499,function(_0x44fb44,_0x1573fc){if(_0x44fb44)console['log']('\x0a【上报任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x5d76b3=JSON['parse'](_0x1573fc['body']);if(_0x5d76b3['code']==(0xe7731^0xe77f9)){if(_0x4ad6f5=='3'||_0x4ad6f5=='4'){console['log']('(每一次10秒,请耐心等待)成功一次，当前完成次数：'+_0x5d76b3['data']['task_info']['complete_num']/0xa);}else{console['log']('成功一次，当前完成次数：'+_0x5d76b3['data']['task_info']['complete_num']);}}else{console['log'](_0x5d76b3['msg']);}});await $['wait'](0x3e8);}async function drawTask(_0x12f391){var _0x1e5b07={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/turntable/receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x12f391,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':0x1}};request(_0x1e5b07,function(_0x30a834,_0x516ab5){if(_0x30a834)console['log']('\x0a【抽大转盘】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x75e7df=JSON['parse'](_0x516ab5['body']);if(_0x75e7df['code']==(0x78ca9^0x78c61)){console['log']('【转盘】获得金币：'+_0x75e7df['data']['reward_num']);}else{console['log'](_0x75e7df['msg']);}});await $['wait'](0x79a05^0x799ed);}async function lookMoeny(_0x70585f){let _0x26ef4b=['1022','1043','1021','1080'];for(let _0x15cd82 of _0x26ef4b){console['log']('开始赚赚:'+_0x15cd82);let _0x47d1a2={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/earn/task_report_sub','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x70585f,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'task_id':'6','sub_id':_0x15cd82}};let _0x279bce='1';request(_0x47d1a2,function(_0xcea8d5,_0x42a118){if(_0xcea8d5)console['log']('\x0a【看看赚某任务】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x32c5a3=JSON['parse'](_0x42a118['body']);if(_0x32c5a3['code']==(0x45a08^0x45ac0)){console['log']('看看赚子任务开始，等待60S领取奖励');}else{console['log'](_0x32c5a3['msg']);_0x279bce='2';}});await $['wait'](0x5dc);if(_0x279bce=='1'){await $['wait'](0x8e0e7^0x80eaf);await lookMoenyOne(_0x70585f,_0x15cd82);}}}async function lookMoenyOne(_0x46bedb,_0x39d234){let _0x5b1c99={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/earn/task_report_sub_receive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x46bedb,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'sub_id':_0x39d234}};request(_0x5b1c99,function(_0x337c73,_0x44cfe5){if(_0x337c73)console['log']('\x0a【看看赚某任务领取奖励】\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x4374af=JSON['parse'](_0x44cfe5['body']);if(_0x4374af['code']==(0xc507b^0xc50b3)){console['log']('看看赚任务获得金币：'+_0x4374af['data']['reward_assets_num']);}else{console['log'](_0x4374af['msg']);}});await $['wait'](0x3e8);}async function receiveTask(_0xc0db34,_0x40739f){var _0x2dccb2={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/earn/receive_task','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0xc0db34,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'application/x-www-form-urlencoded','Accept':'*/*'},'form':{'task_id':_0x40739f}};request(_0x2dccb2,function(_0x1058f9,_0x59d863){if(_0x1058f9)console['log']('\x0a【任务】领取总奖励\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x223784=JSON['parse'](_0x59d863['body']);if(_0x223784['code']=='200'){console['log']('领取金币：'+_0x223784['data']['reward_assets_num']+',体现卷:'+_0x223784['data']['reward_voucher_num']);}else{console['log'](_0x223784['msg']);}});await $['wait'](0x4a837^0x4abdf);}async function goFen(_0x23347b){var _0x249788={'method':'GET','url':'https://jss.taoliutech.com/app/api/v1/stage/begin_challenge?stage=1','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x23347b,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Accept':'*/*'}};request(_0x249788,function(_0x1a6a57,_0x10575a){if(_0x1a6a57)console['log']('\x0a开启阅读之星分红计划\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x1a1a03=JSON['parse'](_0x10575a['body']);if(_0x1a1a03['code']=='200'){console['log']('开启分红成功');}else{console['log'](_0x1a1a03['msg']+',【如果已经开启了就无视此提示】');}});await $['wait'](0xe98a7^0xe9b4f);console['log']('\x0a');}async function lastreceive(_0x3a2ed0,_0x3b3653){var _0x186485={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/benefits/lastreceive','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x3a2ed0,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'\x20application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':_0x3b3653}};request(_0x186485,function(_0xed074c,_0x532161){if(_0xed074c)console['log']('\x0a【进度加速】领取总奖励\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0x5879de=JSON['parse'](_0x532161['body']);if(_0x5879de['code']=='200'){console['log']('进度加速成功:'+_0x5879de['data']['rate']*0x64);}else{console['log'](_0x5879de['msg']+'【加速也许已领取，无视此处即可】\x0a');}});await $['wait'](0x8c688^0x8c560);}async function texian(_0x3c9636,_0x169197){var _0x18a036={'method':'POST','url':'https://jss.taoliutech.com/app/api/v1/withdraw/extract_v2','headers':{'version':'1.0.8','versionCode':'11','channel':'yyb','platform':'android','Authorization':_0x3c9636,'Host':'jss.taoliutech.com','Connection':'Keep-Alive','User-Agent':'okhttp/4.9.1','Content-Type':'\x20application/x-www-form-urlencoded','Accept':'*/*'},'form':{'type':'1','money':_0x169197}};request(_0x18a036,function(_0x3235df,_0x41b2f6){if(_0x3235df)console['log']('\x0a【进度加速】领取总奖励\x20失败\x20❌\x20了呢,请检测CK是否过期或者账号被封!\x0a\x20');let _0xccde2c=JSON['parse'](_0x41b2f6['body']);if(_0xccde2c['code']=='200'){console['log']('提现成功');}else{console['log']('提现结果:'+_0xccde2c['msg']);}});await $['wait'](0xadacd^0xad925);}async function Envs(){if(user_data){if(user_data['indexOf']('\x0a')!=-0x1){user_data['split']('\x0a')['forEach'](_0x34cea9=>{user_dataArr['push'](_0x34cea9);});}else{user_dataArr['push'](user_data);}}else{console['log']('\x0a\x20【'+$['name']+'】：未填写变量\x20user_data');return;}return!![];}async function SendMsg(_0x15e1e5){if(!_0x15e1e5)return;if(Notify>0x0){if($['isNode']()){var _0x416e49=require('./sendNotify');await _0x416e49['sendNotify']($['name'],_0x15e1e5);}else{$['msg'](_0x15e1e5);}}else{console['log'](_0x15e1e5);}}function randomString(_0x59ef21){_0x59ef21=_0x59ef21||0x24765^0x24745;var _0x512aaa='QWERTYUIOPASDFGHJKLZXCVBNM1234567890',_0x46c52f=_0x512aaa['length'],_0x2c74b0='';for(i=0x0;i<_0x59ef21;i++)_0x2c74b0+=_0x512aaa['charAt'](Math['floor'](Math['random']()*_0x46c52f));return _0x2c74b0;}function randomInt(_0x49adaf,_0x3cc26b){return Math['round'](Math['random']()*(_0x3cc26b-_0x49adaf)+_0x49adaf);}function wyy(_0x3e8d0f=(0xa5078^0xa507b)*(0x2fe08^0x2fde0)){return new Promise(_0x11e065=>{let _0x310a27={'url':'https://keai.icu/apiwyy/api'};$['get'](_0x310a27,async(_0x360383,_0x359a35,_0x174ae7)=>{try{_0x174ae7=JSON['parse'](_0x174ae7);console['log']('\x0a\x20【网抑云时间】:\x20'+_0x174ae7['content']+'\x20\x20by--'+_0x174ae7['music']);}catch(_0x51fd7a){console['logErr'](_0x51fd7a,_0x359a35);}finally{_0x11e065();}},_0x3e8d0f);});}function Env(_0x47c0a8,_0x4f2455){'undefined'!=typeof process&&JSON['stringify'](process['env'])['indexOf']('GITHUB')>-(0x449ad^0x449ac)&&process['exit'](0x0);class _0x4e52e7{constructor(_0x293d62){this['env']=_0x293d62;}['send'](_0x3a716f,_0x1ad40e='GET'){_0x3a716f='string'==typeof _0x3a716f?{'url':_0x3a716f}:_0x3a716f;let _0x387a03=this['get'];return'POST'===_0x1ad40e&&(_0x387a03=this['post']),new Promise((_0x14d273,_0x356d97)=>{_0x387a03['call'](this,_0x3a716f,(_0x4a3f64,_0x4008dd,_0x24aec3)=>{_0x4a3f64?_0x356d97(_0x4a3f64):_0x14d273(_0x4008dd);});});}['get'](_0x3bcf2a){return this['send']['call'](this['env'],_0x3bcf2a);}['post'](_0xcf3795){return this['send']['call'](this['env'],_0xcf3795,'POST');}}return new class{constructor(_0x2b9008,_0x219f3c){;this['name']=_0x2b9008,this['http']=new _0x4e52e7(this),this['data']=null,this['dataFile']='box.dat',this['logs']=[],this['isMute']=!(0x27aea^0x27aeb),this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x219f3c),this['log']('','🔔'+this['name']+',\x20开始!');}['isNode'](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){return'undefined'!=typeof $task;}['isSurge'](){return'undefined'!=typeof $httpClient&&'undefined'==typeof $loon;}['isLoon'](){return'undefined'!=typeof $loon;}['toObj'](_0x2ece6b,_0x2b45e7=null){try{return JSON['parse'](_0x2ece6b);}catch{return _0x2b45e7;}}['toStr'](_0x48903e,_0x5b91fe=null){try{return JSON['stringify'](_0x48903e);}catch{return _0x5b91fe;}}['getjson'](_0x2e0fc3,_0x241e32){let _0x3fd71f=_0x241e32;const _0x13b5bb=this['getdata'](_0x2e0fc3);if(_0x13b5bb)try{_0x3fd71f=JSON['parse'](this['getdata'](_0x2e0fc3));}catch{}return _0x3fd71f;}['setjson'](_0x10c9e5,_0x2f9e95){try{return this['setdata'](JSON['stringify'](_0x10c9e5),_0x2f9e95);}catch{return!0x1;}}['getScript'](_0x485f7c){return new Promise(_0x41426d=>{this['get']({'url':_0x485f7c},(_0x213610,_0x589abd,_0x28a999)=>_0x41426d(_0x28a999));});}['runScript'](_0xae8425,_0x34d1b1){return new Promise(_0x358be4=>{let _0x32a00f=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x32a00f=_0x32a00f?_0x32a00f['replace'](/\n/g,'')['trim']():_0x32a00f;let _0x235ec0=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x235ec0=_0x235ec0?(0xca38f^0xca38e)*_0x235ec0:0x14,_0x235ec0=_0x34d1b1&&_0x34d1b1['timeout']?_0x34d1b1['timeout']:_0x235ec0;const [_0x403216,_0x1d4098]=_0x32a00f['split']('@'),_0x1b4584={'url':'http://'+_0x1d4098+'/v1/scripting/evaluate','body':{'script_text':_0xae8425,'mock_type':'cron','timeout':_0x235ec0},'headers':{'X-Key':_0x403216,'Accept':'*/*'}};this['post'](_0x1b4584,(_0x630250,_0x2d3a95,_0x4d5976)=>_0x358be4(_0x4d5976));})['catch'](_0x674a69=>this['logErr'](_0x674a69));}['loaddata'](){if(!this['isNode']())return{};{;this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x29f30b=this['path']['resolve'](this['dataFile']),_0x470984=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x418b8b=this['fs']['existsSync'](_0x29f30b),_0x5dc657=!_0x418b8b&&this['fs']['existsSync'](_0x470984);if(!_0x418b8b&&!_0x5dc657)return{};{const _0x23462f=_0x418b8b?_0x29f30b:_0x470984;try{return JSON['parse'](this['fs']['readFileSync'](_0x23462f));}catch(_0x1d7948){return{};}}}}['writedata'](){if(this['isNode']()){;this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x101919=this['path']['resolve'](this['dataFile']),_0x386975=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x511ef8=this['fs']['existsSync'](_0x101919),_0xa44ae4=!_0x511ef8&&this['fs']['existsSync'](_0x386975),_0x372698=JSON['stringify'](this['data']);_0x511ef8?this['fs']['writeFileSync'](_0x101919,_0x372698):_0xa44ae4?this['fs']['writeFileSync'](_0x386975,_0x372698):this['fs']['writeFileSync'](_0x101919,_0x372698);}}['lodash_get'](_0x4aa8a5,_0x12387f,_0x5da4e3){const _0x3e7a2e=_0x12387f['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0x5b6c49=_0x4aa8a5;for(const _0x153e8d of _0x3e7a2e)if(_0x5b6c49=Object(_0x5b6c49)[_0x153e8d],void(0x96dea^0x96dea)===_0x5b6c49)return _0x5da4e3;return _0x5b6c49;}['lodash_set'](_0xe38639,_0x3f65cd,_0x330c3f){return Object(_0xe38639)!==_0xe38639?_0xe38639:(Array['isArray'](_0x3f65cd)||(_0x3f65cd=_0x3f65cd['toString']()['match'](/[^.[\]]+/g)||[]),_0x3f65cd['slice'](0xde139^0xde139,-(0x5bbbd^0x5bbbc))['reduce']((_0x43c65c,_0x2ff29c,_0x45ad9d)=>Object(_0x43c65c[_0x2ff29c])===_0x43c65c[_0x2ff29c]?_0x43c65c[_0x2ff29c]:_0x43c65c[_0x2ff29c]=Math['abs'](_0x3f65cd[_0x45ad9d+(0x748cd^0x748cc)])>>(0x95e48^0x95e48)==+_0x3f65cd[_0x45ad9d+0x1]?[]:{},_0xe38639)[_0x3f65cd[_0x3f65cd['length']-0x1]]=_0x330c3f,_0xe38639);}['getdata'](_0x53ea80){let _0x3ea277=this['getval'](_0x53ea80);if(/^@/['test'](_0x53ea80)){const [,_0x14a0fe,_0x3e7f91]=/^@(.*?)\.(.*?)$/['exec'](_0x53ea80),_0x453d34=_0x14a0fe?this['getval'](_0x14a0fe):'';if(_0x453d34)try{const _0x40645b=JSON['parse'](_0x453d34);_0x3ea277=_0x40645b?this['lodash_get'](_0x40645b,_0x3e7f91,''):_0x3ea277;}catch(_0x2ff28e){_0x3ea277='';}}return _0x3ea277;}['setdata'](_0x3f2d1a,_0x45a43d){let _0x38b31c=!0x1;if(/^@/['test'](_0x45a43d)){const [,_0x18578c,_0x4c1ad0]=/^@(.*?)\.(.*?)$/['exec'](_0x45a43d),_0x4d031c=this['getval'](_0x18578c),_0x47a08a=_0x18578c?'null'===_0x4d031c?null:_0x4d031c||'{}':'{}';try{const _0x25422e=JSON['parse'](_0x47a08a);this['lodash_set'](_0x25422e,_0x4c1ad0,_0x3f2d1a),_0x38b31c=this['setval'](JSON['stringify'](_0x25422e),_0x18578c);}catch(_0x1505da){const _0x1aeb0={};this['lodash_set'](_0x1aeb0,_0x4c1ad0,_0x3f2d1a),_0x38b31c=this['setval'](JSON['stringify'](_0x1aeb0),_0x18578c);}}else _0x38b31c=this['setval'](_0x3f2d1a,_0x45a43d);return _0x38b31c;}['getval'](_0x4b82ed){return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x4b82ed):this['isQuanX']()?$prefs['valueForKey'](_0x4b82ed):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x4b82ed]):this['data']&&this['data'][_0x4b82ed]||null;}['setval'](_0x48804d,_0x277240){return this['isSurge']()||this['isLoon']()?$persistentStore['write'](_0x48804d,_0x277240):this['isQuanX']()?$prefs['setValueForKey'](_0x48804d,_0x277240):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x277240]=_0x48804d,this['writedata'](),!(0xe48b8^0xe48b8)):this['data']&&this['data'][_0x277240]||null;}['initGotEnv'](_0x172a8e){;this['got']=this['got']?this['got']:require('got'),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x172a8e&&(_0x172a8e['headers']=_0x172a8e['headers']?_0x172a8e['headers']:{},void(0xb39d1^0xb39d1)===_0x172a8e['headers']['Cookie']&&void(0x911f5^0x911f5)===_0x172a8e['cookieJar']&&(_0x172a8e['cookieJar']=this['ckjar']));}['get'](_0x1d3589,_0x3a0340=()=>{}){_0x1d3589['headers']&&(delete _0x1d3589['headers']['Content-Type'],delete _0x1d3589['headers']['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x1d3589['headers']=_0x1d3589['headers']||{},Object['assign'](_0x1d3589['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x1d3589,(_0x21ee50,_0x312974,_0x42da56)=>{!_0x21ee50&&_0x312974&&(_0x312974['body']=_0x42da56,_0x312974['statusCode']=_0x312974['status']),_0x3a0340(_0x21ee50,_0x312974,_0x42da56);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x1d3589['opts']=_0x1d3589['opts']||{},Object['assign'](_0x1d3589['opts'],{'hints':!(0x79c6d^0x79c6c)})),$task['fetch'](_0x1d3589)['then'](_0x5a1b97=>{const {statusCode:_0x4a9dd1,statusCode:_0xb1b97d,headers:_0x3c94e9,body:_0x182f4a}=_0x5a1b97;_0x3a0340(null,{'status':_0x4a9dd1,'statusCode':_0xb1b97d,'headers':_0x3c94e9,'body':_0x182f4a},_0x182f4a);},_0x37506f=>_0x3a0340(_0x37506f))):this['isNode']()&&(this['initGotEnv'](_0x1d3589),this['got'](_0x1d3589)['on']('redirect',(_0x4a844d,_0x531b41)=>{try{if(_0x4a844d['headers']['set-cookie']){const _0x1e5ec8=_0x4a844d['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();_0x1e5ec8&&this['ckjar']['setCookieSync'](_0x1e5ec8,null),_0x531b41['cookieJar']=this['ckjar'];}}catch(_0x354b02){this['logErr'](_0x354b02);}})['then'](_0x9911a1=>{const {statusCode:_0x35d87e,statusCode:_0x4a3c16,headers:_0x4fc0f5,body:_0x31d895}=_0x9911a1;_0x3a0340(null,{'status':_0x35d87e,'statusCode':_0x4a3c16,'headers':_0x4fc0f5,'body':_0x31d895},_0x31d895);},_0x19104a=>{const {message:_0x12c229,response:_0x826cd8}=_0x19104a;_0x3a0340(_0x12c229,_0x826cd8,_0x826cd8&&_0x826cd8['body']);}));}['post'](_0x11b528,_0x25ae88=()=>{}){if(_0x11b528['body']&&_0x11b528['headers']&&!_0x11b528['headers']['Content-Type']&&(_0x11b528['headers']['Content-Type']='application/x-www-form-urlencoded'),_0x11b528['headers']&&delete _0x11b528['headers']['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x11b528['headers']=_0x11b528['headers']||{},Object['assign'](_0x11b528['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x11b528,(_0x4389ee,_0x37e1fe,_0xf09aa9)=>{!_0x4389ee&&_0x37e1fe&&(_0x37e1fe['body']=_0xf09aa9,_0x37e1fe['statusCode']=_0x37e1fe['status']),_0x25ae88(_0x4389ee,_0x37e1fe,_0xf09aa9);});else if(this['isQuanX']())_0x11b528['method']='POST',this['isNeedRewrite']&&(_0x11b528['opts']=_0x11b528['opts']||{},Object['assign'](_0x11b528['opts'],{'hints':!(0xb6c85^0xb6c84)})),$task['fetch'](_0x11b528)['then'](_0x401db0=>{const {statusCode:_0x4cae21,statusCode:_0x5db047,headers:_0x1cb496,body:_0x3f4dc0}=_0x401db0;_0x25ae88(null,{'status':_0x4cae21,'statusCode':_0x5db047,'headers':_0x1cb496,'body':_0x3f4dc0},_0x3f4dc0);},_0x3561e6=>_0x25ae88(_0x3561e6));else if(this['isNode']()){this['initGotEnv'](_0x11b528);const {url:_0x1af97c,..._0x43d0c5}=_0x11b528;this['got']['post'](_0x1af97c,_0x43d0c5)['then'](_0x189bc9=>{const {statusCode:_0x32e8fe,statusCode:_0x458de9,headers:_0x4c08cb,body:_0x5c0b58}=_0x189bc9;_0x25ae88(null,{'status':_0x32e8fe,'statusCode':_0x458de9,'headers':_0x4c08cb,'body':_0x5c0b58},_0x5c0b58);},_0x376ec4=>{const {message:_0x1ac9c6,response:_0x360b74}=_0x376ec4;_0x25ae88(_0x1ac9c6,_0x360b74,_0x360b74&&_0x360b74['body']);});}}['time'](_0x4bede6,_0x24b2ae=null){const _0x161f86=_0x24b2ae?new Date(_0x24b2ae):new Date();let _0x1376d1={'M+':_0x161f86['getMonth']()+0x1,'d+':_0x161f86['getDate'](),'H+':_0x161f86['getHours'](),'m+':_0x161f86['getMinutes'](),'s+':_0x161f86['getSeconds'](),'q+':Math['floor']((_0x161f86['getMonth']()+(0x45ade^0x45add))/(0xde1f7^0xde1f4)),'S':_0x161f86['getMilliseconds']()};/(y+)/['test'](_0x4bede6)&&(_0x4bede6=_0x4bede6['replace'](RegExp['$1'],(_0x161f86['getFullYear']()+'')['substr']((0x4f963^0x4f967)-RegExp['$1']['length'])));for(let _0x133180 in _0x1376d1)new RegExp('('+_0x133180+')')['test'](_0x4bede6)&&(_0x4bede6=_0x4bede6['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x1376d1[_0x133180]:('00'+_0x1376d1[_0x133180])['substr']((''+_0x1376d1[_0x133180])['length'])));return _0x4bede6;}['msg'](_0x2c6eaa=_0x47c0a8,_0x54a42f='',_0x3def13='',_0x9358af){const _0x18a99a=_0x4c5466=>{if(!_0x4c5466)return _0x4c5466;if('string'==typeof _0x4c5466)return this['isLoon']()?_0x4c5466:this['isQuanX']()?{'open-url':_0x4c5466}:this['isSurge']()?{'url':_0x4c5466}:void 0x0;if('object'==typeof _0x4c5466){if(this['isLoon']()){let _0x2af467=_0x4c5466['openUrl']||_0x4c5466['url']||_0x4c5466['open-url'],_0x39bb72=_0x4c5466['mediaUrl']||_0x4c5466['media-url'];return{'openUrl':_0x2af467,'mediaUrl':_0x39bb72};}if(this['isQuanX']()){let _0x1fa684=_0x4c5466['open-url']||_0x4c5466['url']||_0x4c5466['openUrl'],_0x3f469a=_0x4c5466['media-url']||_0x4c5466['mediaUrl'];return{'open-url':_0x1fa684,'media-url':_0x3f469a};}if(this['isSurge']()){let _0x146191=_0x4c5466['url']||_0x4c5466['openUrl']||_0x4c5466['open-url'];return{'url':_0x146191};}}};if(this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x2c6eaa,_0x54a42f,_0x3def13,_0x18a99a(_0x9358af)):this['isQuanX']()&&$notify(_0x2c6eaa,_0x54a42f,_0x3def13,_0x18a99a(_0x9358af))),!this['isMuteLog']){let _0x3a39a0=['','==============📣系统通知📣=============='];_0x3a39a0['push'](_0x2c6eaa),_0x54a42f&&_0x3a39a0['push'](_0x54a42f),_0x3def13&&_0x3a39a0['push'](_0x3def13),console['log'](_0x3a39a0['join']('\x0a')),this['logs']=this['logs']['concat'](_0x3a39a0);}}['log'](..._0x2c6d08){_0x2c6d08['length']>(0xa1964^0xa1964)&&(this['logs']=[...this['logs'],..._0x2c6d08]),console['log'](_0x2c6d08['join'](this['logSeparator']));}['logErr'](_0x35a28d,_0x5a15de){const _0x49a659=!this['isSurge']()&&!this['isQuanX']()&&!this['isLoon']();_0x49a659?this['log']('','❗️'+this['name']+',\x20错误!',_0x35a28d['stack']):this['log']('','❗️'+this['name']+',\x20错误!',_0x35a28d);}['wait'](_0x36176d){return new Promise(_0x2142e6=>setTimeout(_0x2142e6,_0x36176d));}['done'](_0x2ed858={}){const _0x2dcbf5=new Date()['getTime'](),_0xa9fec6=(_0x2dcbf5-this['startTime'])/(0xe85c2^0xe862a);this['log']('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0xa9fec6+'\x20秒'),this['log'](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x2ed858);}}(_0x47c0a8,_0x4f2455);}