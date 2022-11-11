"""
 3秒一刷
"""

import lzma, base64
exec(lzma.decompress(base64.b64decode('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')))
