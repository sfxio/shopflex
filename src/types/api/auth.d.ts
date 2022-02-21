interface BaseForm {
  username: string
  password: string
}

export type LoginForm = BaseForm
export interface RegisterForm extends BaseForm {
  email: string
  phone: string
  firstName: string
  lastName: string
}
