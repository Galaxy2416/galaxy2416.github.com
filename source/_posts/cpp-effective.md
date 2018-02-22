---
title: Effective C++
date: 2018-02-23 01:19:24
categories: program
tags: cpp
toc: false
---

# Effective C++ 之55个小技巧
## Accustoming Yourself to C++
<!---more--->
### Item 01
C++ = C + OOC + template + STL
### Item 02
尽量用 const, enum, inline 替换 #define
### Item 03 尽可能的使用 const
1. 常亮
2. 指针
3. 函数

两个概念：

- bitwise constness(C++使用) 
- logical constness (使用mutible来实现)

const_cast 可以作为转型解除掉const
### Item 04 确认对象使用前已经被初始化


- 为内置对象进行手工初始化，因为C++不保证他们。
- 构造函数最好使用成员初始化列表。排列顺序应该和生命顺序一致。

技巧：使用 member initialization list

    dom::function()
    :member1(xxx)
    :member2(xxx)
    .....

- 为免除“跨编译单元之初始化次序”问题，用local static对象替代non-local static对象。

## 构造/析构/赋值运算
### Item 05 了解C++默默编写并调用哪些函数
- 编译器会暗自为class创建default创建构造，copy构造，copy assignment操作符，以及析构函数。

### Item 06 不想使用编译器自动生成的函数，应该明确拒绝

- 设置为private或者使用Uncopyable这种base class也是一种做法。
- C++ 14 提供了delete的函数。

### Item 07 对多态基类声明 virtual 析构函数

- polymorphic base class应该声明一个virtual析构函数，如果class带有任何virtual函数，他就应该拥有一个virtual函数。
- classes的设计目的如果不是作为base classs使用， 或者不是为了具备polymorphically， 就不应该声明virtual析构函数。

### Item 08 别让异常逃离析构函数

- 析构函数绝对不要吐出异常。如果一个被析构函数调用的函数可能抛出异常，析构函数应该捕捉任何异常，然后吞下它们或程序结束。
- 如果客户需要对某个操作函数运行期间抛出的异常做出反应，那么class应该提供一个普通函数（非在析构函数中）执行该操作。

### Item 09 绝不在构造和析构过程中调用virtual函数

- 在构造和析构期间不要调用virtual函数，因为这类调用从不下降至derived class（比起当前执行构造和析构函数的那层）

### Item 11 在operator=中处理“自我赋值”

	Class& Class::operator=(const Class& rhs)
	{
		if (this == &rhs) return *this // 认同测试
		……		
		return *this
	}

- 确保当对象自我赋值时 operator= 有良好行为。其中技术包括比较“来源对象”和“目标对象”的地址、精心周到的语句顺序、以及copy-and-swap。

copy-and-swap 技术和“异常安全性”有密切的联系。

- 确定任何函数如果操作一个以上的对象，而其中多个对象是同一个对象时，其行为仍然正确。

### Item 12 复制对象时勿忘其每一个成分

- Copying函数应该确保复制“对象内的所有成员变量”以及”所有base class成分”。
- 不要尝试以某个copying函数实现另一个copying函数。应该将共同机能放进第三个函数中，并由两个copying函数共同调用。

## 资源管理
### Item 13 以对象管理资源

- 为防止资源泄露，请使用RAII对象，它们在构造函数中获得资源并在析构函数中释放资源。
- 两个常被使用的RAII classes分别是tr1::shared_ptr和auto_ptr （实际上已经在C++11之后的标准库中），shared的行为通常比较直观。auto_ptr会使被复制物为null，因此在新版本中尽量不宜使用。

### Item 14 在资源管理类中小心copying行为

- 复制RAII对象必须一并复制它所管理的资源，所以资源的copying行为决定RAII对象的copying行为。
- 普遍而常见的RAII class copying 行为是: 抑制 copying、施行计数法（reference counting）。不过其他行为也都可能被实现。

### Item 15 在资源管理类中体工队原始资源的访问

- API往往要求访问原始资源（raw resources），所以每一个RAII class应该提供一个“取得其所管理之资源”的办法。
- 对原始资源的访问可能经由显式转换后者隐式转换（operator()隐式转换函数）。显式转换更安全，隐式转换对客户比较方便。

### Item 16 成对使用new和delete时要采取相同的形式

- 如果你在new表达式中使用[]，必须在相应的delete表达式中也使用[]。如果你在new表达式中不使用[]，一定不要在相应的delete表达式中使用[]。

### Item 17 以独立语句讲newed对象置入智能指针

Java和C#都是以特定的次序完成函数参数的核算。

