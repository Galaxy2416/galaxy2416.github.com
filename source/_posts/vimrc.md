title: vim系列之配置文件
date: 2015-07-15 00:47:03
tags:
categories: vim
---

##vim配置文件

####搜索路径
vim的配置文件搜索路径从Local到Global的搜索顺序为：
* `~/.vim/vimrc` -> Local 	
* `~/.vimrc` -> Local
* `/etc/vim/vimrc` -> Global

####GVIM于VIM
Gvim会继承vim的配置文件，同时有.gvimrc的单独配置文件
* `~/.vim/gvimrc` -> Local 	
* `~/.gvimrc` -> Local
* `/etc/vim/gvimrc` -> Global
<!--more-->
####配置内容
以下为个人文件的内容， 作为记录
<center>**vimrc**</center>
```
" -----------------   Author: Sx (fix Ruchee's)
" -----------------    Email: 346940792@qq.com
" -----------------     Date: 2015-07-09
" Determine the operating system
if (has("win32") || has("win64") || has("win32unix"))
    let g:isWin = 1
else
    let g:isWin = 0
endif


" 256 color xterm-256color or 8 color 
" if &term=="xterm"
"    set t_Co=8
" endif

"  fonts

"set guifont=Courier\ New:h10
"set guifont=Eunjin\ 11
set guifont=Droid\ Sans\ Mono\ for\ Powerline\ 11

" Ctrl + K     --光标移上一行末尾
" Ctrl + H     --光标移行首
" Ctrl + L     --光标移行尾
" Ctrl + Z     --取代ESC模式键 [和Lingos快捷键有冲突]
" Ctrl + S     --保存文件
" Ctrl + C     --编译 [支持Gas、C/C++、Java、C#、Haskell]
" \\run	  	   --运行 [支持Gas、C/C++、Java、C#、Haskell、Bash、Lua、Perl、Python、Ruby]
" Ctrl + E     --添加注释 [插入模式下] [添加的是C/C++的行注释，所以只适用于C/C++]
" Ctrl + E     --一步加载语法模板和作者、时间信息 [非插入模式下] [本质是:LoadTemplate和:AuthorInfoDetect的结合]
" Ctrl + B     --调出Taglist插件
" Shift + C    --选中状态下复制 [只在vmap模式下生效]
" Shift + V    --粘贴剪切板中的内容 [全模式有效]

" <C-P>                  --单词补全
" <C-X><C-L>             --整行补全
" Tab键                  --插入模式下的全功能语法补全，相当强大 [snipMate插件]
" Tab键                  --Python Insert模式下代码智能补全 [Pydiction插件]

" wm                     --开启文档浏览窗口
" \ww                    --进入vimWiki模式

" za                     --打开或关闭当前折叠
" zM                     --关闭所有折叠
" zR                     --打开所有折叠

" :set syntax=cpp        --手动选择语法高亮 [或 :set filetype=cpp]

" :%!xxd                 --转储二进制文件，以十六进制形式显示
" :%!xxd -r              --还原二进制文件


set tabstop=4                " Set the width of the TAB key		" 设置tab键的宽度 
set shiftwidth=4             " Set the width of shifting a newline	" 换行时行间交错使用4个空格
set autoindent               " Autoindent				" 自动对齐
"set ai!                     " Disable the autoindent			" 设置自动缩进
set backspace=2              " Enable the backspace			" 设置退格键可用
set backspace=indent,eol,start
set cindent shiftwidth=4     " Set autoindent 4 spacing			" 自动缩进4空格
set smartindent              " Smartindent				" 智能自动缩进
set number                      " Display line number			" 显示行号
set showmatch                " Brackets match				" 显示括号配对情况
set mouse=a                  " Enable the mouse				" 启用鼠标
set ruler                    " Shows the state of the cursor position	" 右下角显示光标位置的状态行
set incsearch                " /b could search book			" 查找book时，当输入/b时会自动找到
set hlsearch                 " high light search			" 开启高亮显示结果
"set nowrapscan              " search stop on the ends of the file	" 搜索到文件两端时不重新搜索
set nocompatible             " No compatible				" 关闭兼容模式
set cursorline               " High light the current line		" 突出显示当前行
set hidden                   " Allow shitf the buffer without saving the Buffer	"允许在有未保存的修改时切换缓冲区
"set list                    " Show tab					" 显示Tab符，使用一高亮竖线代替
"set listchars=tab:\|\ ,

" The width of the Plug
" 插件窗口的宽度，如TagList,NERD_tree等，自己设置
let s:PlugWinSize = 30

syntax enable                " 打开语法高亮
syntax on                    " 开启文件类型侦测
filetype indent on           " 针对不同的文件类型采用不同的缩进格式
filetype plugin on           " 针对不同的文件类型加载对应的插件
filetype plugin indent on

function! MaximizeWindow()
	silent !wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz
endfunction 
if has("gui_running")
    au GUIEnter call MaximizeWindow		"窗口启动时自动最大化  
    "set guioptions-=m        " menu		" 隐藏菜单栏
    "set guioptions-=T        " toolbar		" 隐藏工具栏
    "set guioptions-=L       " leftRoll		" 隐藏左侧滚动条
    "set guioptions-=r       " rightRoll	" 隐藏右侧滚动条
    "set guioptions-=b       " bottomRoll	" 隐藏底部滚动条
    "set showtabline=0       " Tab		" 隐藏Tab栏
endif

set writebackup              " No backup	" 设置无备份文件
set nobackup
set autochdir                " set the current dir	" 设定文件浏览器目录为当前目录
set nowrap		     " no atuo newline		" 设置不自动换行

" manual 手工定义折叠 
" indent 更多的缩进表示更高级别的折叠 
" expr 用表达式来定义折叠 
" syntax 用语法高亮来定义折叠 
" diff 对没有更改的文本进行折叠 
" marker 对文中的标志折叠 

set foldmethod=syntax        " 选择代码折叠类型
set foldlevel=100             " close all the fold first		" 禁止自动折叠

" Status bar
set laststatus=2	" Display the status		" 总是显示状态栏
" highlight StatusLine cterm=bold ctermfg=yellow ctermbg=blue
" 获取当前路径，将$HOME转化为~
function! CurDir()
    let curdir = substitute(getcwd(), $HOME, "~", "g")
    return curdir
endfunction
set statusline=[%n]\ %f%m%r%h\ \|\ \ pwd:\ %{CurDir()}\ \ \|%=\|\ %l,%c\ %p%%\ \|\ ascii=%b,hex=%b%{((&fenc==\"\")?\"\":\"\ \|\ \".&fenc)}\ \|\ %{$USER}\ @\ %{hostname()}\ 

" 编码设置
"set fileencoding=utf-8
set fileencodings=utf-8,cp936,gbk,gb18030,big5,latin1

" For Haskell
:let hs_highlight_delimiters=1            " 高亮定界符
:let hs_highlight_boolean=1               " 把True和False识别为关键字
:let hs_highlight_types=1                 " 把基本类型的名字识别为关键字
:let hs_highlight_more_types=1            " 把更多常用类型识别为关键字
:let hs_highlight_debug=1                 " 高亮调试函数的名字
:let hs_allow_hash_operator=1             " 阻止把#高亮为错误


set laststatus=2                          " 开启状态栏信息
set cmdheight=2                           " 命令行的高度，默认为1，这里设为2

" 状态行显示的内容 [包括系统平台、文件类型、坐标、所占比例、时间等]
" set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [POS=%l,%v][%p%%]\ %y%r%m%*%=\ %{strftime(\"%d/%m/%y\ -\ %H:%M\")}


" ######### 自定义快捷键 ######### "

" Ctrl + K 将光标移到上一行的末尾
" imap <C-K> <ESC>kA

" Ctrl + L 将光标移到行尾
" :imap <C-L> <ESC>A

" Ctrl + H 将光标移到行首
" :imap <C-H> <ESC>I

" Ctrl + S 保存文件
map <C-S> <ESC>:w<CR>
imap <C-S> <ESC>:w<CR>a
vmap <C-S> <ESC>:w<CR>
" Ctrl + B 调出TagList插件
map <C-B> <ESC>:Tlist<CR>
imap <C-B> <ESC>:Tlist<CR>
vmap <C-B> <ESC>:Tlist<CR>

" Shift + C 选中状态下复制
vnoremap <S-C> "+y

" Shift + V 粘贴剪切板中的内容
map <S-V> "+p
"imap <S-V> <esc>"+pa
vmap <S-V> d"+P

" Ctrl + E 一步加载语法模板和作者、时间信息 [非插入模式]
map <C-E> <ESC>:AuthorInfoDetect<CR><ESC>Gi
vmap <C-E> <ESC>:AuthorInfoDetect<CR><ESC>Gi

" Ctrl + E 在当前行添加C语言注释 [插入模式]
imap <C-E> /*  <ESC>hhi

" ^z快速进入shell
nmap <C-.> :shell<cr>

" ######### 括号、引号、中括号等自动匹配 ######### "

:inoremap ( ()<ESC>i

:inoremap ) <c-r>=ClosePair(')')<CR>

:inoremap { {}<ESC>i

:inoremap } <c-r>=ClosePair('}')<CR>

:inoremap [ []<ESC>i

:inoremap ] <c-r>=ClosePair(']')<CR>
":inoremap < <><ESC>i

:inoremap > <c-r>=ClosePair('>')<CR>

:inoremap " ""<ESC>i

:inoremap ' ''<ESC>i

:inoremap ` ``<ESC>i

 function ClosePair(char)
    if getline('.')[col('.') - 1] == a:char
        return "\<Right>"
    else
        return a:char
    endif
