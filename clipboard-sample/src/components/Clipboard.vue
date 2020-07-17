<template>
  <div>
    <h2>State</h2>
    <ul>
      <li>clipboard-read: {{ state.clipboardRead }}</li>
      <li>clipboard-write: {{ state.clipboardWrite }}</li>
    </ul>
    <hr>

    <h2>Clipboard API Sample</h2>

    <h3 style="margin-bottom: 0;">Write Area</h3>
    <textarea cols="30" rows="10" v-model="text.write"></textarea>
    <br>

    <button @click="onCopyClicked">Copy</button>
    <h3 style="margin-bottom: 0;">Paste Area</h3>
    <button @click="onPasteClicked">Paste</button>
    <br>
    <textarea cols="30" rows="10" readonly v-model="text.paste"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Clipboard',
  data () {
    return {
      state: {
        clipboardRead: null,
        clipboardWrite: null,
      },
      text: {
        write: '',
        paste: ''
      }
    }
  },
  async created() {
    await this.updateClipboardPermissions()
  },
  methods: {
    async updateClipboardPermissions() {
      this.state.clipboardRead = (await navigator.permissions.query({name:'clipboard-read'})).state
      this.state.clipboardWrite = (await navigator.permissions.query({name:'clipboard-write'})).state
    },
    async onCopyClicked() {
      try {
        // Clipboardへの書き込み
        await navigator.clipboard.text.write(this.text.write)
      } catch (e) {
        console.error(e)
      } finally {
        await this.updateClipboardPermissions()
      }
    },
    async onPasteClicked() {
      try {
        // Clipboardからの読み込み
        this.text.paste = await navigator.clipboard.readText()
      } catch (e) {
        console.error(e)
      } finally {
        await this.updateClipboardPermissions()
      }
    }
  }
}
</script>
