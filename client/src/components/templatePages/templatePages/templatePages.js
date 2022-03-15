import { mapGetters } from "vuex";
import { toastMixin } from "@/mixins/toastMixin";

export default {
  name: "TemplatePages",
  props: {
    idSection: Number,
    nameSection: String,
  },
  mixins: [toastMixin],
  data() {
    return {
      articles: [],
    };
  },
  created() {
    // if (this.USER.id) {
    this.reqGetAllArticles();
    // }
  },
  watch: {
    USER: function () {
      this.reqGetAllArticles();
    },
  },
  computed: {
    ...mapGetters(["USER"]),
  },
  methods: {
    reqGetAllArticles() {
      this.$http({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `http://localhost:5000/api/article/all/${this.idSection}`,
      }).then((res) => {
        if (res.status === 200) {
          const modArticles = res.data;
          modArticles.forEach(() => {
            // const favouriteStatus = this.inFavourite.find(
            //   ({ articleId }) => item.id === articleId
            // );
            // item.inFavourite = !!favouriteStatus;
          });
          this.articles = modArticles;
        }
      });
    },

    getPhoto(url) {
      return `http://localhost:5000/${url}`;
    },
  },
};