endf
 

" ######### 一键保存和编译 ######### "

" 编译C源文件
func! CompileGcc()
    exec "w"
    let compilecmd="!gcc -Wall -std=c99 "
    let compileflag="-o %<"
    exec compilecmd." % ".compileflag
endfunc

" 编译C++源文件
func! CompileCpp()
    exec "w"
    let compilecmd="!g++ -Wall "
    let compileflag="-o %<"
    exec compilecmd." % ".compileflag
endfunc

" 编译Haskell源文件
func! CompileHaskell()
    exec "w"
    let compilecmd="!ghc --make "
    let compileflag="-o %<"
    exec compilecmd." % ".compileflag
endfunc

" 编译Java源文件
func! CompileJava()
    exec "w"
    exec "!javac %"
endfunc

" 编译C#源文件
func! CompileCs()
    exec "w"
    exec "!csc %"
endfunc

" 编译Gas源文件
func! CompileGas()
    exec "w"
    exec "!gcc -Wall -ggdb -o %< %"
endfunc

" 运行Shell源文件
func! RunShell()
    exec "w"
    exec "!sh %"
endfunc

" 运行Lua源文件
func! RunLua()
    exec "w"
    exec "!lua %"
endfunc

" 运行Perl源文件
func! RunPerl()
    exec "w"
    exec "!perl %"
