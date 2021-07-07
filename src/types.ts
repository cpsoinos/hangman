import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export enum GameFormat {
  Phrase = 'phrase',
  SingleWord = 'single_word'
}

export interface Game {
  format: GameFormat
  id: string
}
export interface State {
  gameFormat: GameFormat
  id: string
}
