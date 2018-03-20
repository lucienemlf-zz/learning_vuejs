export const textMixin = {
  data() {
    return {
        text: '',
    };
  },
  computed: {
    revertText() {
        return this.text.split("").reverse().join("");
    },
    countText() {
        return `${this.text} (${this.text.length})`;
    },
  }
};

