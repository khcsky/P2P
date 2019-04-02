$(function () {
    // 对页面整体的hash变化，进行监听
    window.addEventListener('hashchange', showView);

    function showView() {
        const hash = location.hash;
        const path = hash.substr(2);

        // 创建一个地址映射对象
        const pathObj = {
            'mainlogin': './modules/main/mainlogin.html',
            'invest': './modules/invest/invest.html',
            'borrow': './modules/borrow/borrow.html',
            'personal': './modules/personal/personal.html',
            'newguidelines': './modules/newguidelines/newguidelines.html',
            'aboutus': './modules/aboutus/aboutus.html',
            
            'accountInfo': './modules/personal/center/accountInfo/accountInfo.html',
            'loan': './modules/personal/center/loan/loan.html',
            'refund': './modules/personal/center/refund/refund.html',
            'realname': './modules/personal/center/realname/realname.html',
            'accountwater': './modules/personal/center/accountwater/accountwater.html',
            'recharge': './modules/personal/center/recharge/recharge.html',
            'loginlist': './modules/personal/center/loginlist/loginlist.html',
            'record': './modules/personal/center/record/record.html',
            'personaldata': './modules/personal/center/personaldata/personaldata.html'
        }
        switch (path) {
            case 'invest':
                $('#roots').load(pathObj['invest'])
                break;
            case 'borrow':
                $('#roots').load(pathObj['borrow'])
                break;
            case 'personal':
                $('#roots').load(pathObj['personal'])
                break;
                case 'personal/accountInfo':
	                $('#self').load(pathObj['accountInfo'])
	                break;
                case 'personal/loan':
	                $('#self').load(pathObj['loan'])
	                break;
                case 'personal/refund':
	                $('#self').load(pathObj['refund'])
	                break;
                case 'personal/realname':
	                $('#self').load(pathObj['realname'])
	                break;
                case 'personal/accountwater':
	                $('#self').load(pathObj['accountwater'])
	                break;
                case 'personal/recharge':
	                $('#self').load(pathObj['recharge'])
	                break;
                case 'personal/loginlist':
	                $('#self').load(pathObj['loginlist'])
	                break;
	            case 'personal/record':
	                $('#self').load(pathObj['record'])
	                break;
	            case 'personal/personaldata':
	                $('#self').load(pathObj['personaldata'])
	                break;
            case 'newguidelines':
                $('#roots').load(pathObj['newguidelines'])
                break;
            case 'aboutus':
                $('#roots').load(pathObj['aboutus'])
                break;
            default:
                $('#roots').load(pathObj['mainlogin'])
                break;
        }
    }
    // 在第一次加载时，手动调用hash地址的页面渲染
    showView();
    // 缓存变量
    let preLi = null;
    // 对页面导航菜单进行监听
    $('.menu-item').on('click', function () {
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

    });
})