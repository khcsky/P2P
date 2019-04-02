$(function () {



    // 加载session
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1/getsession.php',
        xhrFields: {
            withCredentials: true // 是否允许跨域cookie
        },
        crossDomain: true, // 是否是跨域请求
        success(res) {

            let username;
            if (res.indexOf('Notice') >= 0) {
                username = ''
            } else {
                username = res;
            }
            if (!username) {
                $('ul#top-list').html(`
            <li><a href="#" class="top-bar-item">首页</a></li>
            <li><a href="./login.html" class="top-bar-item">登录</a></li>
            <li><a href="./signin.html" class="top-bar-item">快速注册</a></li>
            <li><a href="#" class="top-bar-item">帮助</a></li>
            `)
            } else {
                $('ul#top-list').html(`
            <li><a href="#" class="top-bar-item">首页</a></li>
            <li class="user"><a href="personal.html" class="top-bar-item">${username}</a></li>
            <li><a href="qulickrecharge.html" class="top-bar-item">赶快充值</a></li>
            <li class="logout"><a href="javascript:";" class="top-bar-item ">注销</a></li>
            <li><a href="#" class="top-bar-item">帮助</a></li>
            <li><a href="#" class="top-bar-item">联系客服</a></li>
               
            `)
            }
        }
    })
    //注销事件
    $(document).ready( function () {
       
        $('ul#top-list .logout').on('click',()=>{
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1/clearsession.php',
                xhrFields: {
                    withCredentials: true // 是否允许跨域cookie
                },
                crossDomain: true, // 是否是跨域请求
                success(res) {//接收后端返回的结果
                                     
                    if (res=== '1') {//判断 如果为'1'清除session成功 执行代码
                        $('ul#top-list').html(`
                        <li><a href="#" class="top-bar-item">首页</a></li>
                        <li><a href="./login.html" class="top-bar-item">登录</a></li>
                        <li><a href="./signin.html" class="top-bar-item">快速注册</a></li>
                        <li><a href="#" class="top-bar-item">帮助</a></li>
                        `)
                        location.reload();
                    } 
                }
            })
        })
    })

    
    // 创建一个地址映射对象
    const pathObj = {
        'main': './modules/main/main.html',
        'invest': './modules/invest/invest.html',
        'borrow': './modules/borrow/borrow.html',
        'personal': './modules/personal/personal.html',
        'newguidelines': './modules/newguidelines/newguidelines.html',
        'aboutus': './modules/aboutus/aboutus.html'
    }
    // 对页面整体的hash变化，进行监听
    window.addEventListener('hashchange', function () {
        const hash = location.hash;
        var n = (hash.split('/')).length - 1;
        if (n === 1) {
            showView();
        }
    });

    //切换内容，刷新内容
    function showView() {
        const path = location.hash.substr(2);

        switch (path) {
            case 'invest':
                $('#root').load(pathObj['invest'])
                break;
            case 'borrow':
                $('#root').load(pathObj['borrow'])
                break;
            case 'personal':
                $('#root').load(pathObj['personal'])
                break;
            case 'newguidelines':
                $('#root').load(pathObj['newguidelines'])
                break;
            case 'aboutus':
                $('#root').load(pathObj['aboutus'])
                break;
            case 'main':
                $('#root').load(pathObj['main'])
                break;
            default:
                $('#root').load(pathObj['main'])
                break;
        }
    }

    //判断hash地址的层级
    const flag = location.hash;
    if (flag === "") {
        showView();
    } else {
        var n = (flag.split('/')).length;
        if (n === 2) {
            let paths = flag.split("/");
            //当hash地址为#/时单独处理
            if (paths[1] === "") {
                $("#root").load(pathObj["main"]);
            }
            $("#root").load(pathObj[paths[1]]);
        } else if (n === 3) {
            let paths = flag.split("/");
            $("#root").load(pathObj[paths[1]]);
        }
    }

    // 缓存变量
    let preLi = null;
    // 对页面导航菜单进行监听
    $('.menu-item').on('click', function () {
        //   $('.menu-item').parent().removeClass("active");
        //   $(this).parent().addClass("active");

        //保存当前点击的导航,便于刷新后存在
        let data = $(this).data().list
        window.sessionStorage.setItem("navmenu", data)
        const li = $(this).parent();
        // 如果有上一个
        if (preLi) {
            preLi.removeClass('active')
        } else {
            // 第一次直接做检索
            $('a.menu-item').parent().removeClass('active')
        }
        // 为新元素添加样式
        li.addClass('active')
        // 更新缓存
        preLi = li;
        sublocal()
    });

    // function setFies(){
    // 	const hash = location.hash;
    // 	window.sessionStorage.setItem(hash);
    // }

    //浏览器更新
    function getlocal() {
        let nownav = window.sessionStorage.getItem("navmenu");

        sublocal()
        if (!nownav) {
            $('.navbar-mune li a[data-list="main"]').parent().addClass('active');
        } else {
            $('.navbar-mune li a').parent().removeClass('active');
            $(`.navbar-mune li a[data-list="${nownav}"]`).parent().addClass('active');
        }
    }
    getlocal()
    //判断当前是否在个人中心,不再则清空local
    function sublocal() {
        let nav = window.sessionStorage.getItem("navmenu")
        // console.log(nav)
        if (nav != "personal") {
            window.sessionStorage.setItem("subnav", " ")
        }
    }

})