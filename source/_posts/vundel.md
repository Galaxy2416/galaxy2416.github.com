title: vim系列之插件vundel
date: 2015-07-14 23:00:53
tags:
categories: vim
---
###vim系列之插件vundel

系列说明：如果vim帮助你很多，请帮助乌干达的儿童。[ICCF](http://iccf-holland.org/)

环境如下：
- OS系统 : ubuntu 12.10
- 编辑器 : vim + gvim

Vundle(Vim bundle) 是一个基于git的vim的插件管理器。它会把vim的插件用类似包管理的方式，
这样只需要在vimrc的配置文件中标记好相关的插件，就可以委托给vundel来下载，更新，删除

vundel项目在github中[https://github.com/gmarik/vundle](https://github.com/gmarik/vundle)
<!--more-->
####vundel的安装
1. github的官网(或其它地方)下载下来，与一般插件无异，放置于`/.vim/bundle/vundle`
2. `git clone https://github.com/gmarik/vundle.git  ~/.vim/bundle/vundle`

####vundel的配置
```
" ---------- The Specification of The Plugs 主要插件详细用法说明 ---------------------
" :Budlexxxx		 -- [vundle]
" :Tlist                 --呼出变量和函数列表 [TagList插件]
" :FencView              --查看文件编码和更改文件编码 [FencView插件]
" :LoadTemplate          --呼出语法模板 [Load_Template插件]
" :AuthorInfoDetect      --添加作者、时间等信息 [NERD_commenter && authorinfo插件]


" ----------------------------------- vundel ------------------------------------
" vundle 
set rtp+=~/.vim/bundle/vundle/  " 增加runtimePath的路径 

call vundle#rc() 				" 启动vundle

" let Vundle manage Vundle

" required!

Bundle 'gmarik/vundle'


" My Bundles here: /* 插件配置格式 */

"

" original repos on github （Github网站上非vim-scripts仓库的插件，按下面格式填写）

	" colors 

" Bundle 'altercation/solarized'

	" Plug In
 
Bundle 'tpope/vim-fugitive'
Bundle 'Lokaltog/vim-easymotion'
Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
" Bundle 'tpope/vim-rails.git'		" something for Ruby

" vim-scripts repos （vim-scripts仓库里的，按下面格式填写）

	" Plug In

Bundle 'L9'
Bundle 'FuzzyFinder'
Bundle 'taglist.vim'
Bundle 'LaTeX-Box'
Bundle 'a.vim'
Bundle 'AuthorInfo'

" Can not work without cmake+python-dev
Bundle 'Valloric/YouCompleteMe'
" Bundle 'Chiel92/vim-autoformat'
Bundle'scrooloose/nerdtree'
Bundle'winmanager'
Bundle 'kien/ctrlp.vim'
Bundle 'bling/vim-airline'
Bundle 'xieyu/pyclewn'
Bundle 'scrooloose/nerdcommenter'
" Bundle'scrooloose/syntastic'	" a static syntax checker
	" colors
Bundle 'molokai'
Bundle 'desert256.vim'

" non github repos （非上面两种情况的，按下面格式填写）

" Bundle 'git://git.wincent.com/command-t.git'



" /** vundle命令 **/

" Brief help

" :BundleList - list configured bundles

" :BundleInstall(!) - install(update) bundles

" :BundleSearch(!) foo - search(or refresh cache first) for foo

" :BundleClean(!) - confirm(or auto-approve) removal of unused bundles
```

#### vundel的使用

* `:BundleList` - 列出安装的插件	
* `:BundleInstall` - 安装插件
* `:BundleUpdate` - 更新插件
* `:BundleSearch foo ` - 查找foo
* `:BundleClean` - 移除无用插件

***
vundle的特色就是在vimrc中提供了所有插件的信息，只需要从github上下载和更新即可。只需一个vimrc就可以畅行天下。

