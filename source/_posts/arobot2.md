---
title: 2016-2017总结，ART-1,2 - 我与我们所做的事情
categories: 仿人机器人
tags: artrobot
date: 2017-07-011 10:30:22
---

> 不论是好友交流还是求职，常常会有人问我 “少年，你在做什么呢”“请描述你的工作内容”。此时总感觉一两句话总是说的不够透彻，于是就打算对在北京钢铁侠科技这一年的工作做了个总结。

# 1. 前言 #

北京钢铁侠科技，鉴于我对这个中二的名字抱有深深的怨念，所以以下简称为公司。从我作为软件工程师加入的时候，原型机ART-0处于刚刚完工的状态，其是仅有下半身的双腿机器人。低速的总线，外置的驱动和控制板，无法独立供电。似乎这个原型机不能满足人们对于仿人机器人的美好构想，但是对于公司而言，它成功的行走似乎给了当时仅仅10人的团队一缕光明（没错，也给了投资者以希望），让一群从来没有在与人类相似大小的仿人机器人上有过经验的工程师对他们的目标有了更多的信心。

也许正是这份自信，在仅进行腿部稳定性的持续研发和直接实现从双腿发展为全仿人的策略上，公司选择了后者。且不去评论这份选择的正确与否。全仿人的机器人ART-1开始进入设计，其预定的开发时间定为2016年的6月到2017年的3月。而这篇总结文的正文“我与我们所做何物”也正是从此刻开始的。

<!---more--->

## 1.1 我（们）的目标 ##

我采用了我的称谓，也就是说此处不代表公司意见。就不说缥缈的愿景和使命，只简单阐述下对于产品和工作的目标。我自诩我们是一个严肃的机器人公司，制作着定义上最狭义的机器人的产品，也就是说我希望我们希望复刻来自远古偃师<sup>[1]</sup>的技艺，去描述一个真正意义上的机器人。让它在为人而设计人生存环境下，可以帮助人实现各种的事物，逐步代替人去完成他们的工作。当然，这是一个长久的目标，对于最初的目标，就是做出一款可以商业销售的仿人机器人，广泛的与学校和科研机构合作，打破互相提防的圈内壁垒，加快这个领域技术的进展。然后就有希望赚大钱，就可以买的起房子，养得起老婆，走上人生巅峰了（此处大误 T T ...）。

##  1.2 产品演化和我的工作变化 ##

如图1.1所示公司的开发进展大概是半年原型 (2016.3月完成)->第一代全仿人ART-1原型(2017.01月)->第二代全仿人（有双手）ART-2(2017.08月)。
- ART-0 : 可以进行平地行走。
- ART-1 : 可平地行走，上下台阶，跳舞，握手，挥手等动作。
- ART-2 : 组装制作中( 星期二, 11. 七月 2017 )，预计**2017.8月份下旬**会进行发布。


<center>
![图1.1 公司发展历程 ](/img/arobot2/f1_1.png)
</center>

它们的参数简表见表1.1

<center>
![表1.1 ART0 vs ART1](/img/arobot2/t1_1.png)
</center>

从这三代的进展来看，我们在机器人的本体上，不断地尝试提高它的活动能力以及基本指标，一些设计的简介会在后续的内容中阐述。在设计目标上也更加向着产品化的方向去发展。我个人的工作也在此过程中产生一些变化。从最初独立的功能算法实现，到平台架构设计和项目设立跟踪以及承担一些产品的工作（实际上我还是要每天码代码的可怜孩子）。对仿人机器人的整个技术体系和行业都有有了不少新的认识（不过还远远不够）。这其中一些一闪而过的想法也最终在各位大神的努力下，成为了现实，比如如图1.2的Robot Block的最初想法的一部分演变成了ART-2中极其重要的ART-COMMUNICATION。

<center>
![图1.2 头脑风暴草稿 - 机器人积木](/img/arobot2/f1_2.png)
</center>

# 2. 硬件系统描述 #

硬件系统的描述将以ART-2为主，会解释一些从0代到1代到2代技术变化的缘由，不过不会有过于详细的技术表达（要保密哦）。
先说一下对于ART-2产品上的几个重要的方向：

1.	模块化
2.	系统化
3.	产品化

硬件结构的方案和设计都是基于这些重点而设计。

我们将整机分解为以下几个系统来设计。

<center>
![图2.1 ART-2系统简图](/img/arobot2/f2_1.png)
</center>

## 2.1 机体机械 ##

作为一个软件工程师，机械方面我除了把机械图纸做处理后进行仿真，机械设计是赤裸裸的小白，因此就粗略的说下我的理解。仿人机器人的设计，有很多问题需要解决，比如：

1.	拆卸维护的简易型（模块化）
2.	整体的轻量化和强度设计（产品化）
3.	长期在各种不同应用场景下的耐用性。（产品化）
4.	跟人接触时的柔性。（产品化）
……

