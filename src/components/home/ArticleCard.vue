<template>
  <div>
      <a-card hoverable style="margin: 12px 0">
          <img
                  slot="cover"
                  alt="example"
                  src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"
          />
          <a-card-meta title="Europe Street beat">
              <template slot="description">
                  www.instagram.com
              </template>
          </a-card-meta>
      </a-card>
  </div>
</template>

<script>
export default {
    name: "ArticleCard"
}
</script>

<style scoped>

</style>
