new Vue({
  el: "#app",
  data: {
    new_game: true,
    monster_life: 100,
    you_life: 100,
    attacks: [],
    monster_attack: 'Monster hits player for ',
    player_attack: 'Player hits monster for ',
  },
  methods: {
    play(type) {

      if(type == 'attack') {
        this.attack(1, 5);
      } else if (type == 'special-attack') {
        this.attack(6, 10);
      } else if(type == 'heal') {
        this.attack(11, 15);
      } else if(type == 'give-up') {
        this.attacks = [];
        this.monster_life = 100;
        this.you_life = 100;
      }
    },

    attack(min_value, max_value) {
      const monster_value = this.getRandomValue(min_value, max_value);
      const player_value = this.getRandomValue(min_value, max_value);

      this.monster_life = this.monster_life - monster_value;
      this.you_life = this.you_life - player_value;

      this.attacks.push(`${this.monster_attack} ${monster_value}`);
      this.attacks.push(`${this.player_attack} ${player_value}`);
    },

    getRandomValue(min_value, max_value) {
      return Math.floor((Math.random() * max_value) + min_value);
    }
  }
})
