<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro','メイリオ','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック','Yu Gothic','ＭＳＰゴシック','MS PGothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EBECF0;
  margin: 0 auto;
  letter-spacing: -0.2px;
  border-radius: 10px;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 34px;
}

h2 {
  font-size: 30px;
}

div, p {
  color: #BABECC;
  text-shadow: 1px 1px 1px #fff;
}

article {
  line-height: 2.0;
}

header {
  padding: 20px;
}

footer {
  width: 100%;
  padding: 10px;
}

table {
  width: 60%;
  margin: auto;
}

table tr{
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  box-shadow:  6px 6px 11px #c8c9cc,
              -6px -6px 11px #ffffff;
}

table td, :visited, :link {
  padding: 16px 0;
  color: #BABECC;
  font-weight: bold;
  text-shadow: 1px 1px 1px #fff;
}

button {
  color: #b3b3b3;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 14px;
  text-shadow: 1px 1px 1px #fff;
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #d4d4d8, #fbfdff);
  box-shadow:  4px 4px 8px #c8c9cc,
              -4px -4px 8px #ffffff;
}

input {
  color: #494949;
  outline: none;
  width: 100%;
  font-size: 20px;
  padding: 12px;
  margin-top: 10px;
  text-shadow: 1px 1px 1px #fff;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #d4d4d8, #fbfdff);
  box-shadow:  4px 4px 8px #c8c9cc,
              -4px -4px 8px #ffffff;
}

textarea {
  color: #494949;
  outline: none;
  resize: none;
  width: 100%;
  height: 80px;
  font-size: 14px;
  padding: 12px;
  margin-top: 10px;
  text-shadow: 1px 1px 1px #fff;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #d4d4d8, #fbfdff);
  box-shadow:  4px 4px 8px #c8c9cc,
              -4px -4px 8px #ffffff;
}

::placeholder {
  color: #BABECC;
}

.modal {
  width: 60%;
  padding: 50px;
  margin: 100px auto;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 17px #b3b3b3,
              inset -5px -5px 17px #ffffff;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

label {
  display: block;
  text-align: center;
  width: 100%;
}
</style>