我们的结构机械工程师们在初代机型中很快的设计了腿部的可行结构<sup>[2]</sup><sup>[3]</sup>以及初代的关节<sup>[4]</sup>。在几代的进展中，我们有几个重大的变化。首先在模块化上，最新的ART-2设计了五体+躯干+动力源可以简易拆卸的结构，各个关节结构以机电一体化的理念设计，可以自我独立。

- 在轻量化上：双腿50kg->全身50kg->更高并且<50kg
- 自由度上：12DOF -> 26DOF -> 36DOF
- 主要执行器上：从有刷->无刷（矢量控制）->下一次可能采用的无框式的电机。

 
<center>
![图2.2 ART-2关节分布图](/img/arobot2/f2_2.png)
</center>

单独从技术看，无框式,无刷永磁同步电机必然是仿人机器人产品上的主线（如果没有类似超声波，回声电机等新技术走上主流）。至少在知名的机器人上都采用了这种设计方法，比如NASA的Valkyrie<sup>[5]</sup>，本田的Asimo<sup>[6]</sup>等。（专业的仿生机器人公司Festo的BionicANT则用了超声波电机）。

要强调一点的是结构方面依旧有非常多需要攻克和创新的地方，比如说Valkyrie在踝关节上采用了线性驱动+弹簧的结构而非主动关节的结构<sup>[7]</sup>。


## 2.2 通信系统 ##

通信系统的定义为通信服务器和通信子网络的集合，对于多关节的机器人来说，要对机器人进行反馈控制，因此这个控制环路要从各种传感器（包括电机上的）上收集信息，进行处理，再反馈给各个关节和传感器进行控制。因此，即使从直觉上也易想到，这个控制的频率自然越高越好。而系统的延迟和实时性也直接决定了控制频率的上限和稳定性。
因此在通信系统中，除了必须要保证的抗干扰和稳定。其带宽，实时性，信息交互的频率是非常重要的因素。
在初代机器中，采用了CAN总线进行控制，然而CAN总线的带宽被限制在了 1Mbit/s下<sup>[8]</sup>。可以做一个简单的计算，假设：

1.	每个关节的信息有位置,力矩,速度，每个数据用一个4Byte的32bits数据保存。
2.	全身共有30个关节。
3.	一个CAN总线数据帧如图2.3所示，我们假设每个数据帧有32bits的有效数据和30bits的其他数据。
 
<center>
![图2.3 CAN总线帧结构](/img/arobot2/f2_3.png)
</center>

那么1Mbit/s下最大的通信速率为（一个往返）：

     1Mbit/(30*(32+30)bits*3*2) ≈ 90

也就是说，在不计算传感器数据以及冗余需求的情况下，一次通信的极限在100Hz，而在实际系统运行时，达到100Hz的控制环路，基本上是不可行的。

这种控制频率在仿人机器上是没有未来的。比如知名的DRC比赛中设定控制频率在200Hz的限制，名震天下的Altas的控制频率可以达到至少333Hz，数据每6ms更新一次（新的设计中可能更快）<sup>[9]</sup>。

正是如此，我们在第二代的通信中，参考了ROS官方的机器人PR2<sup>[10]</sup>，采用了成熟的工业以太网 EtherCAT。EtherCAT的实现就是对常规的以太网协议进行改进，网络性能上达到了一个新的高度。具有：

1.	卓越的性能
2.	灵活的拓扑
3.	简单且耐用
4.	集成安全
5.	低成本易实现

的优点。<sup>[10]</sup>

在采用EtherCAT后，ART-1的整机控制达到稳定的200Hz的控制频率（实测以及实际使用，*200Hz的限制不仅在于EtherCAT，多在于系统实时性和计算耗时*） 。虽然EtherCAT具有非常多的好处，不过在这里依旧要对各位看官提醒一下，如果采用开源的EtherCAT主站比如IGH等，其长期缺乏维护很难适应新的网卡和系统，因此需要进行大量的改进和适配工作。而为了解决EtherCAT驱动非标准的问题，另一个新的标准化技术IEEE TSN (Time-Sensitive Networking)<sup>[11]</sup>很有可能会让实时以太网的使用有如以太网一般便利（因为是标准）。

<center>
![图2.4 ART-1 EtherCAT子节点（左ART-1， 右ART-2)](/img/arobot2/f2_4.png)
</center>

图2.4中 ART-1上使用的一个控制节点，这个节点包括一个EtherCAT从站以及最多承载16路电机并行控制的FPGA芯片（一个节点控制多个电机）。 由于ART-2采用了矢量控制进行无刷电机控制，以及增加了很多驱动算法，因此不擅长浮点数运算的FPGA便力不从心。 在这种情况下，ART-2的驱动放弃了ART-1的方法，改为一个节点一个驱动的方案，不过在手部上由于空间的限制，手指的五个自由度仍然是1个驱动控制5个电机（但是并非是FPGA）。

