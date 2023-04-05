# attribute和property的区别是什么?

attribute是dom元素在文档中作为html标签拥有的属性; property就是dom元素在js中作为对象拥有的属性。 所以:
functionGetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
      if (str.charCodeAt(i) >255) bytes++;
    }
    return bytes;
  }
alert(GetBytes("你好,as"));

对于html的标准属性来说，attribute和property是同步的，是会自动更新的， 但是对于自定义的属性来说，他们是不同步的，
