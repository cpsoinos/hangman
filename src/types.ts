import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type GameFormat = 'single_word' | 'phrase'

export interface Game {
  format: GameFormat
  id: string
}
export interface State {
  gameFormat: GameFormat
  id: string
}