我们参考了一些如图2.5所示类似的方案<sup>[13]</sup>决定使用FPGA（一主多从）加上PCI-E通信的通信方案。这样在FPGA通信和主控系统接口的地方就可以轻松达到吉级别的通信速率（n * Gbps）。而对Valkyrie的Robonet<sup>[14]</sup>和iCub采用的CFW（CAN并行转PCI）<sup>[15]</sup>的自制总线系统方案的学习也给我们定制自己通信系统提供了不少帮助。

<center>
![图2.5 文献<sup>[13]</sup>中通信系统的设计方案](/img/arobot2/f2_5.png)

</center>

## 2.3 主控系统框架 ##

主控制系统上，我们采用了两款Intel i7的CPU（都是四核八线程）分别用作实时性（表现为）系统操作和通用操作系统。系统的连接通过ROS提供的网络集群来实现。

此处在ART-2上，我们采用COM-Express的标准的核心板模块与自研的底板的结合，便于把通信系统的Server的FPGA与CPU高速总线直接相连（PCI-E）。提供更好的性能。

<center>
![图2.6 主控核心板和载板](/img/arobot2/f2_6.png)
</center>

## 2.4 执行机构和传感器 ##

### 2.4.1执行机构 - 关节 ###

我们将关节抽象为任何一个关节点上可以进行位置和力矩控制以及获取相关反馈的黑盒执行器。

对于关节，整个行业都在模块化和产品化。比如科尔摩根不久前发布的RGM机器人关节模组 ，适用于10Kg以内的负重机器人（臂），可以极大加快机器人成品的研发。而对于我们，独立制作关节组件，最重要的目的，是考虑到仿人机器人大量的关节数目以降低成本，以及在仿人机器人不同关节上采用不同的定制。

关节是由电机+驱动+减速器+传感器而组成。
我们在关节设计上一般关心：

1.	转速
2.	输出力矩（瞬间和额定）
3.	控制功能

从这些需求综合来看，指向了电机的功率，驱动器，结构设计和控制算法。因此在设计关节的时候我们一般采用三种方法的结合。

1.	理论计算加上一些冗余
2.	参考其他的机器人参数
3.	实测

对于理论计算，一般由机械结构的同事进行力矩的估算，采用一些经验公式而算得，比如：

	（T堵转 - T额定）* 20% + T额定 = T输出 

而非直接采用电机的堵转力矩。
 
除此之外，有许多仿人机器人的制作者已经提供了丰富的实机数据可供参考，比如知名的Asimo<sup>[16]</sup>（关节信息见图示2.7）,ROBOTIS的THOR<sup>[17]</sup>（引用为系列最新版本）改进而来的ESCHER<sup>[18]</sup>。German Aerospace Center (DLR) 设计的TORO<sup>[19]</sup>。 也有更为可爱的公司如Aldebaran Robotics的Romeo项目会开放他们的电机参数<sup>[20]</sup>。

<center>
![图2.7 阿西莫机器人的关节信息](/img/arobot2/f2_7.png)
</center>

最后，我们的每一代设计都会基于实测的上一代数据进行分析，比如监控系统会生成2.7类似的记录图示。

<center>
![图2.8 来自ART-1的某动作时膝关节电流分析](/img/arobot2/f2_8.png)
</center>

除常用方法外公司也与生物力学方向的研究者有关接触，也希望能从其中获取灵感和设计数据，不过这方面现在刚刚在推进也非公司的主线，所以还未有什么明显的成果。

由于电驱动无法提供很强的功率，很多机器人采用了液压驱动或者液压电驱混合的形式。比如波士顿动力的Altlas采用了液压驱动<sup>[21]</sup>，虽然控制更加艰难，但是动力明显更为强劲（Bigdog也是一般）。为了达到如此强劲的性能，Atlas需要480V，15KW的动力源<sup>[22]</sup>。除了Altas也有不少机器人采用液压驱动，比如日本的Tae-Mu<sup>[23]</sup>。

### 2.4.2 感知单元 – 传感器 ###

公司内部对于机器上产品传感器的理念在于提供基础与善于扩展。这是由于现阶段市场定位以及人力限制所决定的，偏向二次开发的应用场景很难确定一款固定的机型，公司内部的有限资源也无力对各种传感器进行全部接入。因此根据基本现有的算法需求，ART-2上包含了（除了关节组件）：关节反馈（位置，速度，力，电流），IMU, 六维力，单目景深摄像头，扬声器，麦克风，激光雷达的预留。为了实现产品化的需求，ART-2上实现了在线固件更新的系统，可以通过最顶层的客户软件直接刷新底层嵌入式相关的固件程序，这也是在经历了ART-1艰辛的调试后所提出的重要功能。

