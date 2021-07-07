import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { GameFormat } from '~/types'
export interface State {
  gameFormat: GameFormat
  guessedLetters: string[]
  guessesRemaining: number
  id: string
  value: string
  word: string
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: ({
    id: '',
    gameFormat: GameFormat.SingleWord,
    word: '',
    value: '',
    guessedLetters: [],
    guessesRemaining: 6
  }),

  actions: {
    createGame: ({ commit }, game) => {
      commit('setGame', game)
    },

    guessLetter: ({ commit, getters }, letter: string) => {
      commit('addGuessedLetter', letter)
      if (!getters.letterIsInWord(letter))
        commit('decrementGuessesRemaining')
    }
  },

  mutations: {
    setGame: (state, game) => {
      const { id, gameFormat, word } = game
      state.id = id
      state.gameFormat = gameFormat
      state.word = word
      state.value = ''
      state.guessedLetters = []
    },

    decrementGuessesRemaining: (state) => {
      state.guessesRemaining -= 1
    },

    addGuessedLetter: (state, letter) => {
      state.guessedLetters.push(letter)
    }
  },

  getters: {
    letterCount: (state) => {
      return state.word.replaceAll(' ', '').length
    },

    letters: (state) => {
      return state.word.split('')
    },

    uniqueLetters: (_state, getters) => {
      return [...new Set(getters.letters)]
    },

    words: (state) => {
      return state.word.split(' ')
    },

    isGuessed: state => (letter: string) => {
      return state.guessedLetters.includes(letter)
    },

    letterIsInWord: (_state, getters) => (letter: string) => {
      return getters.letters.includes(letter)
    },

    gameIsLost: (state) => {
      return state.guessesRemaining <= 0
    },

    gameIsWon: (state, getters) => {
      return getters.uniqueLetters.every((letter: string) => {
        return state.guessedLetters.includes(letter)
      })
    }
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
