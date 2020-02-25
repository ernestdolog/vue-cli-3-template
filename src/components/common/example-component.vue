<template>
    <div>
        <h1>Current locale: {{ locale.toUpperCase() }}</h1>
        <br/>
        <h3>Choose locale:</h3>
        <ul>
          <li v-for="localeItem in localesList" @click="locale = localeItem">
            <a href="javascript:void(0)">{{ localeItem.toUpperCase() }}</a>
          </li>
        </ul>
        <br/>
        <label>Your locale is here: {{ $t('exampleComponent.exampleText') | toUpperCase }}</label>
    </div>

</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default{
        computed: {
            locale: {
                get () { return this.$store.state.locale.locale },
                set (value) {
                    let name = this.$route.name
                    this.SET_LOCALE(value)
                    this.STORE_TO_LOCAL_STORAGE()
                    this.$router.push({ name }).catch(err => {})
                }
            },
            ...mapState('locale', [ 'localesList' ])
        },
        methods: {
            ...mapMutations('locale', [ 'SET_LOCALE', 'STORE_TO_LOCAL_STORAGE' ])
        },
        name: 'example-component'
    }
</script>