import { toastMixin } from "@/mixins/toastMixin";

export default {
  name: "PhotoForm",
  mixins: [toastMixin],
  props: {},
  data() {
    return {
      photoCreateForm: {
        sectionId: 1,
      },
    };
  },
  methods: {
    reqAddPhoto(img, id) {
      const data = new FormData();
      data.append("img", img);

      this.$http({
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        url: `http://localhost:5000/api/article/photo/${id}`,
        data: data,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      });
    },
  },
};
