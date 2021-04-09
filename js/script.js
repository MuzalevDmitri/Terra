
document.getElementById('select').addEventListener('change', function () {
    let style = this.value == "one" ? 'block' : 'none';
    document.getElementById('hidden_div1').style.display = style;

    let style = this.value == "two" ? 'block' : 'none';
    document.getElementById('hidden_div2').style.display = style;

    let style = this.value == "three" ? 'block' : 'none';
    document.getElementById('hidden_div3').style.display = style;
});