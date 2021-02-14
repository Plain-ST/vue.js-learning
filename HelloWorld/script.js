// vueインスタンスの作成
new Vue({
  // elプロパティ(htmlのどの部分に対して変更を加えるのかを指定)
  el:'#app',
  // dataプロパティ
  data(){
      return{
          text:"hello world!"
      };
  }
})