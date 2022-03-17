//TODO

export default {
  name: 'PhotoPage',
  components: {},
  props: {},
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.reqGetAllPhotos();
  },
  methods: {
    reqGetAllPhotos() {
      this.$http({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        url: `http://localhost:5000/api/photo`,
      }).then((res) => {
        if (res.status === 200) {
          this.photos = res.data;
        }
      });
    },

    getPhoto(url) {
      return `http://localhost:5000/${url}`;
    },
  },
};
