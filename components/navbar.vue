<template>
  <ul>
    <li v-for="({title,path},index) in links">
      <NuxtLink :to="path" :key="index">{{ title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Payment",
    path: "/payment"
  },
  {
    title: "Contact",
    path: "/contact"
  },
]
</script>
