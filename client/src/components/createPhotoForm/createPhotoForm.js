import { toastMixin } from '@/mixins/toastMixin';

export default {
  name: 'PhotoForm',
  mixins: [toastMixin],
  props: {},
  data() {
    return {
      photoCreateForm: {
        sectionId: 1,
      },
      photo: {},
      img: {},
    };
  },
  methods: {
    reqCreatePhoto() {
      const data = new FormData();
      data.append('img', this.photoCreateForm.img[0]);
      console.log(this.photoCreateForm.img[0]);
      this.$http({
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.token}`,
        },
        url: `http://localhost:5000/api/photo`,
        data: data,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
    },
  },
};
