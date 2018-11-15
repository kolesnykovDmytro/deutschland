<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-container fluid>
          <v-layout row>
            <v-flex>
              <v-text-field label="Search" v-model="searchTerm"></v-text-field>
            </v-flex>
            <v-flex>
              <v-select label="Level" :items="levels" v-model="level" multiple></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-for="book in filteredbooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout>
              <v-flex xs4 md3>
                <v-card-media src="https://images-na.ssl-images-amazon.com/images/I/510HA9H947L._SY445_.jpg" height="100px">
                </v-card-media>
                <div class="text-xs-center">
                  <v-btn flat color="white">
                    <v-icon left>visibility</v-icon> Youtube
                  </v-btn>
                </div>
              </v-flex>
              <v-flex xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{book.title}}</div>
                    <div class="">{{book.description}}</div>
                    <div>Уровень: {{getBookLevel(book.level)}}, {{book.parts}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                  <div class="ml-1">
                    <span>{{book.rating}}</span>
                    <span>({{book.ratingsCount}})</span>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" flat>Open</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
        searchTerm: null,
        level: null,
        levels: ['A1', 'A2', 'A3', 'A4']
      }
    },
    computed: {
      books(){
        return this.$store.getters.getBooks
      },
      filteredbooks(){
        let books = this.books
        if(this.searchTerm)
          books = books.filter(b => 
          b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0 || b.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)

          return books
      }
    },
    methods: {
      getBookLevel(level){
        return level.join('/')
      }
    }
  }
</script>

<style scoped>

</style>