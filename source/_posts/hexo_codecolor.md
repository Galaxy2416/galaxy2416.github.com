title: hexo优化之代码块的颜色与背景
date: 2014-02-10 20:16:46
tags:
categories: hexo
---
hexo的代码块的浅色背景并不是受到很多人的喜欢，这个更改也很简单。

首先要更改`/theme/light/css/_partial/article.styl`中

<!--more-->

**pre** 下面第一行

```
pre
	background #颜色
```

*效果如下*

![](/img/hexo/codecolor.png)

之后更改`/theme/light/css/_partial/syntax.styl`中

**figure.highlight** 下面第一行

```
figure.highlight
	background #颜色
```

*效果如下*

![](/img/hexo/codecolor2.png)

**建议这两个采用统一的颜色，前者是代码下面的背景，后者是区域剩下的背景。**

同文件下的.gutter下面的参数是调整左边的代码行数条，如果不喜欢行数和代码中间的白色分割线，那么把.gutter下的`border-right`和其下面.code的`border-left`宽度设为0或者颜色调成你所选用的背景色。那么就会有如下效果。当然也可以设成你喜欢的颜色。

![](/img/hexo/codecolor1.png)

之后,在下面有一个.code的标签可以更改代码的颜色,默认的颜色不适合深色的背景。最后为了代码在这个背景下不会有模糊感，要删除掉shadow。注释掉或者删除掉figure.highlight下的`text-shadow ...` 就可以了。

*GOOD LUCK*
