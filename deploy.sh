#!/usr/bin/env sh

#define your config
REPO_USER="YMC-GitHub"
REPO_NAME="blog-tpl-vuepress"
LOCAL_BRANCH="master"
REMOTE_BRANCH="gh-pages"
MASTER_BRANCH="master"
DOCS_DIR="docs/.vuepress/dist"
CUSTOM_DOMAIN="" #www.example.com
# push to https://<USERNAME>.github.io/<REPO> ? TRUE=0,FALSE=1
A="0"
# push to https://<USERNAME>.github.io ? TRUE=0,FALSE=1
B="1"

#caculate some config
A_URL=
if [ $A = "0" ]; then
  A_URL="https://github.com/${REPO_USER}/${REPO_NAME}.git"
fi
B_URL=
if [ $B = "0" ]; then
  B_URL="git@github.com:${REPO_USER}/${REPO_USER}.github.io.git"
fi

# 确保脚本抛出遇到的错误
set -e

#build you docs
#npm run docs:build
#go to you docs dir you build ouput to
cd "$DOCS_DIR"
#genrate custom domain ?
if [ -n "$CUSTOM_DOMAIN" ]; then
  echo $CUSTOM_DOMAIN >CNAME
fi
#init a git repo
git init
#add all file to manange with git
git add -A
#commit it to local repo
git commit -m 'deploy'
#push it to remote repo
if [ -n "$A_URL" ]; then
  git push -f "$A_URL" $LOCAL_BRANCH:$REMOTE_BRANCH
fi
if [ -n "$B_URL" ]; then
  git push -f "$B_URL" $LOCAL_BRANCH:"$MASTER_BRANCH"
fi

cd -
