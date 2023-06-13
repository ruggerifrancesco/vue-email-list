import axios from 'axios'
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
                    console.log(result.response)
                });
        }
    },
    created () {
        this.randomGenEmail ()
    }
}).mount('#app')