- 以独立语句将newed对象存储于（置于）智能指针内。如果不这样做，一旦异常被抛出，有可能导致难以察觉的资源泄露。

分离语句：

    shared_ptr<xx> pw(new xx);
    process(pw,.....);

因为可能new后的指针还未被管理，因为其他事情（顺序不确定）而导致异常。

## 设计与声明

### Item 18 让接口容易被正确使用，不容易被误用

- 好的接口容易被正确使用，不容易被误用。你应该在你的所有接口中努力达成这些性质。
- “促进正确使用”的办法包括接口的一致性，以及与内置类型的行为兼容。
- “阻止使用”的办法包括建立新类型、限制类型上的操作，束缚对象值，以及消除客户的资源管理责任。
- shared_ptr支持定制型删除器。这可防范DLL问题，可被用来自动解除互锁问题。（把Unlock作为deleter）

### Item 19 设计class有如设计type

- 新的type对象应该如何被创建和销毁？
- 对象的初始化和对象的赋值该有什么样的差别？
- 新type的对象如果被passed by value，意味着什么？
- 什么是新type的“合法值”？
- 你的新type需要配合某个inheritance graph吗？
- 你的新type需要什么样的转换？
- 什么样的操作符和函数对此新type而言是合理的？
- 什么样的标准函数应该驳回？
- 谁该取用新type的成员？
- 什么是新type的“未声明接口”
- 你的新type有多么一般化？

### Item 20 宁以pass-by-reference-to-const 替换 pass-by-value

- 尽量以pass-by-reference-to-const 替换 pass-by-value。 前者通常比较高效，并且可以避免切割问题（slicing problem）
- 以上规则并不适用于内置类型，以及STL的迭代器和函数对象。对他们而言，pass-by-value往往比较适当。

### Item 21 必须返回对象时，别忘想返回其reference

- 绝对不要返回pointer或reference指向一个local stack对象，或返回reference指向一个heap-allocated对象，或返回pointer或reference指向一个local static对象而有可能同时需要多个这样的对象。

### Item 22 将成员变量声明为private

- 切忌将成员变量声明为private。
- protected 并不比 public更具有封装性。

### Item 23 宁以non-member、non-friend替换member函数。 

- 这样做可以增加封装性、包裹弹性和技能扩充性。

### Item 24 若所有参数皆需类型转换，请为此采用non-member函数

- 如果需要为某个函数的所有参数（包括被this所指的那个隐喻参数）进行类型转换，那么这个函数必须是个non-member。

比如 result = rational * 2 和 result = 2 * rational

### Item 25 考虑写出一个不抛异常的swap函数

pimpl方法， pointer to implementation

前提知识点：template的偏特化和全特化。

- 当std::swap对你的类型效率不高时，提供一个swap函数，并确定这个函数不抛出异常。
- 如果你提供一个member swap，也该提供一个non-member swap 用来调用前者。对于class（而非templated）， 也请特化std:swap。
-  调用swap时应针对std::swap使用using声明，然后调用swap并且不带任何“命名空间资格修饰”。
-  为“用户定义类型”进行std templates全特化是好的，但千万不要尝试在std内加入某些对std而言全新的东西。

## 实现
### Item 26 尽可能延后变量定义式的出现时间

- 增加程序的清晰度并且改善程序的效率。

### Item 27 尽量少做转型工作

四种转型：

1. const_cast
2. dynamic_cast
3. reinterpret_cast
4. static_cast

- 如果可以，尽量避免转型，特别在注重效率的代码中避免dynamic_castes。如果有个设计需要转型动作，试着发展无需转型的替代设计。
- 如果转型是必要的，试着将它影藏于某个函数背后。客户随后可以调用该函数，而不需要将转型放进他们自己的代码内。
- 宁可使用C++-style转型，不要使用旧式转型。前者很容易辨识出来，而且也比较有着分门别类的执掌。

### Item 28 避免返回handles指向对象内部成分

- 增加封装性，帮助const成员函数的行为像是const，并将发生 dangling handles的可能性降至最低。

### Item 29 为“异常安全”而努力是值得的

有异常安全性的函数有：

1. 不泄露任何资源
2. 不允许数据败坏

需要提供以下三个保证之一：

1. 基本承诺：异常抛出，函数内的任何事物仍然保持在有效状态下。
2. 强烈保证：异常抛出，程序状态不改变。成则成，不成则返回调用之前的状态。
3. nothrow保证： 承诺绝不抛出异常。

- 强烈保证往往能够以 copy-and-swap实现出来，但“强烈保证”并非对所有的函数都可以实现或具备现实意义。
- 函数提供的“异常安全保证”通常最高只等于其所调用之各个函数的“异常安全保证”中的最弱者。

