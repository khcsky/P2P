$(function () {
  
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