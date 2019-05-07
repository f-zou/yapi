## YApi api manage platform

demo (chinese): 
<p><a target="_blank" href="http://yapi.demo.qunar.com">yapi.demo.qunar.com</a></p>

### introduction
![avatar](yapi-base-flow.jpg)

YApi is an efficient, easy-to-use, and powerful api management platform. 
it ist designed to provide more elegant interface management services for developers, products, and testers. 
It can help developers to easily create, publish, and maintain APIs. 
YApi also provides users with an excellent interactive experience. 
Developers can manage interfaces by using the tools in platform with simple click operations.

### Features
* efficiency: Based on Json5 and Mockjs to define the structure and data of the response   
* Flattened permission-design ensures the management of large enterprise-level projects and ensures ease of use
* Interface debugging like postman
* Automated testing, support assertions for response
* MockServer: random mock data, custom mock data, expectation function for mock, request filter rule for returning expected data
* Support data import from postman, har, swagger 
* Free open source, intranet deployment, no longer afraid to information-leak

###  deployment
#### Environments requirements
* nodejs（7.6+)
* mongodb（2.6+）
* git
#### install
it is easy to use the yapi-cli to deploy the YApi platform. After server config. run node /xxx_project/server/app.js to start the server


    npm install -g yapi-en-cli 
    yapi-en server 

#### update

    cd  {project}
    yapi-en ls // check yapi version
    yapi-en update // update to new version
    yapi-en update -v {Version} // update to a version
    
### Tutorial (chinese)
* [use YApi to manage API ,docs，tests and mock](https://juejin.im/post/5acc879f6fb9a028c42e8822)
* [auto update Swagger data to YApi ](https://juejin.im/post/5af500e251882567096140dd)
* [auto test](https://juejin.im/post/5a388892f265da430e4f4681)

### YApi plugin
* [yapi sso login](https://github.com/YMFE/yapi-plugin-qsso)
* [yapi cas login](https://github.com/wsfe/yapi-plugin-cas) By wsfe
* [yapi gitlabi_intergration](https://github.com/cyj0122/yapi-plugin-gitlab)
* [oauto2.0login](https://github.com/xwxsee2014/yapi-plugin-oauth2)
* [rap_data_import](https://github.com/wxxcarl/yapi-plugin-import-rap)
* [dingding](https://github.com/zgs225/yapi-plugin-dding) robot push pulgin

### code generator
* [yapi-to-typescript：generate TypeScript request function from yapi interface](https://github.com/fjc0k/yapi-to-typescript)
* [yapi-gen-js-code: gernerate javascript request from yapi interface ](https://github.com/hellosean1025/yapi-gen-js-code)

### depoly yapi docker（unofficial, chinese）
* [use alpine docker to desplay yapi fast](https://www.jianshu.com/p/a97d2efb23c5)

### YApi tools
* [mysql service http tool for yapi auto testing](https://github.com/hellosean1025/http-mysql-server)

### YApi reference customers
* 去哪儿 Qunar.com
* 携程 ctrip.com
* 艺龙 elong.com
* 美团 meituan.com
* 百度 baidu.com
* 腾讯 tencent.com
* 阿里巴巴 alibaba.com
* 京东 jd.com
* 今日头条 toutiao.com
* 唯品支付 vpal.com
* 链家网
* 快手 kuaishou.com
* 便利蜂 
* 中商惠民 
* 新浪 sina.com

### Authors
* [hellosean1025](https://github.com/hellosean1025)
* [gaoxiaomumu](https://github.com/gaoxiaomumu)
* [zwjamnsss](https://github.com/amnsss)
* [dwb1994](https://github.com/dwb1994)
* [fungezi](https://github.com/fungezi)

### translator
* [f-zou](https://github.com/f-zou)

### License
Apache License 2.0