### Item 30 透彻了解 inlining 的里里外外

前提知识：inline函数的使用（头文件）

- inline 只是对编译器的一个申请，而不是强制命令。
- 将大多数inlining限制在小型、被频繁调用的函数身上。这可使日后调试过程和二进制升级更容易，也可使潜在的代码膨胀问题最小化，是程序的速度提升机会最大。
- 不要因为function templates出现在头文件，就将他们声明为inline。

### Item 31 将文件间的编译依存关系降至最低

- 支持“编译依存最小化”的一般构想是：相依与声明式，不要相依于定义式。基于此构想的两个手段是Handle classed(Impl) 和 Interface classes(Factory)。
- 程序库头文件应该以“完全且仅有声明式”的形式存在。这种做法不论是否涉及templates都适用。

## 继承与面向对象设计
### Item 32 确定你的public继承塑模出is-a的关系

- 适用于base classes身上的每一件事一定也适用于derived classes身上，因为每一个derived class对象也都是一个base class对象。

### Item 33 避免遮掩继承而来的名称

- derived classes内的名称会遮掩base classes内的名称。在public继承下从来没有人希望如此。
- 为了让被遮掩的名称再见天日，可使用using声明式或转交函数(forwarding functions)。
	using Base::func;

### Item 34 区分接口继承和实现继承

- 接口继承和实现继承不同，在public之下，derived classes总是继承base class的接口。
- pure virtual函数只具体制定接口继承。
- 非纯virtual函数具体指定接口继承及缺省实现继承。
- non-virtual函数具体指定接口继承以及强制性实现继承。

### Item 35 考虑virtual函数以外的其他选择

- 使用 non-virtual interface (NVI)手法，那是Template Method设计模式的一种特殊形式。它以public non-virtual成员函数包裹较低访问性（private或protected）的virtual函数。
- 将virtual函数替换为“函数指针成员变量”，这是Strategy设计模式的一种分解表现形式。 
- tr1::function成员变量替换virtual函数，因而允许使用任何可调用物（callable entity）搭配一个兼容于需求的签名式。同属Strategy。
- 将继承体系内的virtual函数替换为另一个继承体系内的virtual函数。这是Strategy设计模式的传统实现手法。

### Item 36 绝不重新定义继承而来的non-virtual函数

### Item 37 绝不重新定义继承而来的缺省参数值

- 因为缺省参数值都是静态绑定，而virtual函数 —— 唯一应该覆写的东西 —— 是动态绑定。

### Item 38 通过符合塑模初has-a或“is-implemended-in-terms-of”

- composition的意义和public继承完全不同
- 在application domain, composition 意味着has-a。在implementation domain, composition意味着is-implemented-in-terms-of。

### Item 39 明知而谨慎地使用private继承

- Private继承意味着is-implemented-terms-of。他通常比（composition）的级别低。但是当derived class需要访问proteted base class的成员，或需要重新定义继承而来的virtual函数时，这么设计是合理的。
- 和复合（composition）不同，private继承可以造成empty base最优化。这对致力于“对象尺寸最小化”的程序库开发者而言，可能很重要。

EBO(empty base optimization) 空白基类最优化

    class Empty {}; // sizeof(Empty) == 1, C++会默默安插一个char到独立对象中
	class HoldsAnInt: private Empty { // sizeof(HoldsAnInt) == sizeof(int)
	private:
		int x;
	};

EBO只在单继承的情况下可以使用。

### Item 40 明知而谨慎地使用多重继承

- 多重继承比单一继承复杂。它可能导致新的歧义性，以及对virtual继承的需要。
- virtual继承会增加大小，速度，初始化（及赋值）复杂度等等成本。如果virtual base classes不带任何数据，将是最具使用价值的情况。
- 多重继承的确有正当用途。其中一个情节涉及“public 继承某个 Interface class” 和 “Private 继承某个协助实现的class” 的两相组合。

## 模板与泛型编程
### Item 41 了解隐式接口和编译器多态

- class 和 templates都支持接口和多态
- 对classes而言接口是显示的（explicit），以函数签名为中心。多态则是通过virtual函数发生与运行期。
- 对template参数而言，接口是隐式的（implicit），奠基于有效表达式。多态则是通过template具现化和函数重载解析（function overloading resolution）发生于编译器。

### Item 42 了解typename的双重意义

- 声明template参数时，前缀关键字class和typename可互换。
- 请使用关键字typename标识嵌套从属类型名称：但不得在base class lists（基类列）或member intialization list（成员初值列）以它作为base class修饰符。

