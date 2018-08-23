// 分类
$(function() {
    function tabs(tabTit, on, tabCon) {
        $(tabTit).children().click(function() { // “hover”是鼠标经过事件，如果想要鼠标点击事件，不要鼠标经过效果， 改成“click”即可。$(tabTit).children().hover(function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    };
    tabs(".tab-hd", "active", ".tab-bd");
});


$(function() {
    // top
    $(".gotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    // list 筛选
    $(".list_screen .list").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find("i").toggleClass("direction")
    })
});


// 加减
$(function () {
    // 打开
    $(".fix_bnt .add,.fix_bnt .right").click(function(){
        $(".show_goods").css("display","block");
        $("html,body").addClass("noscroll");
    })
    // 关闭
    $(".show_goods .mask,.show_goods .icon-guanbi").click(function(){
        $(".show_goods").css("display","none");
        $("html,body").removeClass("noscroll");
    })

    


    var $allCheckbox = $('input[type="checkbox"]'),     
        $wholeChexbox = $('.whole_check'),
        $cartBox = $('.cartBox'),                       
        $shopCheckbox = $('.shopChoice'),               
        $sonCheckBox = $('.son_check');                 
    $allCheckbox.click(function () {
        if ($(this).is(':checked')) {
            $(this).next('label').addClass('mark');
        } else {
            $(this).next('label').removeClass('mark')
        }
    });

    
    //=================================================商品数量==============================================
    var $plus = $('.plus'),
        $reduce = $('.reduce'),
        $all_sum = $('.sum');
    $plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = parseInt($inputVal.val())+1,
            $obj = $(this).parents('.amount_box').find('.reduce'),
            $priceTotalObj = $(this).parents('.goods_box').find('.sum_price'),
            $price = $(this).parents('.goods_box').find('.price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
        $inputVal.val($count);
        $priceTotalObj.html('￥'+$priceTotal);
        if($inputVal.val()>1 && $obj.hasClass('reSty')){
            $obj.removeClass('reSty');
        }
        totalMoney();
    });

    $reduce.click(function () {
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.goods_box').find('.sum_price'),
            $price = $(this).parents('.goods_box').find('.price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
        if($inputVal.val()>1){
            $inputVal.val($count);
            $priceTotalObj.html('￥'+$priceTotal);
        }
        if($inputVal.val()==1 && !$(this).hasClass('reSty')){
            $(this).addClass('reSty');
        }
        totalMoney();
    });

    $all_sum.keyup(function () {
        var $count = 0,
            $priceTotalObj = $(this).parents('.goods_box').find('.sum_price'),
            $price = $(this).parents('.goods_box').find('.price').html(),  //单价
            $priceTotal = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,''));
        $count = $(this).val();
        $priceTotal = $count*parseInt($price.substring(1));
        $(this).attr('value',$count);
        $priceTotalObj.html('￥'+$priceTotal);
        totalMoney();
    })
    //======================================总计==========================================

    function totalMoney() {
        var total_money = 0;
        var total_count = 0;
        var calBtn = $('.calBtn a');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parents('.goods_box').find('.sum_price').html().substring(1));
                var num =  parseInt($(this).parents('.goods_box').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥'+total_money);
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if(total_money!=0 && total_count!=0){
            if(!calBtn.hasClass('btn_sty')){
                calBtn.addClass('btn_sty');
            }
        }else{
            if(calBtn.hasClass('btn_sty')){
                calBtn.removeClass('btn_sty');
            }
        }
    }


});


// 省市县
// var province=$("#province"),city=$("#city"),town=$("#town");
// for(var i=0;i<provinceList.length;i++){
//     addEle(province,provinceList[i].name);
// }
// function addEle(ele,value){
//     var optionStr="";
//     optionStr="<option value="+value+">"+value+"</option>";
//     ele.append(optionStr);
// }
// function removeEle(ele){
//     ele.find("option").remove();
//     var optionStar="<option value="+"请选择"+">"+"请选择"+"</option>";
//     ele.append(optionStar);
// }
// var provinceText,cityText,cityItem;
// province.on("change",function(){
//     provinceText=$(this).val();
//     $.each(provinceList,function(i,item){
//         if(provinceText == item.name){
//             cityItem=i;
//             return cityItem
//         }
//     });
//     removeEle(city);
//     removeEle(town);
//     $.each(provinceList[cityItem].cityList,function(i,item){
//         addEle(city,item.name)
//     })
// });
// city.on("change",function(){
//     cityText=$(this).val();
//     removeEle(town);
//     $.each(provinceList,function(i,item){
//         if(provinceText == item.name){
//             cityItem=i;
//             return cityItem
//         }
//     });
//     $.each(provinceList[cityItem].cityList,function(i,item){
//         if(cityText == item.name){
//             for(var n=0;n<item.areaList.length;n++){
//                 addEle(town,item.areaList[n])
//             }
//         }
//     });
// });


// 二维码
$(function () {
    // 打开
    $(".list_ny_code").click(function(){
        $(".show_code").css("display","block");
        $("html,body").addClass("noscroll");
    })
    // 关闭
    $(".show_code .mask").click(function(){
        $(".show_code").css("display","none");
        $("html,body").removeClass("noscroll");
    })
})

// 上传图片
var _URL = window.URL || window.webkitURL;

function preview(file) {
    var prevDiv = document.getElementById('preview');
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function(evt) {
            prevDiv.innerHTML = '<img id="imgnode" src="' + evt.target.result + '" />';
            console.log(evt.target.result)
        }
        reader.readAsDataURL(file.files[0]);
    } else {
        prevDiv.innerHTML = '<div class="img" id="imgnode"  style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}
// 上传图片显示
$(function () {
    $(".up_dj .pz_show").click(function(){
        $(".up_pz").css("display","block");
    })
    $(".up_dj .pz_none").click(function(){
        $(".up_pz").css("display","none");
    })
})


$(function () {
    //提交OK
    $(".buys_bnt").click(function () {

        if ($("#form1 input[name=name]").val() == "") {
            $("#form1 input[name=name]").next().html("请输入姓名");
            return false;
        } else {
            $("#form1 input[name=name]").next().html("");
        }

        if ($("#form1 input[name=mobile]").val() == "") {
            $("#form1 input[name=mobile]").next().html("请输入手机号");
            return false;
        } else {
            var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if (!reg.test($("#form1 input[name=mobile]").val())) {
                $("#form1 input[name=mobile]").next().html("手机号格式错误");
                return false;
            } else {
                $("#form1 input[name=mobile]").next().html("");
            }
        }

        if ($("#form1 input[name=password]").val() == "") {
            $("#form1 input[name=password]").next().html("请输入新密码");
            return false;
        } else {
            $("#form1 input[name=password]").next().html("");
        }

        if ($("#form1 input[name=passwords]").val() == "") {
            $("#form1 input[name=passwords]").next().html("再次输入新密码");
            return false;
        } else {
            if ($("#form1 input[name=passwords]").val() != $("#form1 input[name=password]").val()) {
                $("#form1 input[name=passwords]").next().html("两次密码不一致");
                return false;
            }else {
                $("#form1 input[name=passwords]").next().html("");
            }
        }
    });
});