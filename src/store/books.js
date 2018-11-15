export default{
    state: {
      books:[
        {
          id: 'dasd123e1ewq',
          title: 'Harry potter and philosophers stone',
          description: 'Первая глава первой книги о Гарри Поттере',
          imageId: 'wsdee312',
          parts: '7',
          level: ['B2', 'C1'],
          rating: '4',
          ratingsCount: '100',
          youtube_playlist_id: 'wewqe12'
        },
        {
          id: 'daas123e1ewq',
          title: 'Harry potter and philosophers stone',
          description: 'Вторая глава первой книги о Гарри Поттере',
          imageId: 'wsd22312',
          parts: '7',
          level: ['B1', 'B2'],
          rating: '2.5',
          ratingsCount: '50',
          youtube_playlist_id: 'wew1212'
        },
        {
          id: 'daas1ewe1ewq',
          title: 'Harry potter and philosophers stone',
          description: 'Третья глава первой книги о Гарри Поттере',
          imageId: 'wsd22312',
          parts: '7',
          level: ['A1', 'A2'],
          rating: '3',
          ratingsCount: '43',
          youtube_playlist_id: 'wew1212'
        }
      ]
    },
    mutations: {
      SET_BOOKS(state, payload) {
        state.books = payload
      }
    },
    getters: {
      getBooks: (state) => state.books
    }
  }