endfunc

" 运行Python源文件
func! RunPython()
    exec "w"
    exec "!python %"
endfunc

" 运行Ruby源文件
func! RunRuby()
    exec "w"
    exec "!ruby %"
endfunc


" 根据文件类型自动选择相应的编译函数
func! CompileCode()
        exec "w"
        if &filetype == "c"
            exec "call CompileGcc()"
        elseif &filetype == "cpp"
            exec "call CompileCpp()"
        elseif &filetype == "haskell"
            exec "call CompileHaskell()"
        elseif &filetype == "java"
            exec "call CompileJava()"
        elseif &filetype == "cs"
            exec "call CompileCs()"
        elseif &filetype == "asm"
            exec "call CompileGas()"
        elseif &filetype == "sh"
            exec "call RunShell()"
        elseif &filetype == "lua"
            exec "call RunLua()"
       elseif &filetype == "perl"
            exec "call RunPerl()"
        elseif &filetype == "python"
            exec "call RunPython()"
        elseif &filetype == "ruby"
            exec "call RunRuby()"
        endif
endfunc

" 运行可执行文件
func! RunResult()
        exec "w"
        if &filetype == "c"
            exec "! ./%<"
        elseif &filetype == "cpp"
            exec "! ./%<"
        elseif &filetype == "haskell"
            exec "! ./%<"
        elseif &filetype == "java"
            exec "!java %<"
        elseif &filetype == "cs"
            exec "! ./%<"
        elseif &filetype == "asm"
            exec "! ./%<"
        elseif &filetype == "sh"
            exec "!sh ./%<.sh"
        elseif &filetype == "lua"
            exec "!lua ./%<.lua"
        elseif &filetype == "perl"
            exec "!perl ./%<.pl"
        elseif &filetype == "python"
            exec "!python ./%<.py"
        elseif &filetype == "ruby"
            exec "!ruby ./%<.rb"
        endif
