import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
        return {
          message: 'Hello Vue!',
          emailList: [],
        }
    },
    methods: {
        randomGenEmail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    const result = response.data;
                    return result.response;
                });
        },
        counterGenEmail() {
            for (let i = 0; i < 10; i++) {
              const getEmail = this.randomGenEmail();
              console.log(getEmail);
              this.emailList.push(getEmail);
            }
          }
    },
    created () {
        this.counterGenEmail();
    }
}).mount('#app')