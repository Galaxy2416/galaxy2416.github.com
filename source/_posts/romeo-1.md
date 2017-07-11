---
title: romeo-1
date: 2017-04-05 23:35:12
categories: 仿人机器人
tags: Romeo
---

# 仿人机器人 之 Romeo - 1 #

*软银三剑客之Romeo，分成两个系列，第一篇章用作机器人简介，由于与众多研究机构合作，其中产生了大量论文和成果，第二篇章将针对论文的技术做简介。*

- 设计公司：Aldebaran Robotics (现被SoftBank收购)
- 官方网站：[Romeo Project](http://www.projetromeo.com/)

> Romeo is a humanoid robot from Aldebaran Robotics which is intended to be a genuine personal assistant and companion.
> 
> Romeo主要是帮助缺乏自理能力的人。如依靠视觉帮老人记住杯子或遥控器落在哪里了，甚至帮老人拿过去；可以监护老人，老人生病时机器人会通知老人的家人；帮老人或残疾人下楼梯倒垃圾；帮老人站起来或者行走等。
> 
> 罗密欧全身无齿轮，电能产生机械能，机械能还可以产生电能，能量浪费减到最小，开放SDK。行走依靠视觉实时重做路径规划 [sohu](http://mt.sohu.com/20160719/n460024598.shtml)

如果说NAO是主打教育和娱乐（医疗大概是创始人布鲁诺-梅索尼Bruno Maisonnier的一个期望），Pepper的江山在商用服务市场。那么Romeo更像是技术积累和预研（虽然Romeo中处处为了用户着想，但是在成本上并未作出更多的努力）。

## 公司简介 ##
Aldebaran Robotics，于2005年成立于法国。 2012年，日本软银集团收购了位于巴黎的 Aldebaran Robotics，其产品有 NAO、Pepper 和 Romeo robots。 2016年初，Aldebaran 更名为软银机器人公司。
![收购](/img/romeo/acquire.jpg) 

[https://www.ald.softbankrobotics.com/](https://www.ald.softbankrobotics.com/ "software bank robotics")

## [机器人简介](http://projetromeo.com/en/background) ##
Romeo是Aldebaran在NAO的基础上开发出来的一款机器人。旨在制造一款大型的仿人机器人以及测试一些新技术的继承和应用。（做技术积累，较为成功的是本田的Asimo将其发现的技术应用于汽车和其他产品）。最初项目的成立在2009年，由DGCIS赞助，联合众多研究机构。（The research on Romeo was initiated within the scope of an interministerial fund (FUI) project in January 2009. Accredited by the Cap Digital competitiveness cluster, the project was funded by DGCIS, the Ile de France Region and the Municipality of Paris. As a structural project for the French robotics sector, Romeo has brought together a dozen industrial and academic partners.）在花费了4年的研究时间后，成功研制出了第一代140cm的机器人（Romeo-1已经完成并且给了4所欧洲高校）。最后Romeo-2在2012年11月开始立项，由Bpifrance支持。同样是4年的项目，与[16家机构共同合作](http://projetromeo.com/en/partners)。

Romeo第二代在第一代上做了很多改进，包括改变脊柱，把电子元器件放到头部，并且融入了*摸头杀*功能（每次看到pepper都想去摸头，是同样的功能和原理）
![head][head]
提升腿部控制，加入电池。

针对眼睛，LPPA为其实现了可移动的双眼，植入了前庭系统（vestibular system）用来稳定机器人的视觉图像。这样就可以实现更为稳定的**动态**步态算法。在这方面，国内亦有不错的成果，比如张晓林博士为新松做的一款动态眼（如图），不过依旧还未见到把动态视觉和动态步态结合起来并且公开的产品或者原型。
![vestibular][vestibular]
![张晓林博士团队的动态眼][eye]

对于语音，Remeo在Telecom Paris Tech的帮助下可谓是“大费周章”（对于大多仿人机器人的研究者来说，在语音上下了这么多功夫，有点夸张），使用16路的语音天线实现。
![audio][audio]

*运动控制方面* LAAS致力于实现全身的平衡控制，在基于LPPA所制作的控制图表功能（NAO也使用同样的工具，可以参考它的软件以及视频）上，提出了中心（这是个医学名词，眼中心）控制（oculocentric control framework）这个架构，可以获得高质量的被动步态模式。除此之外，在复杂行为上也有不俗的斩获，比如开门，握手，寻找座椅并成功落座，视觉引导行走等一系列研究。 LPPA同期也在进行神经网络对双足行走的研究。

最后Romeo在行为，对话，感情研究上也投入了不少的精力。这方面在AI层面，较为独立。

### 基本参数 ###
- Weight: 36.66 kg 
- Height: 1.467 m 
- Degrees of Freedom: 33 + 4（眼睛）

### [设计信息](http://projetromeo.com/sites/default/files/romeo-documentation/index.html) ###
Romeo的设计信息多为机械信息，从官方文档可得。其中包含了电机参数（型号，力矩），机械参数（各肢体细节，质心转动惯量），关节参数（转动范围）。
![info][all]

这些参数对于使用者和其他设计者来说都是不小的财富，有助于参照其进行自己的初始设计。其电机则全部采用了Maxon的电机。

### 功能以及其他信息 ###
从视频，图片和新闻所得到的信息，Romeo可以进行行走，执行起坐等行为。 丰富的交互功能可以和人进行交互。

### 事件 ###
1. 2012年末， 第一代完成
2. 2016年， 第二代完成
![design][design]

### 硬件配置 ###
并未找到细节参数，待补。

#### [传感器](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Sensors) ####

- Camera*2 左右眼各一个
- 其他：并未找到细节参数，待补。

#### 电机 ####
![motor][motor]

[参考文档](http://projetromeo.com/sites/default/files/romeo-documentation/hardware_romeo_motor.html)

#### 电池 ####
并未找到细节参数，待补。

### 亮点　###
1. Romeo由于广泛的合作方式，在机器人上验证了仿人机器人相关非常丰富的功能。又因为是由公司产品，定位于家庭，医疗等场景，因此人机交互，安全性，稳定性，类人方面做了非常多的工作。 在这方面，只有同为日本（收购也算）的Asmio有一拼之力。
2. 实现[远程操作](http://projetromeo.com/en/remote-operation)的功能，虽然设计距离很远，但是只能在实验室实用。
3. 从NAO继承了丰富的软件功能，比如NAO-QI，这一点基本可以傲视群雄，唯一遗憾的是不与较为主流的ROS相兼容，自成一派。


## 小结 ##
Romeo由定位于民用，每4年为一个项目周期，不光在运动控制（行走，抓起等），也在AI方面，协作互动方面投了不少资源。 与科研机构的广泛合作，为仿人机器人的发展提供了大量的[科研成果](http://projetromeo.com/en/publications)，实为可敬。

![](/img/romeo/romeo.jpg)

[head]: /img/romeo/head.png
[vestibular]: /img/romeo/vestibular.jpg
[eye]: /img/romeo/eye.png
[audio]: /img/romeo/audio.png
[all]: /img/romeo/all.jpg
[design]: /img/romeo/design.jpg
[motor]: /img/romeo/motor.jpg