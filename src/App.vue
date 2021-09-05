<template>
  <div id="app">
    <gp-header />

    <ul class="images">
      <li class="image" v-for="photo of filterPhotos">
        <img :src="photo.preview" :alt="photo.title">

        <div class="footer">
          <p :title="photo.title">{{ photo.title }}</p>
          <button>
            <img src="./assets/images/download.svg" alt="Download photo">
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {

  components: {
    "gp-header": Header
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

html, body, #app {
  height: 100;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #080D2B;
  color: #fff;
  max-width: 1024px;
  margin: 40px auto;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}

.images {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 96px;

  .image {
    flex: 0 0 calc(220px - 16px);
    height: 220px;
    background-color: #232441;

    &:not(:last-child) {
      margin-right: 16px;
    }

    img {
      max-width: 100%;
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        text-overflow: ellipsis;
        overflow: hidden;
        width: 16ch;
        white-space: nowrap;
      }

      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>
