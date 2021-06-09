// 網頁初始化後要做的事情
function onload(){

  var  obj = getFunctionObject()
   $.each(obj,function(index,value){
      value()
   })
}

function getFunctionObject(){
  var obj = {

    // 指定div加上css
    func0: () => {
      $("div").css("color", "purple").width(100).text("Hello World");
    },   

    // 篩選指定class的div
    func1: () => {
      $("div.class1").hide();
    },

    // 指定ID
    func2: () => {
      $("#id1").css("color","blue");
    },

    // 插入元素
    func3: () => {
      $("<span>footer</span>").appendTo("body");
    },

    // 指定class連續改變值
    func4: () => {
      $(".class2").css("color", "red").css("border", "solid 1px blue").text("Test")
    },

    // 指定元素加入點擊事件
    func5: () => {
      $("#id2").click(function() { alert("Clicked!"); });
    },

    // 指定所有元素(p)，做指定的事情
    func6: () => {      
      $(".class3").each( function() {
         console.log(this.innerHTML) 
      })
    } 

  }

  return obj;
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