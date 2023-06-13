import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
        return {
          message: 'Hello Vue!',
          emailList: [],
        }
    },
    methods: {
        randomEmail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    console.log(result.response);
                    this.emailList.push(result.response)
                });
        },
        counterEmail() {
            for (let i = 0; i < 10; i++) {
              this.randomEmail();
            }
          }
    },
    created () {
        this.counterEmail();
    }
}).mount('#app')