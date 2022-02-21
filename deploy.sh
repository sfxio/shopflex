set -e

# 构建
rm -rf dist
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# 需要使用 github token
# https://YOUR_TOKEN@github.com/sfxio/shopflex.git
git push -f https://github.com/sfxio/shopflex.git master:gh-pages

cd -
