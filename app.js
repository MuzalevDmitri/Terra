const Counter = {
    data() {
      return {
        selected: ""		

      }
    }
  }
  
  Vue.createApp(Counter).mount('#counter')



  document.getElementById('select').addEventListener('change', function () {
    var style = this.value == "true" ? 'block' : 'none';
    document.getElementById('show').style.display = style;

    var style = this.value == "falshe" ? 'block' : 'none';
    document.getElementById('show').style.display = style;

   
});