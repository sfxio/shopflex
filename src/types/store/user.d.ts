import { User } from '..'

export interface UserState {
  user: User | null
  token: string | undefined
}