endfunc

"<F10>  gdb调试
map <F10> :call Debug()<CR>
func!  Debug()
exec "w"
exec "!gcc % -o %< -gstabs+"
exec "!gdb ./%<"
endfunc



" Ctrl + C 一键保存、编译
" Ctrl + R 一键保存、运行
map <C-C> :call CompileCode()<CR>
imap <C-C> <ESC>:call CompileCode()<CR>
vmap <C-C> <ESC>:call CompileCode()<CR>

nnoremap  <Leader><Leader>run :call RunResult()<CR>
" imap <C-R> <ESC>:call RunResult()<CR>
" vmap <C-R> <ESC>:call RunResult()<CR>



" let Tlist_Ctags_Cmd = '/usr/local/bin/ctags'


" ----------------------------------- PLUG ------------------------------------
" ----------------------------------- PLUG ------------------------------------
" ----------------------------------- PLUG ------------------------------------

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


" see :h vundle for more details or wiki for FAQ

" NOTE: comments after Bundle command are not allowed..

" ----------------------------------- vundel end ------------------------------------

" ----------------------------------- GUI gvim ------------------------------------

" Determine the terminal or gvim
if has("gui_running")
    let g:isGUI = 1
" Color for gvim
colorscheme desert         
nmap <Leader>mo : colorscheme molokai <CR>
nmap <Leader>de : colorscheme desert <CR>

else
    let g:isGUI = 0
" Color for vim
colorscheme molokai     
endif

" ----------------------------------- GUI gvim end ------------------------------------
 
" ctags + cscope {

" 更新ctags和cscope索引
" href: http://www.vimer.cn/2009/10/把vim打造成一个真正的ide2.html
" 稍作修改，提取出DeleteFile函数，修改ctags和cscope执行命令
map <F12> :call Do_CsTag()<cr>
function! Do_CsTag()
    let dir = getcwd()

    "先删除已有的tags和cscope文件，如果存在且无法删除，则报错。
    if ( DeleteFile(dir, "tags") ) 
        return 
    endif
    if ( DeleteFile(dir, "cscope.files") ) 
        return 
    endif
    if ( DeleteFile(dir, "cscope.out") ) 
        return z
    endif

    if(executable('ctags'))
        silent! execute "!ctags -R --c++-kinds=+p --fields=+iaS --extra=+q ."
    endif
    if(executable('cscope') && has("cscope") )
        if(g:isWin)
            silent! execute "!dir /s/b *.c,*.cpp,*.h,*.java,*.cs >> cscope.files"
        else
            silent! execute "!find . -iname '*.[ch]' -o -name '*.cpp' > cscope.files"
        endif
        silent! execute "!cscope -b"
        execute "normal :"
        if filereadable("cscope.out")
            execute "cs add cscope.out"
        endif
    endif
    " 刷新屏幕
    execute "redr!"
endfunction

function! DeleteFile(dir, filename)
    if filereadable(a:filename)
        if (g:isWin)
            let ret = delete(a:dir."\\".a:filename)
        else
            let ret = delete("./".a:filename)
        endif
        if (ret != 0)
            echohl WarningMsg | echo "Failed to delete ".a:filename | echohl None
            return 1
        else
            return 0
        endif
    endif
    return 0
endfunction

" cscope 绑定
if has("cscope")
    set csto=1
    set cst
    set nocsverb
    if filereadable("cscope.out")
        cs add cscope.out
    endif
    set csverb
    " s: C语言符号  g: 定义     d: 这个函数调用的函数 c: 调用这个函数的函数
    " t: 文本       e: egrep模式    f: 文件     i: include本文件的文件
    "let mapleader = ","
    "let g:mapleader = ","
    nmap <leader>fs :cs find s <C-R>=expand("<cword>")<CR><CR>
    nmap <leader>fg :cs find g <C-R>=expand("<cword>")<CR><CR>
    nmap <leader>fc :cs find c <C-R>=expand("<cword>")<CR><CR>
    nmap <leader>ft :cs find t <C-R>=expand("<cword>")<CR><CR>
    nmap <leader>fe :cs find e <C-R>=expand("<cword>")<CR><CR>
    nmap <leader>F :cs find f <C-R>=expand("<cfile>")<CR><CR>
    nmap <leader>fi :cs find i <C-R>=expand("<cfile>")<CR>$<CR>
    nmap <leader>fd :cs find d <C-R>=expand("<cword>")<CR><CR>

