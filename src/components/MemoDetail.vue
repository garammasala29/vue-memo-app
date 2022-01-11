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
      <button @click='editMemo()'>Edit</button>
      <button @click='deleteMemo()'>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoDetail',
  data () {
    const data = {
      memos: [],
      memo: [],
      id: '',
      title: '',
      content: '',
    }
    return data
  },
  mounted () {
    if (localStorage.getItem('memos-vuejs')) {
      this.memos = JSON.parse(localStorage.getItem('memos-vuejs'))
      this.memo = this.memos.filter(memo => {
        return memo.id == this.$route.params.id
      })[0]
    }
  },
  methods: {
    editMemo () {
      this.title = this.title.trim()
      this.content = this.content.trim()
      this.saveMemo(this.memos)
    },
    deleteMemo () {
      const index = this.memos.findIndex(idx => idx.id == this.memo.id)
      this.memos.splice(index, 1)
      this.saveMemo(this.memos)
    },
    closeDetail () {
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
button {
  margin: 15px;
}
</style>
