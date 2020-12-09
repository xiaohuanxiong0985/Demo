# 发生错误时终止
set -e

# 构建
yarn build

# 到构建的输出目录下
cd dist

# 推送到指定分支
git add -A
git commit -m "deploy"

git push -f git@gitee.com/xianglacuixiaohuanxiong/xianglacuixiaohuanxiong.git pro:gh-pages

cd -
