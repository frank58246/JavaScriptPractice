// 網頁初始化後要做的事情
function onLoad(){
  // $(function() {
  //   //初始階段要做的事...
  // });
  alert("Hello")
}

// 指定div加上css
function func1(){
  $("div").css("color", "red").width(100).text("Hello World");
}

// 篩選指定class的div
function fun2(){
  $("div.clsEditor").hide();
}

// 篩選指定id
function fun3(){
  $("#customId").css("color","blue");
}


// ajax
function getApi(url,callBack){
    $.ajax({
        url: url,
        method: 'GET',
        async: true,        
        statusCode:{
          200:function(data){      
            callBack(data)
          },
          404:function(){
            callBack(null)
          }
        }
    }); 
}