endif

" }


" ---------- 主要插件详细用法说明 ---------------------

" :Tlist                 --呼出变量和函数列表 [TagList插件]
" :FencView              --查看文件编码和更改文件编码 [FencView插件]
" :LoadTemplate          --呼出语法模板 [Load_Template插件]
" :AuthorInfoDetect      --添加作者、时间等信息 [NERD_commenter && authorinfo插件]

" ---------- a.vim [自动切换C/C++同名头文件] ----------
"
" :A                     --切换同名头文件并独占整个屏幕
" :AS                    --切换同名头文件并垂直分屏，头文件在上
" :AV                    --切换同名头文件并水平分割，头文件在左

" ---------- mark.vim [追踪高亮指定关键字] ------------
"
" \m                     --normal模式下，在想要高亮的单词上面敲击\m即可高亮或取消高亮该单词
" :Mark                  --取消所有高亮
" :Mark abc              --指定高亮单词 abc 或取消高亮 abc




" Airline {

if has("gui_running")
	let g:airline_theme="light"
endif
set laststatus=2
" 使用powerline打过补丁的字体
 let g:airline_powerline_fonts = 1
" 开启tabline
let g:airline#extensions#tabline#enabled = 1
" tabline中当前buffer两端的分隔字符
let g:airline#extensions#tabline#left_sep = ' '
" tabline中未激活buffer两端的分隔字符
let g:airline#extensions#tabline#left_alt_sep = '|'
" tabline中buffer显示编号
let g:airline#extensions#tabline#buffer_nr_show = 1
" 映射切换buffer的键位
nnoremap [b :bp<CR>
nnoremap ]b :bn<CR>

"}

" authorinfo {

" NERD_commenter && authorinfo 自动添加作者、时间等信息，使用:AuthorInfoDetect
let g:vimrc_author='Galaxy2416'
let g:vimrc_email='sunxiao.gin@gmail.com'
let g:vimrc_homepage='Compiler: gcc&&g++'
let g:vimrc_history='gcc&&g++'
nmap <C-E> :AuthorInfoDetect<cr>
" }

" QuickFix {

" Quick Fix 设置
map <leader>cw :copen<cr>
map <F3> :cp<cr>
map <F4> :cn<cr>

" }

" A {
" A few of quick commands to swtich between source files and header files quickly.

" :A switches to the header file corresponding to the current file being edited (or vise versa)

" :AS splits and switches

" :AV vertical splits and switches

" }

" WinManager {

" 直接输入 wm 命令即可开启文件浏览窗口
let g:winManagerWindowLayout="NERDTree|TagList"
let g:NERDTree_title="[NERDTree]"
function! NERDTree_Start()  
    exec 'NERDTree'  
endfunction

function! NERDTree_IsValid()  
    return 1  
endfunction
nmap <silent> wm :if IsWinManagerVisible() <BAR> WMToggle<CR> <BAR> else <BAR> WMToggle<CR>:q<CR> endif <CR><CR>
" }


" YouCompelteMe { 
" Bundle "davidhalter/jedi"
" https://valloric.github.io/YouCompleteMe/

" }


" TagList {
let Tlist_Ctags_Cmd= "ctags" 			
let Tlist_Use_Right_Window=0			"left
let Tlist_Show_One_File=0 			"让taglist可以同时展示多个文件的函数列表
let Tlist_File_Fold_Auto_Close=1 		"非当前文件，函数列表折叠隐藏
let Tlist_Exit_OnlyWindow=1 			"当taglist是最后一个分割窗口时，自动推出vim
"是否一直处理tags.1:处理;0:不处理
let Tlist_Process_File_Always=1 		"实时更新tags
let Tlist_Inc_Winwidth=0

" ctags
"set tags+=C:\Develop\MinGW\include\tags               " For MinGW
"set tags+=C:\Develop\GTK\include\tags                 " For GTK+

" }


"  NERDTree {
"
" :NERDTree              --启动NERDTree插件
" o [小写]               --切换当前文件或目录的打开、关闭状态
" u                      --打开上层目录
" p [小写]               --返回上层目录
" P [大写]               --返回根目录
" K                      --转到当前目录第一个节点
" J                      --转到当前目录最后的节点
" m                      --显示文件系统菜单 [增、删、移]
" ?                      --弹出帮助菜单
" q                      --退出该插件
let NERDTreeDirArrows = 0
" }