*注：ART系列现仍然使用电流做力矩估算，使用电流来算关节力矩会存在很多问题，传动也会影响力的反馈，减速器的静摩擦也很难对微小的力有反馈<sup>[24]</sup>。因此要做精确的力控制的话，主流的设计上依旧需要力矩传感器，比如图2.9所示就是其中的一种。*


<center>
![图2.9 Atlas上采用的力矩传感器](/img/arobot2/f2_9.png)
</center> 

2.5 动力系统

公司现阶段并没有对电源进行特别优化（如果你看到有连续工作3小时以上的宣传，请认为是PR文）。ART-1以及ART-2都是采用48V的锂电池组进行内部供电（调试的时候大多是外部供电模式）。在电源的策略上，我们在ART-1和ART-2都单独制作了电源管理模块，将控制系统，通信系统，执行单元进行电力分组。这些工作，帮助ART-1,2在开关机过程中可以逐步进行自检，保障了系统的安全。同时，可以方便的进行调试，检测，以及紧急制动等操作。


<center>
![图2.10 ART-1电源控制模块](/img/arobot2/f2_10.jpg)
</center>  

# 3. 软件架构和算法 - 运动脑的伟大理想 #

这一部分主要阐述软件整体的架构设计以及双足步态的相关算法。

## 3.1 架构与平台 ##

### 3.1.1 设计思考 - 脑洞大开 ###

遗憾而庆幸的是现今尚没有一个被认可的成熟架构或者模型来描述仿人机器人的脑架构。因此在进行这一部分的设计之初我们虽然毫无头绪，但是确进行了很多有趣的思考。所以请容许我先进行一段无用而有趣的头脑风暴。

首先为了让机器人跟人一样，在机器人中要实现各种不同的脑功能，正如人的大脑一样。分为不同的功能区，不同的功能区承担着不同的功能。他们之间也充满着交流。那么在进行架构设计之前有一些亟待解决的问题：在现在的工程和技术前提下，如何解耦不同的系统，如何清晰的描述各个系统的输入和输出，这些系统哪些可以用现在的技术实现，哪些需要等待技术的革新和理论的创新。

21世纪，将脑科学，神经科学工程化的工作始终在不断地进行。对于这方面我们完全没有任何经验和基础，因此仅限于了解而已。鉴于专业知识的匮乏，我们将系统的思考转移到另一个更高层，概括性更强的范围，认知心理学，或者说是认知科学领域。有趣的是在对认知科学的了解后，我们发现在设计之初提出的几个问题与其中的一些理念似有相合之处。认知科学中，提出了层级分析的理念：只在单一的层级上进行研究，不可能彻底地理解精神和脑。 对一个特定现象作多层次的研究，会更好地理解脑中的过程如何上升为特定的行为<sup>[25]</sup>。 其中最令我感到振奋的正是大卫·马尔著名的三层次分析<sup>[26]</sup>：

1.	“计算理论”，说明计算的目标。  -- 如何解耦不同的系统
2.	“描述与算法”，给出输入和输出的描述，以及算法是如何由输入得到输出。 -- 如何清晰的描述各个系统的输入和输出
3.	“硬件实现”，算法和描述如何在物理上实现。 -- 这些系统哪些可以用现在的技术实现，哪些需要等待技术的革新和理论的创新

这时，似乎前面的问题找到了一些理论基础进行分析。

认知科学对心智方面功能主义的观点，意味着对心智方面的工程化具有长期可探索的意义，系统的定义也会更为清晰。那么依照功能的路线，运动脑的概念应该描述什么功能？

如图3.1所示，从生物学上来看，人脑大体分为大脑，小脑和脑干。众所周知，大脑负责类似感知和思考，脑干多负责维持个体生命，小脑用来协调运动，维持平衡。

<center>
![图3.1 脑组织结构简图](/img/arobot2/f3_1.png)
</center> 

 

在脑组织中，小脑的功能解释如下:

> 
脑的一部分。位于大脑的后下方，颅后窝内，延髓和脑桥的背面。可分为中间的蚓部和两侧膨大的小脑半球。小脑表面有许多大致平行的浅沟，沟间为一个叶片。表面的灰质为小脑皮层、深部为白质，也称髓质。白质内有数对核团，称中央核。小脑是运动的重要调节中枢，有大量的传入和传出联系。大脑皮质发向肌肉的运动信息和执行运动时来自肌肉和关节等的信息，都可传入小脑。小脑经常对这两种传来的神经冲动进行整合，并通过传出纤维调整和纠正各有关肌肉的运动，使随意运动保持协调。此外，小脑在维持身体平衡上也起着重要作用。它接受来自前庭器官的信息，通过传出联系，改变躯体不同部分肌肉的张力，使肌体在重力作用下，作加速或旋转运动时保持姿势平衡”<sup>[27]</sup>

