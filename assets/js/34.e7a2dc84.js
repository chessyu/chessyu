(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{484:function(e,s,t){"use strict";t.r(s);var a=t(5),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("要一直向上，要保持满腔的热血")])]),e._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),t("p",[e._v("项目组有个类似富文本编辑器功能，在IE浏览器下需要支持打印。为解决打印兼容性问题，需要一套根据Html输出PDF的服务。")]),e._v(" "),t("p",[e._v("so, 想直接看结果的： "),t("a",{attrs:{href:"http://118.25.49.69",target:"_blank",rel:"noopener noreferrer"}},[e._v("Html转PDF 在线预览"),t("OutboundLink")],1),e._v("  😎😎😎")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/363c0d41e7964058a1cb5cda7d97b24b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"调研"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调研"}},[e._v("#")]),e._v(" 调研")]),e._v(" "),t("p",[e._v("html转pdf方案有很多，怎么选择也看各位的具体情况")]),e._v(" "),t("h3",{attrs:{id:"_1、chrome浏览器自带"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、chrome浏览器自带"}},[e._v("#")]),e._v(" 1、chrome浏览器自带")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a79c4d31f122416ab0e6046be3da88a8~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),t("ul",[t("li",[e._v("需要用户自己点击")]),e._v(" "),t("li",[e._v("用户需要使用chrome等支持的浏览器")]),e._v(" "),t("li",[e._v("打印默认是全局打印\n"),t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de59bb0fb31c48608b2d32f0f6aea9f6~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),e._v(" "),t("p",[t("code",[e._v("npm install vue-iframe-print")]),e._v(" 在需要打印的DOM上加上"),t("code",[e._v("v-print")]),e._v("即可实现局部打印")]),e._v(" "),t("h3",{attrs:{id:"_2、html2canvas-jspdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、html2canvas-jspdf"}},[e._v("#")]),e._v(" 2、html2canvas + jsPdf")]),e._v(" "),t("p",[e._v("实现可参考："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000009211079",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript 将html转成pdf,下载,支持多页哦（html2canvas 和 jsPDF）"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"缺点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),t("ul",[t("li",[e._v("html2canvas插件在IE的兼容性问题")]),e._v(" "),t("li",[e._v("清晰度问题")]),e._v(" "),t("li",[e._v("分页问题")]),e._v(" "),t("li",[e._v("文字图片截断问题")])]),e._v(" "),t("h3",{attrs:{id:"_3、node服务端转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、node服务端转换"}},[e._v("#")]),e._v(" 3、node服务端转换")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://wkhtmltopdf.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wkthtmltopdf"),t("OutboundLink")],1),e._v(" 坑较多~")]),e._v(" "),t("li",[t("a",{attrs:{href:"http://amirraminfar.com/phantomjs-node/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("phantomjs"),t("OutboundLink")],1),e._v("  基于webkit的无头浏览器,社区使用的不多，很久没更新了，可以深度了解下")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer"),t("OutboundLink")],1),e._v(" + Headless Chrome  社区里使用该方案的也比较多")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96cd59cc46834b22a7b3c3dd2ba864c7~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"选用egg-puppeteer-😉😉😉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选用egg-puppeteer-😉😉😉"}},[e._v("#")]),e._v(" 选用Egg + Puppeteer 😉😉😉")]),e._v(" "),t("p",[e._v("如果你想自己重头开始搭建，可以参考："),t("a",{attrs:{href:"https://blog.csdn.net/zhai_865327/article/details/104792646",target:"_blank",rel:"noopener noreferrer"}},[e._v("puppeteer 生成pdf，绝对解决你的需求"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"部署-敲黑板-❗❗❗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-敲黑板-❗❗❗"}},[e._v("#")]),e._v(" 部署（敲黑板）❗❗❗")]),e._v(" "),t("p",[e._v("当你已经完成了基本功能以后，高高兴兴的以为就剩下最后一步了，那么坑来了~")]),e._v(" "),t("h3",{attrs:{id:"_1、在-docker-中使用-puppeteer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、在-docker-中使用-puppeteer"}},[e._v("#")]),e._v(" 1、在 Docker 中使用 Puppeteer")]),e._v(" "),t("p",[e._v("官方文档指出“在 Docker 中使用 headless Chrome 并使其运行起来可能会非常棘手”。官方文档有"),t("a",{attrs:{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("疑难解答部分"),t("OutboundLink")],1),e._v("，你可以找到有关用 Docker 安装 puppeteer 的所有必要信息。")]),e._v(" "),t("p",[e._v("如果你在 Alpine 镜像上安装 Puppeteer，请确保在看到页面的这一部分时再向下滚动一点。否则你可能会忽略一个事实：你无法运行最新的 Puppeteer 版本，并且你还需要用一个标记禁用 shm")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const browser = await puppeteer.launch({\n headless: true,\n args: ['--disable-dev-shm-usage']\n});\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("否则，Puppeteer 子进程可能会在正常启动之前耗尽内存。")]),e._v(" "),t("h3",{attrs:{id:"_2、在centos中部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、在centos中部署"}},[e._v("#")]),e._v(" 2、在centOS中部署")]),e._v(" "),t("h3",{attrs:{id:"第一步-安装chrome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-安装chrome"}},[e._v("#")]),e._v(" 第一步：安装chrome")]),e._v(" "),t("p",[e._v("因为是直接使用的Puppeteer包，需要依赖于chrome内核，所以你在启动项目"),t("code",[e._v("npm install")]),e._v(" 的时候会一直卡在"),t("code",[e._v("node install.js")]),e._v("这里，因为china网络问题和chrome太大，你很难在服务器上直接部署成功。")]),e._v(" "),t("p",[e._v("puppeteer支持本地chrome安装链接，所以可以手动指定")]),e._v(" "),t("p",[e._v("跳过chrome安装："),t("code",[e._v("npm install puppeteer --ignore-scripts")])]),e._v(" "),t("p",[e._v("chrome安装具体可参考："),t("a",{attrs:{href:"https://blog.csdn.net/Zeng__Yi/article/details/105661354",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云服务器（centos7）的使用（7）一Puppeteer导出PDF的部署和使用"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"坑出没-warning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#坑出没-warning"}},[e._v("#")]),e._v(" 坑出没，warning~")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const browser = await puppeteer.launch({\n      args: ['--disable-dev-shm-usage', '--no-sandbox'],\n      headless:true,\n      // linux chrome的默认安装路径\n      executablePath:'/opt/google/chrome/chrome'\n  });\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("这里写的puppeteer启动路径"),t("code",[e._v("executablePath")]),e._v("是linux下chrome的安装路径，如果换了本地，不同的系统对应的路径可能都不一样~  千辛万苦找了一个包，很好用~ "),t("code",[e._v("npm install carlo")])]),e._v(" "),t("p",[e._v("关于"),t("code",[e._v("carlo")]),e._v("，可以去了解下："),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/48319397",target:"_blank",rel:"noopener noreferrer"}},[e._v("『Carlo』 一个新的 Electron ?"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'use strict';\nconst puppeteer = require('puppeteer');\n\nconst findChrome = require('../../node_modules/carlo/lib/find_chrome');\n\nlet browser = null;\n\nmodule.exports = async () => {\n  if (!browser) {\n    const findChromePath = await findChrome({});\n    // browser = await puppeteer.launch();\n    browser = await puppeteer.launch({\n      headless: true,\n      // chrome的默认安装路径\n      executablePath: findChromePath.executablePath,\n      args: [\n        '--disable-gpu',\n        '--disable-dev-shm-usage',\n        '--disable-setuid-sandbox',\n        '--no-first-run',\n        '--no-sandbox',\n        '--no-zygote',\n        '--single-process',\n      ],\n    });\n  }\n  return browser;\n};\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br")])]),t("h3",{attrs:{id:"第二步-部署脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-部署脚本"}},[e._v("#")]),e._v(" 第二步：部署脚本")]),e._v(" "),t("p",[e._v("虽然egg有自己的进程管理，但是这里还是推荐使用pm2，在项目根目录下")]),e._v(" "),t("p",[e._v("新建 deploy.sh")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 部署脚本\ntype node\nnpm install puppeteer --ignore-scripts\nnpm install\npm2 kill\n# 睡眠，避免出现错误：Spawning PM2 daemon with pm2_home\nsleep 2\npm2 start pm2.config.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("新建 pm2.config.json")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "apps": [\n    {\n      "name": "html-to-pdf",\n      "script": "npm",\n      "args": "run start",\n      "log_date_format": "YYYY-MM-DD HH:mm:ss",\n      "exec_mode": "fork",\n      "max_memory_restart": "500M"\n    }\n  ]\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"一切就绪-启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一切就绪-启动"}},[e._v("#")]),e._v(" 一切就绪，启动！！！")]),e._v(" "),t("p",[e._v("在服务器的项目中执行"),t("code",[e._v("sh deploy.sh")]),e._v(", pm2显示启动成功即可")]),e._v(" "),t("p",[e._v("这个时候服务是没问题了，但是其他问题就来了，因为服务器上是没有中文字体库的~所以生成的pdf，中文字体全是乱码")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eecfaf7894f4666b1399d3320832291~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"第三步-安装字体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步-安装字体"}},[e._v("#")]),e._v(" 第三步：安装字体")]),e._v(" "),t("p",[e._v("一、安装fontconfig\n"),t("code",[e._v("yum -y install fontconfig")]),e._v("\n这个命令执行完成之后，就可以在"),t("code",[e._v("/usr/share")]),e._v("文件夹里面看到fonts和fontconfig\n二、添加中文字体库")]),e._v(" "),t("ul",[t("li",[e._v("从window的"),t("code",[e._v("C:\\Windows\\Fonts")]),e._v("里面字体拷贝一份，或者只选择你需要的")]),e._v(" "),t("li",[e._v("在CentOS的"),t("code",[e._v("/usr/share/fonts")]),e._v("新建一个叫chinese的文件夹")]),e._v(" "),t("li",[e._v("然后把刚刚拷贝字体放到CentOS的"),t("code",[e._v("/usr/share/fonts/chinese")]),e._v("里面")]),e._v(" "),t("li",[e._v("修改chinese目录的权限。"),t("code",[e._v("chmod -R 775 /usr/share/fonts/chinese")])]),e._v(" "),t("li",[e._v("接下来需要安装"),t("code",[e._v("ttmkfdir")]),e._v("来搜索目录中所有的字体信息，并汇总生成fonts.scale文件，输入命令"),t("code",[e._v("yum -y install ttmkfdir")])]),e._v(" "),t("li",[e._v("执行ttmkfdir命令， "),t("code",[e._v("ttmkfdir -e /usr/share/X11/fonts/encodings/encodings.dir")])]),e._v(" "),t("li",[e._v("打开字体配置文件，"),t("code",[e._v("vi /etc/fonts/fonts.conf")]),e._v("，添加下面这一段")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!-- Font directory list --\x3e\n<dir>/usr/share/fonts</dir>\n<dir>/usr/share/X11/fonts/Type1</dir>\n<dir>/usr/share/X11/fonts/TTF</dir>\n<dir>/usr/local/share/fonts</dir>\n<dir>/usr/local/share/fonts/chinese</dir>\n<dir>~/.fonts</dir>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("ul",[t("li",[e._v("刷新内存中的字体缓存，fc-cache")]),e._v(" "),t("li",[e._v("看一下现在机器上已经有了刚才添加的字体。fc-list :lang=zh")])]),e._v(" "),t("h2",{attrs:{id:"大功告成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大功告成"}},[e._v("#")]),e._v(" 大功告成")]),e._v(" "),t("p",[e._v("这个时候基本就没问题了, 后续遇到的问题再更新。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/967055123abf44c794f39a474474e041~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"最后-ie加载pdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后-ie加载pdf"}},[e._v("#")]),e._v(" 最后：IE加载PDF")]),e._v(" "),t("p",[e._v("需要安装下adobe reader\n"),t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c649e383990e4f3787516bbba6a8f44f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009211079",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript 将html转成pdf,下载,支持多页哦（html2canvas 和 jsPDF）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903612993241101",target:"_blank",rel:"noopener noreferrer"}},[e._v("html转PDF文件，完美解决方案——jsPDF,htmltocanvas,pdfmake,wkhtmltopdf,TuesPechkin,snappy"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/158204817",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用puppeteer和egg.js实现html2pdf、html2png。"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v5.5.0&show=api-pagepdfoptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("page.pdf([options])"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dec3b75bd7a24e4bbbc89040d69ec311~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);