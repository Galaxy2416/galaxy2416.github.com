---
title: Valkyrie
date: 2017-03-26 13:44:35
tags: Valkyrie
categories: 仿人机器人
---

# 仿人机器人 之 Valkyrie #

- 设计公司：美国国家航天局 NASA
- 设计组织：[Johnson Space Center](https://www.nasa.gov/centers/johnson/home/index.html "JSC")
- 官方网站：[Valkyrie Wiki Home](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/home)
- 原型: Robonaut（Valkyrie 是 R5）[R2空间站视频](https://youtu.be/grieVTdxsNI)


## 公司简介 ##

**NASA**

[https://en.wikipedia.org/wiki/NASA](https://en.wikipedia.org/wiki/NASA "NASA Wiki")

1958年7月29日，美国总统艾森豪威尔签署了《美国公共法案85-568》，创立了国家航空和太空管理局。

## 组织简介 ##

Johnson Space Center 约翰逊航天中心
约翰逊航天中心建于1962年，是训练美宇航员、开发、设计太空梭和太空站的基地。

## [机器人简介](http://nasa-jsc-robotics.github.io/valkyrie/) ##

The Valkyrie robotic platform was originally designed and built in 2013 to carry out **search and rescue missions** inline with the DARPA Robotics Challenge. After a series of electro-mechanical upgrades and a software partnership with IHMC, the Valkyrie platform is now a core robotic platform in the NASA Space Robotics Challenge.

The Valkyrie robot measures about 6 feet in height and weighs 290 pounds. Valkyrie is a 32 degree (实际44，算上小臂和手) of freedom (DOF) walking robot featuring **two 6 DOF legs, two 7 DOF arms, a 3 DOF neck, and a 3 DOF waist.** Valkyrie utilizes the [MultiSense SL](http://carnegierobotics.com/multisense-sl/) in its head, anterior hazard cameras, multiple LORD MicroStrain IMU sensors, and ATI Multi-Axis Force/Torque sensors.

[简介](https://www.nasa.gov/sites/default/files/atoms/files/r5_fact_sheet.pdf)
[详细](http://sites.utexas.edu/hcrl/files/2016/01/jfr-valkyrie-actuator-control-final.pdf)

### 基本参数 ###

- Weight: 300 pounds 
- Computers: 2 x Intel Core i7
- Height: 6 feet 2 inches 
- Degrees of Freedom: 44
- Battery Energy: 1.8kWh

### 功能以及其他信息 ###

- 开发周期 ： 15个月（基于R2）


从视频，图片和新闻所得到的信息，Valkyrie可以进行较为缓慢的行走，跨越简单的障碍，上下台阶，手部可以抓握并且开关阀门。

[Video1](https://youtu.be/IE-YBaYjbqY)

### 事件 ###
1. [NASA 赠送了3台分别送给爱丁堡大学，MIT和东北大学（美）](http://spectrum.ieee.org/automaton/robotics/humanoids/new-r5-valkyrie-robots)。

### 硬件配置 ###

#### [板载CPU](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Onboard-Computers) ####

- i7-3615QE @2.3GHz
- 16GB DDR3 1600
- 240GB SSD
- Congatec BS77 Type2 COM Express Module
- EFK XV1 Carrier Board
- Ubuntu 14.04 Server

#### [通信总线](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Robonet) ####

由 NASA自研发的Robonet通信总线。其Master是一块[PCMCIA](https://en.wikipedia.org/wiki/PC_Card)设计，猜测其采用了FPGA板卡的设计方案，直接接入主机电脑，由其上可以分出8路Robonet总线，应该是并行设计。 JSC并没有公布总线的带宽，吞吐量和实时性。其中猜测比较双线路，一路带宽应在50Mbps以下（比如CAN是1Mbps。
而PCMCIA总线分为两类，一类为16位的PCMCIA，另一类为32位的CardBus。
PCMCIA的频率为33MHz，位宽16bit，带宽为66MB/S
CardBus的频率为33MHz，位宽32bit，带宽133MB/S
可见总线带宽理应在 8Mbps - 133Mbps范围，既然采用了PCMCIA应在100Mbps左右。


#### 头部 ####

集成了[MultiSense SL](http://carnegierobotics.com/multisense-sl/) 。波士顿动力的Altlas也采用了同款设备。此设备包含仿人机器人的基本需求，且完美支持ROS。

#### [传感器](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Sensors) ####

- ATI 传感器 * 2 放置在脚底板
- IMU 传感器 两个于腰部 3DM-GX4-15 by LORD MicroStrain 
- MultiSense SL

#### 电机，减速器以及驱动（关节） ####

JSC并没有透露过于详细的信息。
[简介](https://www.nasa.gov/sites/default/files/atoms/files/r5_fact_sheet.pdf)
[详细](http://sites.utexas.edu/hcrl/files/2016/01/jfr-valkyrie-actuator-control-final.pdf)



- 根据参考文档，与常规机器人不同的是，在踝关节和小臂上采用了线性驱动 + 弹性结构的特点。

- 采用了弹簧变位作为力矩传感器，噪声依旧很大（The loadcells are placed closer to the joint output giving them better dynamic sensing performance but suffer from a higher noise floor than the spring deflection sensor due to their analog signal properties.）
![](/img/valkyrie/figure5.jpg)

因此对关节运动进行了建模，并且引入了Disturbance Observer (DOB)等方法。(The goal of our torque control approach is to make each SEA appear to the multi-joint controller as an
ideal torque source, or at least a low-pass filtered torque source. That is, we want to avoid modeling internal
actuator dynamics at the multi-joint level, and instead only model the effects of the rigid body system. Prior
work in this area has demonstrated that effective decoupling of the fast actuator-level dynamics from the
slower multi-body dynamics is indeed possible (Ott et al., 2003). However, in this work torque errors remain
large (around 50Nm) and thus do not adequately abstract an actuator as an ideal torque source.)

- 将关节力矩控制分离到各个关节，多关节控制可以直接控制其力矩，算法层面应采用的是力矩相关控制。
![力矩分散控制](/img/valkyrie/figure2.jpg)
![力控制模型](/img/valkyrie/figure2.jpg)




#### 电池 ####

电池可以从背板直接抽取放置。非常方便。

#### 其他 ####

[自制的灯板](https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Ring-LED-Legend)很帅

#### 亮点的功能　####
1.  A removable battery in its backpack is good for about an hour of activity, and a human can swap in a fresh battery for a spent one in a matter of minutes. Also removable are Valkyrie's limbs: in just a few more minutes, a damaged arm can be swapped out for a new one, and the left arm can even be swapped with the right arm, since they're identical in construction.
Valkyrie的电池和四肢可以非常容易的拆卸和安装。这种设计意味着快速的维修和方便的调试（需要设计），从产品进化来讲，将会是机器人在前中期的趋势（比如移动电话的前中期也是依赖于各组件的组合）。

2. Our robot is soft. If you brush against it while you're working, you don't want to feel this cold, hard metal. You want it to feel natural, like you're working next to another human being. 
Valkyrie采用了柔性的保护措施，并且专门成了相关的实验室。这将是机器人与人接触必然要解决的问题。

#### 小结 ####

Valkyrie由于定位于空间站，且计划应用于2030年，所以并未进入市场。 所研究的方向并没有全力集中在行走等腿部行为，抓取，操作设备更具有两点。 其设计成本极其高昂， 机械选材很高端和设计非常精细，电子电器设计大量采购集成商品，软件应用层面现在（3/23/2017）所见并非其主要工作投入，控制层面主要集中在硬件建模上，当然行为方面也有不俗的成果，预计以后会与大学深入合作来扩展这方面。

![Valkyrie](/img/valkyrie/val_twisted.png)