看起来运动脑似乎跟小脑的功能是吻合的，但是，我们想到运动脑的概念似乎又超过了小脑的范畴。因为在机器人设计中，与其运动相关的内容已经涉及到行为本身，比如走，跳，跑。而这种行为的发生，又不局限于小脑的贡献。于是，我们将运动脑和其他功能通过以下的一条界限来区分：
运动脑负责运动的演化，记忆，经验和技巧的积累，它包括了程序性记忆<sup>[28]</sup>。而知识，推理，计算全部由其他的功能区域负责，它们包括了陈述性记忆。举一个篮球投射的例子，投射的判断和触发应该由逻辑的思考而决定。而这之后，肌肉记忆，身体协调，条件反射，平衡的处理，都由运动脑来控制。因此我们在这种思量下，设计了图3.2所示的简单的初级框图（从ART-1开始）

<center>
![图3.2 脑架构功能简图](/img/arobot2/f3_2.png)
</center> 

而这个框图也演化成了ART-1双处理器的架构，ART-2在双处理器的基础上采用的异构架构（CPU+FPGA）。对于大脑方面，我们集成了类似科大讯飞提供的语音云端功能等。现在，我们把目光集中到运动脑本身上来，为了再细化运动脑的功能为了描述其工程意义，我们将运动脑的两个功能抽象出来作为最初的研究切入点：

1.	程序性行为（比如骑车）的生成，演化，执行。目前为止，我们依旧在以行走为最基础和唯一深入的研究。（对于舞蹈，上下台阶等，仅仅描述了其实现而非对其进行深入的思考和研究）
2.	全身的平衡性，分别是静态平衡（静止状态下的平衡）和动态平衡（运动中的平衡）。我把这种概念称为，kinematic balance以及dynamic balance.

在此之上，一个类似图3.3头脑风暴简图中所提出的行为综合器，也被逐渐的细化实现。

<center>
![图3.3 头脑风暴草稿 – 行为综合器](/img/arobot2/f3_3.png)
</center> 

### 3.1.2 平台架构简介 ###

让我们脱离运动脑的伟大脑洞，回归现实世界。来看一下我们实际的工作。图3.4是ART-1依照设计思考图3.2细化的的框架图。这个图纸实际上也是ART-1最后实现的功能简图。

<center>
![F3.4](/img/arobot2/f3_4.png)

图3.4 ART-1功能分布图
</center> 

图3.5是我们在开发维度上做的一个简单的架构框图。而我在公司所做的工作，基本都在这个图的涵盖范围之内。如果熟悉ROS的同学，就会发觉这套老生常谈的架构跟ROS的设计基本一样，实际上我们的整个架构也是依托于ROS而做的改进。

<center>
![图3.5 ART-X 架构简图](/img/arobot2/f3_5.png)
</center> 


在实现的过程中里面，有很多工程上的工作：

1.	分离实时性系统和通用系统


由于自动化控制理论上要求的强实时性，机器人系统上需要一部分实时性处理的单元和系统。而这方面ROS系统本身毫无办法，而像Microsoft Robotics Developer Studio (MicrosoftRDS, MRDS)的系统具有更好的实时性。不过，在ROS的开源特性和丰富的社区支持的吸引下，对于实时性的优化也有很多方法。比如直接使用实时性的系统（不过移植ROS会很痛苦），采用Linux实时补丁架构的结构<sup>[29]</sup>（ART-1的方案）亦或自己对手动多核CPU进行任务绑定和驱动优化（ART-2的方案）， 比如北京航空航天大学就提出了基于RGMP<sup>[30]</sup>的RGMP-ROS<sup>[31]</sup>（浙江大学仿人机器人 ZJUkong-I 采用此架构）。

2.	异构的开放和封装

不论是CPU+FPGA，还是引入GPU，SOC，又或者ASIC（弄不起）。一个可以将底层暴露给算法设计者，又对上层开发者隐藏细节的设计对我们还是客户都是很重要的环节。在现在的ART的平台上，我们现在采用类似“付费开源”的方法，虽然对各个层级进行了封装，但是对客户而言所操作的是我们直接裸露的（大部分）代码。这也是由于我们在前期的多数科研高校的客户所希望的。这种方法，帮助我们的"原型平台"可以更快的获得收益，同时有更多的反馈可以帮助平台的产品化。（第一次把半成品说的如此清新脱俗）

3.	重新造“轮子”

对于仿人机器人来说，如图3.6所示ROS提供了丰富的工具和平台，但是由于其设计和功能更适配于轮式和臂状机器人。因此，不断的重新锻造一些功能也是必经之路。比如，对ros-control中controller组件的重制，对运动学的锻造而让其更适合于仿人机器人等。

<center>
![图3.6 ROS平台下的仿真可视化工具示例](/img/arobot2/f3_6.png)
</center>

## 3.2 步态简介 ##

当我们把程序性行为的生成执行固定在行走上时，就成为了步态算法的概念。也就是说步态算法指的是如何生成并且执行机器人的行走行为。对于行走我们提出了两个不同的阶段:

