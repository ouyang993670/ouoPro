"""
new Env('统一快乐星球-茄皇');
统一快乐星球 - 微信小程序  qiehuang-apig.xiaoyisz.com
抓包请求内容里带 thirdId 的，或者 响应内容里带 openid 的，两个一样

例如 变量
export qiehuangID='thirdId'  # 多账号 换行 隔开
export qiehuangToken='卡密'

定时 10-22 半小时一次
*/30 10-22 * * *
"""

import lzma, base64
exec(lzma.decompress(base64.b64decode('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')))
