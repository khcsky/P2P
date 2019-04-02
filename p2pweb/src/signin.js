$(function () {
   
    draw();
  
    $("canvas.vcode").click(function () { //点击图片刷新验证码
        draw();
    })

    function checkVCode() {
        // 获取生成验证码
        let vcode = getCode();

        // 获取输入验证码
        let inputVCode = $('#vcode').val();
        // 把输入验证码转化为大写
        inputVCode = inputVCode.toUpperCase();
        return (inputVCode === vcode);
    }
     //初始化表单
     $('form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: '用户名长度必须在3到6位之间'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: '密码长度必须在3到6位之间'
                    },

                }
            },
            checkpassword: {
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次输入的密码不相符'
                    }

                }
            },
            // vcode: {
            //     validators: {
            //         notEmpty: {
            //             message: '验证码不能为空'
            //         },
            //     }
            // }
        }
    });

    // 用户名验证
    $('#username').blur(function () {
        var username = $('#username').val();
      if (username !== '') {
          $.ajax({
              type: 'get',
              url: 'http://127.0.0.1/checkusername.php',
              dataType: "json", //响应数据类型
              crossDomain: true, // 允许跨域
              data: {
                  username
              }, //请求参数
              success(data) {
                  let res = JSON.parse(data)

                  if (res.success) {
                      alert("用户名已存在请重新输入")
                      $('#username').val('');
                  }

              }
          })
      }


  })
    //点击注册事件
    $("#signin").on("click", () => {
        var username = $('#username').val();
        var password = $('#password').val();
        //验证码判断

        if (checkVCode()) {
            $('.error').css('display', 'none');
            // 2. 发送ajax请求 注册账号
            $.ajax({
                type: 'post',
                url: 'http://127.0.0.1/registeruser.php',
                dataType: "json", //响应数据类型
                data: {
                    username,
                    password
                },
              
                crossDomain: true, // 是否是跨域请求
                success(res) {
                   
                     
                     let data = JSON.parse(res);
                    console.log(data);

                    // 3. 在ajax回调中，判断响应
                    if (data.success) {
                        // 4. 根据响应结果，完成提示或页面跳转
                        alert('注册成功成功！')
                        location.href = '/login.html'
                    } else {
                        // 4. 根据响应结果，完成提示或页面跳转
                        alert(data.message)
                        // location.reload();
                        $('#username').val('');
                        $('#password').val('');
                        $('#vcode').val('');
                        draw();
                    }

                }
            })
        } 
        else {
            $('.error').css('display', 'block');
            draw();
        }
    })
})