1.	盲走，不依赖于视觉和雷达等感知设备（只依赖感知自身状态的传感器） ，机器人在不知道路况的情况下，去尽量保持稳定的行走。
2.	感知环境性行走，在1的基础上，实现路径规划，精确定位，自动进行特殊步态（比如台阶等）等的行走。

*虽然现阶段ART-2上依旧有摄像头以及雷达的接口。我们依旧在第一个阶段徘徊和努力。*

步态生成方面有众多的研究成果和方案:

- 基于轨迹规划的方法

轨迹规划的方法，主要应用运动学和动力学原理简历模型，进行规划，采用控制理论的方法进行控制。中较为经典的是如图3.7所示的线性倒立摆模型(小车桌子)和由Vukobratovic等人提出的ZMP稳定性判据组成的控制方案。<sup>[32]</sup>
 
<center>
![图3.7 ZMP和线性倒立摆模型。摘自<sup>[33]</sup>](/img/arobot2/f3_7.png)
</center>

在大多主流的设计会在控制上会增加类似图3.8所示的稳定器来保障机器人的实际运动<sup>[34]</sup>。

<center>
![图3.8 稳定器的一种实现](/img/arobot2/f3_8.png) 
</center>

倒立摆模型也会延伸出一些其他的模型，比如弹簧负载倒立摆 (Spring loaded inverted pendulum, SLIP) 模型，其广泛应用于分析动物和机器人跑步运动<sup>[35]</sup>。相对ZMP也演化出了很多不同的方法，比如foot-rotation indicator (FRI) point<sup>[36]</sup>等。由于经典ZMP相关方法适合于长期的动作规划，不利于动态的切换和控制，也有一些实用的技术用来实现在线步态规划和切换<sup>[37]</sup><sup>[38]</sup>。相对于单纯的ZMP规划，在线步态更适合于复杂的路面和远程控制<sup>[39]</sup>。

这类方法由于是基于力学模型和控制理论的建模，因此大多可以当做白盒控制器，其表现形式非常的稳定，具有很强的可预测性。

对我们而言，采用了基于预观控制的ZMP方法作为我们的主要案例<sup>[40]</sup>，图3.9为生成的ZMP点和落脚点。=

<center>
![图3.9 ZMP点和落脚点](/img/arobot2/f3_9.png) 
</center>

- 力控制

在控制上面，采用ZMP方法的描述的机器人更多的采用了控制位置的力学模型（ZMP点，质心点，时间）。而如Altas之类的机器人采用的Center of Pressure (CoP)<sup>[41]</sup>和力矩控制的方法来直接控制机器人关节的力矩<sup>[42]</sup>。这种方法从我的理解上看，更本质的描述了机器人的运动本源（力），因此有更好的效果。

- 仿生方面
由于步行模式的复杂性，很多人认为，步行运动不应该进行简洁的解析规划，而应该是一种通过线性系统和环境之间的反馈和动态交互作用融合而成的一种非线性震荡<sup>[33]</sup>。于是源自于神经生物学，通过工程去模拟生物系统给仿人机器人的步态研究提供了一种条诱人的路线（这也属于认知科学的一部分）。在仿人领域在这方面较为知名的是中央模式生成 - CPG（Central pattern generator）方法，这类方法，由来自生物学中，位于脊髓或者胸腹神经节中的中枢模式发生器。这种发生器是由神经元构成的振荡网络，由众多CPG单元再构成CPG网络<sup>[43]</sup>。



<center>
![图3.10 中枢神经发生器 (CPG) 控制框图<sup>[35]</sup>](/img/arobot2/f3_10.png) 
</center>


想来，大家在人工智能概念爆炸的时节上，对于机器学习，深度学习，神经网络这些概念和方法即使没有接触也必有耳闻。在仿人机器人的步态生成上，学习和进化算法也占有了很大的戏份。比如Geng 等提出了类似神经-肌肉系统的控制器, 生成可在线调节速度的运动步态,通过数值模拟实现了图3.12机器人的动态稳定行走<sup>[44]</sup>. 2014 年, Geng利用如图3.12所示的基于神经网络的模型预测控制方法实现了在线速度校正<sup>[35]</sup>。MIT的Tedrake等在图3.13的被动机器人（被动机器人可以认为将机器人放在斜面上，不需要动力源，机器人会依靠重力行走，这方面的研究期望机器人仅仅受到简单的驱动力看就可以实现行走）上，通过强化学习来获取运动模式，据说可以在20分钟左右学习到各种地面条件下的合适的步行模式<sup>[33]</sup>。


<center>
![图3.11 RunRobot机器人](/img/arobot2/f3_11.png) 
</center>

<center>
![图3.12 神经网络的模型预测控制框图<sup>[45]</sup>](/img/arobot2/f3_12.png) 
</center>

*MPC全称可指Model Predictive Control模型预测控制（又称RHC, Receding Horizon Control）预观控制则属于一种预测模型。MPC应用在很多领域，不光是传统控制，也有自动驾驶等新兴技术等。*


