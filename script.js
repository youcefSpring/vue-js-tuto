new Vue({
    el: '#app', //el : elemnt
    data: {
        counte: 0
    },

    methods: {

        increment: function() {
            this.counte++
        },
        decrement: function() {
            this.counte--
        },
        addStep: function(step) {
            this.counte += step
        },
        test: function() {
            alert('test alert')
        },
        logName: function() {
            console.log('test input log')
        },
        even: function(a) {
            return a % 2 == 0 ? true : false;
        }

    },

    computed: {
        calcul: function() {
            return this.counte * 7
        }

    },
    watch: {

    }
})