" ----------------------------------- FuzzyFinder -------------------------------------
"
" FuzzyFinder setup"{{{
"
"let g:fuf_modesDisable = [ 'mrufile', 'mrucmd', ]
let g:fuf_modesDisable = []
let g:fuf_mrufile_maxItem = 400
let g:fuf_mrucmd_maxItem = 400
nnoremap <silent> sj     :FufBuffer<CR>
nnoremap <silent> sk     :FufFileWithCurrentBufferDir<CR>
nnoremap <silent> sK     :FufFileWithFullCwd<CR>
nnoremap <silent> s<C-k> :FufFile<CR>
nnoremap <silent> sl     :FufCoverageFileChange<CR>
nnoremap <silent> sL     :FufCoverageFileChange<CR>
nnoremap <silent> s<C-l> :FufCoverageFileRegister<CR>
nnoremap <silent> sd     :FufDirWithCurrentBufferDir<CR>
nnoremap <silent> sD     :FufDirWithFullCwd<CR>
nnoremap <silent> s<C-d> :FufDir<CR>
nnoremap <silent> sn     :FufMruFile<CR>
nnoremap <silent> sN     :FufMruFileInCwd<CR>
nnoremap <silent> sm     :FufMruCmd<CR>
nnoremap <silent> su     :FufBookmarkFile<CR>
noremap <silent> s<C-u> :FufBookmarkFileAdd<CR>
vnoremap <silent> s<C-u> :FufBookmarkFileAddAsSelectedText<CR>
nnoremap <silent> si     :FufBookmarkDir<CR>
nnoremap <silent> s<C-i> :FufBookmarkDirAdd<CR>
nnoremap <silent> st     :FufTag<CR>
nnoremap <silent> sT     :FufTag!<CR>
nnoremap <silent> s<C-]> :FufTagWithCursorWord!<CR>
nnoremap <silent> s,     :FufBufferTag<CR>
nnoremap <silent> s<     :FufBufferTag!<CR>
vnoremap <silent> s,     :FufBufferTagWithSelectedText!<CR>
vnoremap <silent> s<     :FufBufferTagWithSelectedText<CR>
nnoremap <silent> s}     :FufBufferTagWithCursorWord!<CR>
nnoremap <silent> s.     :FufBufferTagAll<CR>
nnoremap <silent> s>     :FufBufferTagAll!<CR>
vnoremap <silent> s.     :FufBufferTagAllWithSelectedText!<CR>
vnoremap <silent> s>     :FufBufferTagAllWithSelectedText<CR>
nnoremap <silent> s]     :FufBufferTagAllWithCursorWord!<CR>
nnoremap <silent> sg     :FufTaggedFile<CR>
nnoremap <silent> sG     :FufTaggedFile!<CR>
nnoremap <silent> so     :FufJumpList<CR>
nnoremap <silent> sp     :FufChangeList<CR>
nnoremap <silent> sq     :FufQuickfix<CR>
nnoremap <silent> sy     :FufLine<CR>
nnoremap <silent> sh     :FufHelp<CR>
nnoremap <silent> se     :FufEditDataFile<CR>
nnoremap <silent> sr     :FufRenewCache<CR>
"
" \fuz and shift+F4 call FuzzyFinder menu ""{{{
"
function! GetAllCommands()
  redir => commands	" redirct messages to commands
  silent command
  redir END
  return map((split(commands, "\n")[3:]),
      \      '":" . matchstr(v:val, ''^....\zs\S*'')')
endfunction