<center>
![3.13 Tedrake实现的被动机器人模型<sup>[46]</sup>](/img/arobot2/f3_13.png) 
</center>

对神经网络有过接触的同学，自然也能想到到无论是CPG还是神经网络会成为一个黑盒控制器，然而对于与物理世界直接接触的及机器人来说，这种不确定性是否会限制其投入市场和产品化，不得而知。并且，对于学习网络的应用（尤其是适用在不同机器人上），调参将会是一个冗长而无保障的工作。

# 4. 总结 - 碎碎念 #

这一年经历了ART-1的设计和调试以及ART-2的设计。在理论上，深刻体会到了在仿人机器人中宽广如大海的知识范畴以及深入到力学，自控方面复杂的数学模型（后悔，上学没好好学数学）。在工程上，对复杂系统的集成的探索以及架构的思考成为了日常的生活，而不成熟的行业状态和相对较为封闭的研发环境（各公司，各机构）让团队经常无从下手。对仿人机器人产品的测试也着实让我们大费头脑（大多的机器人标准都是针对于工业机器人的）。

<center>
![图4.1 测试内容思维导图](/img/arobot2/f4_1.png) 
</center>

如何评估一款类人机器人的优劣只能从最终的表现行为来看，造成各个子系统很难对性能做出清晰的描述和规划，而机电软互相制约互相依存的产品特性又需要明确的接口方案。幸言之，我们现在并不需要提供一款具有产品级别稳定性的机器人，在磕磕碰碰，修修补补下，我们也达到了现在的地方 —— 一个高耸入云山峰的出发点。对我来说，此过程收获颇丰，不论是从企业运作，团队管理还是产品设计，原型研发。唯一郁闷的是，作为一个程序员，coding的技巧增幅曲线显著下降，这大概是在创业公司无力专精某一技术的悲凉（对，说的就是不好找工作）。

最后，感谢想感谢下公司各位对我的帮助，跟各种领域人才接触让我受益匪浅。

少年们，这场攀登刚刚开始，前路漫漫，祝武运昌隆。

最后针对我这一年随性而为出来浪的行为：感谢老妈努力赚钱不用我养家的勤奋，感谢傻娃在压力下对我四处浪的依旧支持，感谢泡泡同学在我在帝都居无定所的时候给我提供居住之地，感谢Synopsys的老板和同事帮我填坑，最后要感谢以Jack为代表的魔都小伙伴呕心沥血的帮我找一份行当养家糊口。

**icePie** 

**记于2017.7月**

P.S. 帝都人真多，空气真差。

----------

[1] 《列子汤问》十三篇

[2] 骆鹏, 李冰川, 苑全旺.一种仿人机器人髋关节机构及连接有该机构的机器人:, CN205652233U[P]. 2016.

[3] 骆鹏, 李冰川, 苑全旺. 一种仿人机器人腿部机构及连接有该机构的机器人:, CN205652233U[P]. 2016.

[4] 骆鹏, 李冰川, 苑全旺. 具有零点位置检测功能的仿人机器人关节机构:, CN205872233U[P]. 2016.

[5] Radford N A, Strawser P, Hambuchen K, et al. Valkyrie: NASA's First Bipedal Humanoid Robot[J]. Journal of Field Robotics, 2015, 32(3):397-419.

[6] Asimo-technical-information.

[7] N. Paine, J. Mehling, J. Holley, N. Radford, G. Johnson, C. Fok, and L. Sentis.  J. Actuator Control for the NASA-JSC Valkyrie Humanoid Robot: A Decoupled Dynamics Approach for Torque Control of Series Elastic Robots. Field Robotics 32 (3): 378-396 (2015)

[8] ISO 11898-2:2003-12 ; ISO 11898-2:2016-12

[9] Johnson M, Shrewsbury B, Bertrand S, et al. Team IHMC's Lessons Learned from the DARPA Robotics Challenge Trials[J]. Journal of Field Robotics, 2015, 32(2):192-208.

[10] http://wiki.ros.org/Robots/PR2

[11] http://www.ethercat.org.cn/cn/why_use_ethercat.htm

[12] https://en.wikipedia.org/wiki/Time-Sensitive_Networking

[13] Pierce B, Cheng G. Versatile modular electronics for rapid design and development of humanoid robotic subsystems[C]// Ieee/asme International Conference on Advanced Intelligent Mechatronics. IEEE, 2014:735-741.

[14] https://gitlab.com/nasa-jsc-robotics/valkyrie/wikis/Robonet

[15] http://wiki.icub.org/wiki/CFW_card

[16] Semester project II: Mobile Robot modeling, Simulating and Programming. New ASIMO

[17] http://en.robotis.com/index/product.php?cate_code=111410

