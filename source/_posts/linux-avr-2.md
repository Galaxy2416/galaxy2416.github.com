title: avr系列:(二)avrdude的使用简介和AVR熔丝位
date: 2014-02-07 11:27:57
tags:
categories: avr系列
---
###此篇以Ubuntu下的atmeg16，avr-gcc + usbasp (dragon_jtag)来进行说明。

**由于文章迁移手头没有avr一部分图片用的以前的，看颜色也能看出来，会在后期改掉的，但效果是ok的**

####简述了下avrdude的使用和熔丝位的基本情况。

<!--more-->
环境如下：
- OS系统：ubuntu 12.04
- 编译器 ：avr-gcc
- 烧录软件 :avrdude

仿真器or烧录器：dragon和usbasp（使用较多）

---

对器件进行控制需要先进入AVRDUDE的终端模式。打开终端输入

```
sudo avrdude -P usb -p m16 -c usbasp -t
```
<span style="color:#ff6666">usbasp+m16:</span>

![pro1.jpg](/img/linux-avr-2/pro1.jpg)

<span style="font-size:18px; font-size:16pt">输入part</span>

会输出很全面的信息
![part](/img/linux-avr-2/pro2.jpg)

<span style="font-size:18px">进行操作并且擦除芯片来。</span>
![EEPROM](/img/linux-avr-2/ee.jpg)

可以看到可以直接对eeprom操作。

**熔丝位处理**

就么m16而言，熔丝位一共分为高8位低8位
![熔丝位](/img/linux-avr-2/fues.png)

<span lang="zh-CN" style="background-color:rgb(255,153,0)">时钟源选择</span>

<span style="color:#cc0000">系统时钟源</span>
- 外部石英/陶瓷振荡器 1111-1010
- 外部低频晶振(32.768KHZ)1001(CKOPT=0：使用内部36pF电容)
- 外部RC振荡1000-0101
- 可校准的内部RC振荡 0100-0001
- 外部时钟0000
- 外部振荡器的不同工作模式

熔丝位工作频率范围(MHz)C1、C2容量(pF)(仅适用石英晶振)
- CKOPTCKSEL3..1 
- 1 101 0.4-0.9 仅适合陶瓷振荡器
- 1110 0.9-3.0 12-22
- 1 111 3.0-8.0 12-22
- 0 101,110,111≥1.0 12-22

当CKOPT被编程时振荡器在输出引脚产生满幅度的振荡。这种模式适合于噪声环境，以及需要通过XTAL2驱动第二个时钟缓冲器的情况。而且这种模式的频率范围比较宽。当保持CKOPT为未编程状态时，振荡器的输出信号幅度比较小。其优点是大大降低了功耗，但是频率范围比较窄，而且不能驱动其他时钟缓冲器。
对于谐振器，CKOPT未编程时的最大频率为8MHz，CKOPT编程时为16MHz。内部RC振荡器工作时不对CKOPT编程。


外部RC振荡器模式

熔丝位(CKSEL3..1)工作频率范围(MHz)
- 0101≤0.9
- 0110 0.9-3.0
- 0111 3.0-8.0
- 10008.0-12.0
可校准内部RC振荡器工作模式



熔丝位(CKSEL3..0)工作频率范围(MHz)
- 0001 1.0
- 0010 2.0
- 0011 4.0
- 0100 8.0
JTAGEN：0=JTAG端口使能，1=JTAG端口禁止(不推荐)
OCDEN：0=JTAG DEBUG使用(JTAGICE会自动处理)

<span style="background-color:rgb(255,102,0)">BOOT区配置熔丝</span>

BOOTSZ1 BOOTSZ0BOOT区大小BOOT区地址默认
- 00 1024WORD 0x1C00 默认
- 01 512WORD 0x1E00 
- 1 0 256WORD 0x1F00 
- 1 1128WORD 0x1F80


<span style="color:#996633">芯片锁死的主要原因是设错熔丝位，主要有两种情况</span>
1. JTAGEN和SPIEN两个熔丝位都为1，不能再进行编程，此时只能用高压并行编程或者有源晶振恢复。
2. 将熔丝位选择了外部晶振或外部RC振荡，而没有接外部晶振或外部RC振荡，或者外接的振荡频率不匹配，导致芯片不能工作，这种情况，需要外挂相应晶体才能再次操作芯片，用户应尽量记起当时设错熔丝的情况，比如错误设置成了外部3-8M晶振，那么外挂一个3-8M晶振即可进行相应操作。


**了解了熔丝位，可以读取芯片现在的熔丝位了。**

在avrdude的终端模式输入`d lfuse` or `d hfuse`

![熔丝读取](/img/linux-avr-2/fuse2.jpg)

可以看到，熔丝位并不是默认值，默认值lfuse应该是e1,因为我使用了12M的外部晶振所以更改过。写入fuses也很简单，只需要`whfuse 0 0x99 `或者 `wlfuse 0 0xff`相似即可。

**Dragon+xplain:**

```
sudo avrdude -P usb -p x128a1 -c dragon_jtag -t
```
<span style="color:#ff6666">输入part</span>

![partxmeag](/img/linux-avr-2/part2.jpg)

可以发现xmega128a1的资源比么m16要多的很多～

其他都是一样的了，不过既然用了jtag不妨使用下avarice这个仿真用的软件来查看一下。

```
avarice-x -g -j usb --erase --program --file main.hex :4242
```

其中-x是一定要加的否则无法识别xmega这是专门为xmega提供的选项

输出信息
```
JTAGconfig starting.  
Founda device: AVRDRAGON  
Serialnumber: 00:a2:00:00:36:48  
ReportedJTAG device ID: 0x974C  
Configuredfor device ID: 0x974C atxmega128a1  
JTAGconfig complete.  
Erasingprogram memory.  
JTAGICE: Cannot synchronise  
```

不过无法调试，查阅了一下官方的说明，xemga调试的时序没有公开所以是无法用此来调试的。所以想调试xmega的话只能用iar或者avrstudio了。

最后由于AT89S52的使用很多，因此想要用在linux下烧录使用avrdude可以参考我的另一篇[《51之linux : (一) 在linux环境下搭建51开发环境》](http://galaxy2416.github.io/2014/02/05/linux-51-1/)

---
[附件](http://download.csdn.net/detail/galaxy_blue/4339966)说明：avr-gcc的例子资源在网络上还是很丰富的，这是原来放在csdn的上的附件，其中有IAR的win例子和linux下的avr-gcc例子，后者当初整理写了一部分，如果需求，可以供给参考果，完善一些的话可能会转到github上再更新吧～
