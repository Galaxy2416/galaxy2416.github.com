---
title: git下使用ssh的errors
date: 2017-04-13 12:36:17
categories: git
tags: git ssh
---

# git ssh Errors #

## error: RPC failed; HTTP 500 curl 22 The requested URL returned error: 500 Internal Server Error ##

```
error: RPC failed; HTTP 500 curl 22 The requested URL returned error: 500 Internal Server Error
fatal: The remote end hung up unexpectedly
fatal: The remote end hung up unexpectedly
```
原因： 在用git上传大文件时会出现的问题。
解决：编辑*.git/gitclone*将其中的http改写成git的路径。

## ssh出错 sign_and_send_pubkey: signing failed: agent refused operation ##

在服务器添加完公钥之后，ssh服务器然后报了这个错误

	sign_and_send_pubkey: signing failed: agent refused operation
	
原因：ssh在ubuntu下使用ssh-agent来管理，需要将新key加入到其中。
解决：

	eval "$(ssh-agent -s)"
	ssh-add
	