" 自定义命令行
let g:fuf_com_list=[':exe "FufBuffer                       " |" sj     ',
                   \':exe "FufFileWithCurrentBufferDir     " |" sk     ',
                   \':exe "FufFileWithFullCwd              " |" sK     ',
                   \':exe "FufFile                         " |" s ',
                   \':exe "FufCoverageFileChange           " |" sl     ',
                   \':exe "FufCoverageFileChange           " |" sL     ',
                   \':exe "FufCoverageFileRegister         " |" s ',
                   \':exe "FufDirWithCurrentBufferDir      " |" sd     ',
                   \':exe "FufDirWithFullCwd               " |" sD     ',
                   \':exe "FufDir                          " |" s ',
                   \':exe "FufMruFile                      " |" sn     ',
                   \':exe "FufMruFileInCwd                 " |" sN     ',
                   \':exe "FufMruCmd                       " |" sm     ',
                   \':exe "FufBookmarkFile                 " |" su     ',
                   \':exe "FufBookmarkFileAdd              " |" s ',
                   \':exe "FufBookmarkFileAddAsSelectedText" |" s ',
                   \':exe "FufBookmarkDir                  " |" si     ',
                   \':exe "FufBookmarkDirAdd               " |" s ',
                   \':exe "FufTag                          " |" st     ',
                   \':exe "FufTag!                         " |" sT     ',
                   \':exe "FufTagWithCursorWord!           " |" s ',
                   \':exe "FufBufferTag                    " |" s,     ',
                   \':exe "FufBufferTag!                   " |" s<     ',
                   \':exe "FufBufferTagWithSelectedText!   " |" s,     ',
                   \':exe "FufBufferTagWithSelectedText    " |" s<     ',
                   \':exe "FufBufferTagWithCursorWord!     " |" s}     ',
                   \':exe "FufBufferTagAll                 " |" s.     ',
                   \':exe "FufBufferTagAll!                " |" s>     ',
                   \':exe "FufBufferTagAllWithSelectedText!" |" s.     ',
                   \':exe "FufBufferTagAllWithSelectedText " |" s>     ',
                   \':exe "FufBufferTagAllWithCursorWord!  " |" s]     ',
                   \':exe "FufTaggedFile                   " |" sg     ',
                   \':exe "FufTaggedFile!                  " |" sG     ',
                   \':exe "FufJumpList                     " |" so     ',
                   \':exe "FufChangeList                   " |" sp     ',
                   \':exe "FufQuickfix                     " |" sq     ',
                   \':exe "FufLine                         " |" sy     ',
                   \':exe "FufHelp                         " |" sh     ',
                   \':exe "FufEditDataFile                 " |" se     ',
                   \':exe "FufRenewCache                   " |" sr     ',
                   \':exe "FufDir ~/"                        |" go to ~', 
                   \':exe "FufFile ~/"                       |" open file from ~', 
                   \]

nnoremap <silent> <S-F4> :call fuf#givencmd#launch('', 0, 'commands>', GetAllCommands())<CR>
nnoremap <silent> <Leader>fuz :call fuf#givencmd#launch('', 0, 'commands>', g:fuf_com_list)<CR>

"{{{
" ----------------------------------- End FuzzyFinder -------------------------------------

" YouCompleteMe {

let g:ycm_global_ycm_extra_conf = '~/.vim/bundle/YouCompleteMe/cpp/ycm/ycm_extra_conf.py'

let g:ycm_error_symbol = '>>'
let g:ycm_warning_symbol = '>*'
nnoremap <leader>gl :YcmCompleter GoToDeclaration<CR>
nnoremap <leader>gf :YcmCompleter GoToDefinition<CR>
nnoremap <leader>gg :YcmCompleter GoToDefinitionElseDeclaration<CR>
nnoremap <F5> :YcmForceCompileAndDiagnostics<CR>
nnoremap <C-F5> :YcmDiags<CR>

" }
```

<center>*gvimrc*</center>
```
"autocmd FileType python set ōmnifunc=pythoncomplete#Complete
"autocmd FileType javascrīpt set ōmnifunc=javascrīptcomplete#CompleteJS
"autocmd FileType html set ōmnifunc=htmlcomplete#CompleteTags
"autocmd FileType php set ōmnifunc=phpcomplete#CompletePHP
"autocmd FileType c set ōmnifunc=ccomplete#Complete
filetype plugin on
"set tags += 

if has('win32')
    au GUIEnter * simalt ~x
else
    au GUIEnter * call MaximizeWindow()
endif
 
function! MaximizeWindow()
    silent !wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz
endfunction

" set guifont=Eunjin\ 11
set guioptions+=m
set guioptions-=m
set guioptions-=T
map <silent> <F2> :if &guioptions =~# 'T' <Bar>
\set guioptions-=T <Bar>
\set guioptions-=m <bar>
\else <Bar>
\set guioptions+=T <Bar>
\set guioptions+=m <Bar>
\endif<CR>
```

