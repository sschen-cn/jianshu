# 这是一套用react制作简书项目的实战练手项目，只实现了首页布局和简单的动画和逻辑
# 笔记
## ReactJS
    Facebook推出
    2013年开源
    函数式编程
    使用人数最多的前端框架
    健全的文档与完善的社区
    官网：reactjs.org
    React Fiber指React16
React.js更灵活，更适合大型项目
<br>
React Native
<br>
React VR

## Create-react-app
    官方脚手架工具
    npx create-react-app my-app
    npx可以自行下载所需依赖完成命令行内容
    国内容易安装失败，可以换淘宝源
    npm config set registry https://registry.npm.taobao.org

### 创建工程目录
    create-react-app todolist
    public发布和src源文件
#### PWA
    progressive web application
    serviceWorker
    网页在https协议的服务器上可以具备存储在缓存里，即使断网后也能打开
### 组件
####组件之间传参
    父组件传递给子组件，父组件使用属性绑定数据或者方法，子组件使用props接收
    子组件调用父组件方法传值
#### ReactDOM.render
    把react组件挂载在dom上
#### JSX语法
    使用JSX语法必需引用Reat
    JSX语法：
    可以直接写html标签
    使用自己创建的组件，组件名要以大写字母开头
    render必须只能有一个div元素,最外层可以引入Fragment代替div
    注释,js语法必须加{}
    使用className代替class定义元素类名,使用htmlFor代替for
    dangerouslySetInnerHTML={{__html: item}}可以使渲染的内容不转译
#### React中响应式设计思想和事件绑定
    事件绑定：需要bind(this)把this指向触发事件的dom
    修改数据需要使用内置的setState方法
    immutable:state不允许直接做任何改变
####衍生
    声明式开发：面向数据，节约操作dom
    react只管理挂载点的dom，可以与其他框架并存
    组件化思想
    单向数据流：只能父组件向子组件传值，但子组件不能直接更改值
    react是视图层框架，不负责数据通信
    函数式编程，面向测试开发
##React高级语法
###PropTypes与DefaultProps
    PropTypes对传值类型进行校验，DefaultProps对传值赋默认值
###Props，State和render
    当组件的state或者props发生改变的时候，render函数会被重新执行
    当父组件的render函数被运行时，子组件的render也会被执行一次
###虚拟DOM
    虚拟DOM就是一个JS对象，用它来描述真实DOM，数据变化时，生成新的虚拟DOM，
    比较虚拟DOM找出区别，然后操作真实的DOM。React.createElement生成虚拟DOM
    优点：性能提升，跨端应用得以实现ReactNative
    Diff算法：比较虚拟DOM。同层比对。使用稳定的内容做key值，提高diff算法性能
###ref的使用
    可以直接操作DOM，不推荐。setState异步函数，提供回调函数执行state变更后的操作
###生命周期函数
    指在某一个时刻每一个组件内会自动调用执行的函数：
    componentWillMount：在组件即将被挂载到页面的时刻被执行；
    componentDidMount：在组件被挂载到页面之后被执行；
    shouldCoponentUpdate：在组件被更新之前被执行；要求返回一个布尔值，可以决定是否更新组件；
    componentWillUpdate：组件被更新之前会执行，但在shouldComponentUpdate返回为true之后；
    render函数：组件被渲染的时候被执行；component组件没有内置render函数，所以必须写；
    componentDidUpdate：组件更新完成之后被执行；
    componentWillReceiveProps：组件从父组件接收参数，当父组件的render函数重新被执行之后被执行；
    componentWillUnmount：当组件即将被从页面中剔除时被执行；
####生命周期函数使用场景
    绑定this作用域放在constructor中，提高性能；
    shouldComponentUpdate返回false可以避免无谓刷新DOM；
    componentDidMount用来处理Ajax请求；（Ajax模块Axios，和vue一样）
###第三方模块React-transition-group
Transition，CSSTrasition，TransitionGroup
##Redux
    Redux=Reducer+Flux
    store是唯一的；
    只有store可以改变自己的内容；
    Reducer必须是纯函数；
###Redux工作流程
    Components组件=>发出请求=>Store=>Reducers查询=>给出数据
    createStore=>store.dispatch=>store.getState=>store.subscribe
###Ant Design
###UI组件和容器组件
###无状态组件
###Redux-thunk中间件
把ajax异步函数放入actionCreator管理
###Redux中间件
指的是action与Store的中间，对dispatch方法升级。
###Redux-saga中间件
###react-redux
    Provider,connect
###styled-components
避免css全局生效造成的样式冲突
实战：
引入第三方库：
1.redux，创建store做数据状态管理
2.react-redux，根组件引入Provider使所有子组件直接使用store，子组件引入connect连接根组件，使用mapStateToProps，mapDispatchToProps对store数据读取和状态传递
3.immutable，使用immutable对象，使state转化为不可直接改变，只能使用set,get方法
4.react-immutable统一数据格式,combineReducers直接使reducer中state变为immutable对象
5.redux-thunk,使dispatch能传函数
6.axios，异步请求(react的public可以用模拟数据)
7.react-router-dom,路由功能
8.react-loadable,异步加载功能