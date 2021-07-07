import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { GameFormat } from '~/types'
export interface State {
  gameFormat: GameFormat
  guessedLetters: string[]
  id: string
  value: string
  word: string
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      id: '',
      gameFormat: 'single_word',
      word: '',
      value: '',
      guessedLetters: []
    }
  },
  actions: {
    createGame({ commit }, game) {
      commit('setGame', game)
    }
  },
  mutations: {
    setGame(state, game) {
      const { id, gameFormat, word } = game
      state.id = id
      state.gameFormat = gameFormat
      state.word = word
      state.value = ''
      state.guessedLetters = []
    }
  },
  getters: {

  }
})

export function useStore() {
  return baseUseStore(key)
}
