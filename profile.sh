#!/bin/bash
#
# 下载守望先锋个人生涯数据

COOKIE=$(awk -F ':' '/\[session\]/{a=1}a==1&&$1~/cookie/{print $2;exit}' ./config.ini)
echo $COOKIE

# 游戏数据
game_data=$(
curl 'https://ow.blizzard.cn/action/career/profile/gamedata?1616676751505' \
  -X 'POST' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
  -H 'Origin: https://ow.blizzard.cn' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://ow.blizzard.cn/career/' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7' \
  -H "Cookie: ${COOKIE}" \
  --compressed
)

# 用户生涯数据
profile=$(
curl 'https://ow.blizzard.cn/action/career/profile?1616680599717' \
  -X 'POST' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
  -H 'Origin: https://ow.blizzard.cn' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://ow.blizzard.cn/career/' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7' \
  -H "Cookie: ${COOKIE}" \
  --compressed
)

function pretty_print_json() {
  script="
import fileinput, json;

raw = fileinput.input();
obj = json.loads(''.join(raw));
res = json.dumps(obj, sort_keys=True, indent=4);
print(res)
  "

  python -c "${script}"
}

echo "${game_data}" | pretty_print_json > game_data.json
echo "${profile}" | pretty_print_json > profile.json
