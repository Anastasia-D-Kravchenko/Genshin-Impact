var i = 0;
$('.all').on('click', '.pluse', function () {
    var id=$('.all .cli').index(this);
    $(".abc").hide();
    $(".abc").eq(id+i).css("display", "flex");
    $(".cli").attr('disabled', false);
    $(".pluse").addClass("plus");
    $(".mines").addClass("mine");
    if(i > -1){
    $(".mines").removeClass("nnt");
    }
    if(i < 12){
    i += 1;}else if(i = 12){
        i += 1;
        $(".pluse").addClass("nnt");
        $(".pluse").attr('disabled', true);
        $(".pluse").removeClass("plus");
    }
});
$('.all').on('click', '.mines', function () {
    var id=$('.all .cli').index(this);
    $(".pluse").removeClass("nnt");
    $(".pluse").attr('disabled', false);
    $(".abc").hide();
    $(".pluse").addClass("plus");
    $(".mines").addClass("mine");
    $(".abc").eq(id+(i - 1)).css("display", "flex");
    if(i < 2){
        $(".mines").addClass("nnt");
        $(".mines").attr('disabled', true);
        $(".mines").removeClass("mine");
    }
    if(i > 1){
        i = i-1;
    }else if (i = 1){
        i = 0
    }
});
var a = 0;
$('.all').on('click', '.pluse1', function () {
    var id=$('.all .kli').index(this);
    $(".abc1").hide();
    $(".abc1").eq(id+a).css("display", "flex");
    $(".kli").attr('disabled', false);
    $(".pluse1").addClass("plus1");
    $(".mines1").addClass("mine1");
    if(a > -1){
    $(".mines1").removeClass("nnt");
    }
    if(a < 3){
        a += 1;
    }else if(a = 3){
        a += 1;
        $(".pluse1").addClass("nnt");
        $(".pluse1").attr('disabled', true);
        $(".pluse1").removeClass("plus1");
    }
});
$('.all').on('click', '.mines1', function () {
    var id=$('.all .kli').index(this);
    $(".abc1").hide();
    $(".abc1").eq(id+(a - 1)).css("display", "flex");
    $(".pluse1").removeClass("nnt");
    $(".pluse1").attr('disabled', false);
    $(".pluse1").addClass("plus1");
    $(".mines1").addClass("mine1");
    if(a < 2){
        $(".mines1").addClass("nnt");
        $(".mines1").attr('disabled', true);
        $(".mines1").removeClass("mine1");
    }
    if(a > 0){
        a = a-1;}
});