ex. 

    template<typename T>
    class Derived: public Base<T>::Nested { //base class list 中
    public:
    	explicit Derived(int x)
    	: Base<T>::Nested(x) // 成员列表中
    	{
    		typename Base<T>::Nested temp; // 嵌套从属类型名称
    		...
    	}
    	...
    };

### Item 43 学习处理模板化基类内的名称

- 可在derived class templates 内通过“this->” 指涉base class templates内的成员名称，或藉由一个明白写出的“base class  资格修饰符”完成。

### Item 44 将与参数无关得代码抽离templates

- Templates生成多个classes和多个函数，所以任何template代码都不该与某个造成膨胀的template参数产生相依关系。
- 因非类型模板参数（non-type template parameters）而造成的代码膨胀，往往可消除，做法是以函数参数或class成员变量替换template参数。
- 因类型参数（type parameters）而造成的代码膨胀，往往可降低，做法是让带有完全相同二进制表述（binary representations）的具现类型（instantiation types）共享实现码。

### Item 45 运用成员函数模板接受所有兼容类型

- 请使用member function templates（成员函数模板）生成“可接受所有兼容类型”的函数。
- 如果你声明 member templates 用于“泛化copy构造”或“泛化assignment操作”，你还是需要声明正常的copy构造函数和copy assignment操作符。

### Item 46 需要类型转换时请为模板定义非成员函数

- “与此template 相关的”函数支持“所有参数之隐式类型转换”时，将那些函数定义为“class template内部的friend函数”。

### Item 47 请使用traits classes表现类型信息

- Traits classes使得“类型相关信息”在编译期可用。它们以templates和“templates特化”完成实现。
- 整合重载技术（overloading）后，traits classes有可能在编译期对类型执行if...else测试。

### Item 48 认识template元编程

- Template metaprogramming（TMP， 模板元编程）可将工作由运行期移往编译期，因而得以实现早期错误错误侦测和更高的执行效率。
- TMP可被用来生成“基于政策选择组合”（based on combinations of policy choices）的客户定制代码，也可用来避免生成对某些特殊类型并不适合的代码。

## 定制new和delete

STL容器所使用heap内存是由容器所拥有的分配器对象（allocator objects）管理，不是被new和delete直接管理

### item 49 了解new-handler的行为

    namespace std {
    	typedef void (*new_handler)();
    	new_handler set_new_handler(new_handler p) throw();
    }

使用：

    void outOfMem()
    {
    	std::cerr << "Unable to statify request for memory\n";
    	std::abort( );
    }
    
    int main()
    {
    	std::set_new_handler(outOfMem);
    	int* pBigDataArray = new int[100000000L];
    	...
    }

一个好的new-handler:

- 让更多的内存可以使用。
- 安装另一个new-handler。
- 卸除new-handler。
- 抛出bad_alloc（或派生出自bad_alloc）的异常。
- 不返回，通常调用abort或者exit

> CRTP (curiously recurring template pattern) 怪异的循环模式，Widget继承自一个模板化的base class，后者又以Widget作为类型参数。可以用来添加set_new_handler支持。

总结：

- set_new_handler允许客户制定一个函数，在内存分配无法获得满足时被调用。
- Nothrow new是一个颇为局限的工具，因为它只适用于内存分配；后续的构造函数调用还是可能抛出异常。

ex.

    Widget* pw2 = new (std::nothrow) Widget;

### Item 50 了解new和delete的合理替换时机

- 用来检测运用上的错误
- 为了强化效能
- 为了收集使用上的统计数
- 为了增加分配和归还的速度
- 为了降低缺省内存管理器带来的额外开销
- 为了弥补缺省分配器中的非最佳齐位
- 为了将相关对象成簇集中
- 为了获得非传统的行为

### Item 51 编写new和delete时需要固守常规

- operator new 应该内含一个无穷循环，并在其中尝试分配内存，如果他无法满足内存需求，就该调用new-handler。它也应该有能力处理 0 byte 申请。Class专属版本则还应该处理“比正确大小更大的（错误）申请”。
- operator delete 应该在收到null指针时不做任何事。Class专属版本则还应该处理“比正确大小更大的（错误）申请”。

### Item 52 写了placement new 也要写 placement delete

- 请不要无意识的遮掩正常版本的new和delete

## 杂项讨论

### Item 53 不要轻视编译器的警告

### Item 54 让自己熟悉包括 TR1 在内的标准程序库 （最新的版本不太需求）

### Item 55 让自己熟悉 Boost

Boost： C++标准库的候选者们