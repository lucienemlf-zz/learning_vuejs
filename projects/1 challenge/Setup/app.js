new Vue({
  el: "#app",
  data: {
    new_game: true,
    monster_life: 100,
    you_life: 100,
  },
  methods: {
    monster_attack() {
      const msg = "Monster hits player for",
    },
    player_attack() {
      const msg = "Player hits monster for",
    },
    attack() {
      const max_value = 5;
      const min_value = 1;
      this.monster_attack = this.monster_attack - getRandomValue(min_value, max_value);
      this.you_life = this.you_life - getRandomValue(min_value, max_value);
    },
    special_attack() {
      const max_value = 10;
      const min_value = 6;
      this.monster_attack = this.monster_attack - getRandomValue(min_value, max_value);
      this.you_life = this.you_life - getRandomValue(min_value, max_value);
    },
    heal() {
      const max_value = 15;
      const min_value = 11;
      this.monster_attack = this.monster_attack - getRandomValue(min_value, max_value);
      this.you_life = this.you_life - getRandomValue(min_value, max_value);
    },
    getRandomValue(min_value, max_value) {
      return Math.floor((Math.random() * max_value) + min_value);
    }
  }
})
