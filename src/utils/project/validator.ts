export const vUsername = [
  {
    required: true,
    message: 'Please input your username',
    trigger: 'change',
  },
]

export const vPassword = [
  {
    required: true,
    message: 'Please input your password',
    trigger: 'change',
  },
  {
    min: 6,
    max: 32,
    message: 'Password must be at least 6 characters',
    trigger: 'blur',
  },
]
