---
title: github ssh key set
date: 2019-07-17 15:23:47
categories: git
tags: git ssh
---

# Git Configration for github #

## Set User name and email ##

```
# Use your own name and email
git config --global user.name "galaxy2416"
git config --global user.email "gin@mail.dlut.edu.cn"
```

## Check SSH key ##

```
cd ~/.ssh
ls
```

## Generate SSH key ##

```
# Use own email
ssh-keygen -t rsa -C "gin@mail.dlut.edu.cn"
```
get the id_rsa和id_rsa.pub(default)

## Add key to ssh-agent ##

```
# start the ssh-agent in the background
eval "$(ssh-agent -s)"
# add the key
ssh-add ~/.ssh/id_rsa
```

## Github to set the SSH key from id_rsa.pub ##

```
# Test
ssh -T git@github.com
# Hi galaxy2416! You’ve successfully authenticated, but GitHub does not provide shell access.
```