[18] Knabe C, Seminatore J, Webb J, et al. Design of a series elastic humanoid for the DARPA Robotics Challenge[C]// Ieee-Ras, International Conference on Humanoid Robots. IEEE, 2015:738-743.

[19] Ogawa Y, Venture G, Ott C. Dynamic parameters identification of a humanoid robot using joint torque sensors and/or contact forces[C]// Ieee-Ras International Conference on Humanoid Robots. IEEE, 2015:457-462.

[20] http://doc.aldebaran.com/2-1/family/romeo/motors_romeo.html

[21] https://www.bostondynamics.com/atlas

[22] http://archive.darpa.mil/roboticschallengetrialsarchive/files/ATLAS-Datasheet_v15_DARPA.PDF

[23] Hyon S H, Suewaka D, Torii Y, et al. Development of a fast torque-controlled hydraulic humanoid robot that can balance 
compliantly[C]// Ieee-Ras, International Conference on Humanoid Robots. IEEE, 2015:576-581.

[24] https://zhuanlan.zhihu.com/p/26722384

[25] https://zh.wikipedia.org/wiki/%E8%AE%A4%E7%9F%A5%E7%A7%91%E5%AD%A6

[26] Barlow H B. Vision: A computational investigation into the human representation and processing of visual information : David Marr. San Francisco: W. H. Freeman, 1982. pp. xvi + 397[J]. Journal of Mathematical Psychology, 1983, 27(1):107-110.

[27] 许嘉璐, 彭奕欣. 中国中学教学百科全书,生物卷[M]. 沈阳出版社, 1990. 

[28] M·W·艾森克, M·T·基恩, 艾森克,等. 认知心理学[M]. 华东师范大学出版社, 2009.

[29] https://xenomai.org/

[30] http://rgmp.sourceforge.net/

[31] Wei H, Huang Z, Yu Q, et al. RGMP-ROS: A real-time ROS architecture of hybrid RTOS and GPOS on multi-core processor[C]// IEEE International Conference on Robotics and Automation. IEEE, 2014:2482-2487.

[32] Vukobratovic M, Sepaneko Y. On the stability of anthropomorphic systems[J]. Mathematical Biosciences, 2004, 15(1):1-37.

[33] 梶田秀司. 仿人机器人[M]. 清华大学出版社, 2007.

[34] （H）D. Kaynov, P. Souères, C. Balaguer, "A practical decoupled stabilizer for joint position controlled humanoid robots", IEEE/RSJ Int. Conference on intelligent Robots and Systems, St Louis MO, USA, Oct. 2009.

[35]田彦涛, 孙中波, 李宏扬,等. 动态双足机器人的控制与优化研究进展[J]. 自动化学报, 2016, 42(8):1142-1157.

[36] Goswami A. Postural Stability of Biped Robots and the Foot-Rotation Indicator (FRI) Point[J]. International Journal of Robotics Research, 1999, 18(18):523-533.

[37] McGill, Stephen G., et al. ”Team THOR’s Entry in the DARPA Robotics Challenge Finals 2015.” Journal of Field Robotics (2016).

[38] Yi, Seung-Joon, Dennis Hong, and Daniel D. Lee. ”A hybrid walk controller for resource-constrained humanoid robots.” Humanoid Robots (Humanoids), 2013 13th IEEE-RAS International Conference on. IEEE, 2013.

[39] Yi, Seung-Joon, et al. ”Online learning of a full body push recovery controller for omnidirectional walking.” Humanoid Robots (Humanoids), 2011 11th IEEE-RAS International Conference on. IEEE, 2011.

[40] Park J, Youm Y. General ZMP Preview Control for Bipedal Walking[C]// IEEE International Conference on Robotics and Automation. IEEE, 2007:2682-2687.

[41] Wiedebach G, Bertrand S, Wu T, et al. Walking on Partial Footholds Including Line Contacts with the Humanoid Robot Atlas[J]. 2016.

[42] Koolen T, Bertrand S, Thomas G, et al. Design of a Momentum-Based Control Framework and Application to the Humanoid Robot Atlas[J]. International Journal of Humanoid Robotics, 2016, 13(01):1650007-1650001.

[43]陈启军, 刘成菊. 双足机器人行走控制与优化[M]. 清华大学出版社, 2016.

[44] Geng T, Porr B, Wörgötter F. Fast Biped Walking with a Sensor-driven Neuronal Controller and Real-time Online Learning[J]. International Journal of Robotics Research, 2006, 25(25):243-259.

[45] Tao G. Online Regulation of the Walking Speed of a Planar Limit Cycle Walker via Model Predictive Control[J]. IEEE Transactions on Industrial Electronics, 2013, 61(5):2326-2333.

[46] Tedrake R, Zhang T W, Seung H S. Stochastic policy gradient reinforcement learning on a simple 3D biped[C]// Ieee/rsj International Conference on Intelligent Robots and Systems. IEEE, 2004:2849-2854 vol.3.
