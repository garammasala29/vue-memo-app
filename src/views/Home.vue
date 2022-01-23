<template>
  <header>
    <h1>Memo app</h1>
  </header>
  <article>
    <table>
      <tr v-for='memo in memos' :key='memo.id'>
        <router-link :to='`/memos/${memo.id}`'>
          <td>{{ memo.title }}</td>
        </router-link>
      </tr>
    </table>
    <router-link to='/memos/new'>
      <button>＋</button>
    </router-link>
  </article>
  <footer>
    <p class='footer-text'>&copy;garammasala 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      memos: [],
    }
  },
  mounted () {
    if (localStorage.getItem('memos-vuejs')) {
      this.memos = JSON.parse(localStorage.getItem('memos-vuejs'))
    }
  }
}
</script>

<style>
</style>
