$(function() {
  // 创建一个地址映射对象
  const pathObj = {
    accountInfo: "./modules/personal/center/accountInfo/accountInfo.html",
    loan: "./modules/personal/center/loan/loan.html",
    refund: "./modules/personal/center/refund/refund.html",
    realname: "./modules/personal/center/realname/realname.html",
    accountwater: "./modules/personal/center/accountwater/accountwater.html",
    recharge: "./modules/personal/center/recharge/recharge.html",
    loginlist: "./modules/personal/center/loginlist/loginlist.html",
    record: "./modules/personal/center/record/record.html",
    personaldata: "./modules/personal/center/personaldata/personaldata.html"
  };

  // 对页面整体的hash变化，进行监听
  window.addEventListener("hashchange", showView);
  function showView() {
    let start = location.hash.lastIndexOf("/");
    let newpath = location.hash.substr(start + 1);
    switch (newpath) {
      case "accountInfo":
        $("#self").load(pathObj["accountInfo"]);
        break;
      case "loan":
        $("#self").load(pathObj["loan"]);
        break;
      case "refund":
        $("#self").load(pathObj["refund"]);
        break;
      case "accountwater":
        $("#self").load(pathObj["accountwater"]);
        break;
      case "recharge":
        $("#self").load(pathObj["recharge"]);
        break;
      case "loginlist":
        $("#self").load(pathObj["loginlist"]);
        break;
      case "record":
        $("#self").load(pathObj["record"]);
        break;
      case "personaldata":
        $("#self").load(pathObj["personaldata"]);
        break;
        case "realname":
            $("#self").load(pathObj["realname"]);
        break;
      default:
        $("#self").load(pathObj["realname"]);
        break;
    }
  }
  //判断hash地址的层级
  const flag = location.hash;
  if (flag === "") {
    showView();
  } else {
    var n = flag.split("/").length;
    if (n === 2) {
      $("#self").load(pathObj["realname"]);
    } else if (n === 3) {
      let paths = flag.split("/");
      $("#self").load(pathObj[paths[2]]);
    }
  }
  //  // 在第一次加载时，手动调用hash地址的页面渲染
  //  showView();
  // 缓存变量
  let preLi = null;
  // 对页面导航菜单进行监听
  $(".menu-items").on("click", function() {
    //保存当前点击的导航,便于刷新后存在
    let data = $(this).data().subnav;
    window.sessionStorage.setItem("subnav", data);

    const li = $(this).parent();
    // 如果有上一个
    if (preLi) {
      preLi.removeClass("active");
    } else {
      // 第一次直接做检索
      $("a.menu-items").parent().removeClass("active");
    }
    // 为新元素添加样式
    li.addClass("active");
    // 更新缓存
    preLi = li;
    getlocal();
  });

  //浏览器刷新
  function getlocal() {
      let nownav = window.sessionStorage.getItem("subnav");
      console.log(nownav)
      if (nownav === " ") {
          console.log(1)
        //   $("#subnavlist a").parent().removeClass("active");
        //   $(`#subnavlist a[data-subnav="${nownav}"]`).parent().addClass("active");
        //   // $("#subnavlist a").parent().parent().removeClass("in");
        //   $(`#subnavlist a[data-subnav="${nownav}"]`).parent().parent().addClass("in");

            // $("#subnavlist a").parent().removeClass("active");
            $('#subnavlist a[data-subnav="realname"]').parent().addClass("active");
            $('#subnavlist a[data-subnav="realname"]').parent().parent().addClass("in");
      } else{
          console.log(2)
            // $("#subnavlist a").parent().removeClass("active");
            $(`#subnavlist a[data-subnav="${nownav}"]`).parent().addClass("active");
            // $("#subnavlist a").parent().parent().removeClass("in");
            $(`#subnavlist a[data-subnav="${nownav}"]`).parent().parent().addClass("in");

        //   $("#subnavlist a").parent().removeClass("active");
        //   $('#subnavlist a[data-subnav="realname"]').parent().addClass("active");
        //   $('#subnavlist a[data-subnav="realname"]').parent().parent().addClass("in");
        }
  }
  getlocal();
  //无跳转的页面处理
  $("#subnavlist a[href='#/personal']").on("click", function() {
    let nownav = window.sessionStorage.getItem("subnav");
    console.log(3)
    if (nownav) {
        // $("#subnavlist a").parent().removeClass("active"); 
        $('#subnavlist a[data-subnav="realname"]').parent().addClass("active");
        // $('#subnavlist a[data-subnav="realname"]').parent().parent().removeClass("in");
        $('#subnavlist a[data-subnav="realname"]').parent().parent().addClass("in");
    }
  });
});
