<template>
  <div class="backdrop" @click.self='closeDetail'>
    <div class="modal">
      <h2>Memo Detail</h2>
      <label>
        <input placeholder="Title" v-model='memo.title'>
      </label>
      <label>
        <textarea placeholder="Content" v-model='memo.content'></textarea>
      </label>
      <button @click='editMemo'>Edit</button>
      <button @click='deleteMemo'>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoDetail',
  data () {
    const data = {
      memos: [],
      memo: {
        id: '',
        title: '',
        content: ''
      }
    }
    return data
  },
  mounted () {
    if (localStorage.getItem('memos-vuejs')) {
      this.memos = JSON.parse(localStorage.getItem('memos-vuejs'))
      this.memo = this.memos.find((memo) => memo.id == this.$route.params.id)
    }
  },
  methods: {
    editMemo () {
      this.memo.title = this.memo.title.trim()
      this.memo.content = this.memo.content.trim()
      if (!this.memo.title) {
        alert('Title is required.')
        return  this.$router.push(`/memos/${this.memo.id}`)
      }
      this.saveMemo(this.memos)
    },
    deleteMemo () {
      this.memos = this.memos.filter(memo => memo.id != this.memo.id)
      this.saveMemo(this.memos)
    },
    closeDetail () {
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
button {
  margin: 15px;
}
</style>
