"""
new Env('浩阅小说');
浩阅小说  - app  ah2.zhangyue.com
抓包带 zysid 的整个链接

例如 变量
export hyxsUrl='/zycl/sign/yushufang/sign?usr=xxxxxx'  # 多账号 换行 隔开
export hyxsToken='卡密'

定时
0 8 * * *
"""

import lzma, base64
exec(lzma.decompress(base64.b64decode('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')))