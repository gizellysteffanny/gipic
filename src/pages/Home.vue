<template>
   <div>
      <gp-header :hasSearch="true"/>

      <ul class="images">
         <li class="image" v-for="photo of filterPhotos" :key="photo.id">
            <gp-card :photo="photo" />
         </li>
      </ul>
   </div>
</template>

<script>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';

export default {

   components: {
    'gp-header': Header,
    'gp-card': Card
   },

  data() {
    return {
      photos: [],
      filter: ''
    }
  },

  computed: {
    filterPhotos() {

      if (this.filter) {
        let regex = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => regex.test(photo.title));
      }

      return this.photos;
    }
  },

  created() {
    const url = 'https://mocki.io/v1/6248119d-d8c3-49ab-95cd-8433ce067654';
    this.$http.get(url)
      .then(res => res.json())
      .then(data => this.photos = data, (err) => console.error(err));
  }
}
</script>

<style lang="scss">
.images {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
