
<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="cn">cn</option>
      </select>
      <p>{{ $t('text.hello') }}</p>
    </form>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

