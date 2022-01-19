<template>
  <div class="backdrop" @click.self='closeAddForm'>
    <div class="modal">
      <h2>Memo Add</h2>
        <label>
          <input type='text' placeholder="Title" v-model='title'>
        </label>
        <label>
          <textarea placeholder="Content" v-model='content'></textarea>
        </label>
        <button @click='addMemo'>Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoAddForm',
  data () {
    const data = {
      memos: [],
      id: '',
      title: '',
      content: '',
    }
    return data
  },
  mounted () {
    if (localStorage.getItem('memos-vuejs')) {
      this.memos = JSON.parse(localStorage.getItem('memos-vuejs'))
    }
  },
  methods: {
    addMemo () {
      this.title = this.title.trim()
      this.content = this.content.trim()
      if (!this.title) {
        return  this.$router.push('/')
      }
      const maxId = Math.max(...this.memos.map(memo => memo.id), 0)
      this.memos.push({
        id: maxId + 1,
        title: this.title,
        content: this.content
      })
      this.saveMemo(this.memos)
    },
    closeAddForm () {
      this.$emit('close')
      this.$router.push('/')
    },
    saveMemo (memos) {
      localStorage.setItem('memos-vuejs', JSON.stringify(memos))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
