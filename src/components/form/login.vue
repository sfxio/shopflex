<template>
  <AForm
    ref="formRef"
    :model="form"
    :rules="rules"
    v-bind="$attrs"
    @finish="handleFinish"
  >
    <AFormItem name="username">
      <AInput v-model:value="form.username" placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25);" />
        </template>
      </AInput>
    </AFormItem>
    <AFormItem name="password">
      <AInput
        v-model:value="form.password"
        autocomplete="none"
        type="password"
        placeholder="Password"
      >
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25);" />
        </template>
      </AInput>
    </AFormItem>
    <AFormItem>
      <slot name="submit" :formData="form">
        <AButton
          :loading="isLoading"
          style="width: 100%;"
          type="primary"
          html-type="submit"
        >
          Log in
        </AButton>
      </slot>
    </AFormItem>
  </AForm>
</template>

<script lang="ts">
import { AuthModel } from '@/api'
import { useLoading } from '@/hooks'
import { useUserStore } from '@/store'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, ref, UnwrapRef, toRaw } from 'vue'
interface FormState {
  username: string
  password: string
}

export default defineComponent({
  name: 'SHLoginForm',
  components: {
    UserOutlined,
    LockOutlined,
  },
  props: {
    onSubmit: {
      type: Function,
      default: undefined,
    },
  },
  setup(props, { expose, emit }) {
    const formData: UnwrapRef<FormState> = reactive({
      username: '',
      password: '',
    })
    const formRef = ref()
    const rules = {
      username: [
        {
          required: true,
          message: 'Please input username',
          trigger: 'blur',
        },
        {
          min: 3,
          trigger: 'blur',
          message: 'Username must be at least 3 characters',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur',
        },
        {
          min: 6,
          trigger: 'blur',
          message: 'Password must be at least 6 characters',
        },
      ],
    }

    const { run, isLoading } = useLoading()
    const userStore = useUserStore()

    // eslint-disable-next-line vue/no-setup-props-destructure
    let onSubmit = props.onSubmit
    if (onSubmit === undefined) {
      onSubmit = async ({ formData }) => {
        const [err, res] = await run(AuthModel.login({ ...formData }))
        if (err) {
          emit('onError', {
            form: formRef.value,
            err,
          })
        } else {
          window.localStorage.setItem('token', res)
          userStore.setUserByTokenAsync(res)

          emit('onSuccess', {
            form: formRef.value,
            data: res,
          })
        }
      }
    }

    const handleFinish = () => {
      formRef.value
        .validate()
        .then(() => {
          const res = {
            formData: toRaw(formData),
            form: formRef.value,
          }

          if (onSubmit !== null) {
            onSubmit(res)
          }
          emit('onSubmit', res)
        })
        .catch((err) => {
          emit('onError', {
            form: formRef.value,
            err,
          })
        })
      expose({
        formData,
      })
    }

    return {
      form: formData,
      formRef,
      rules,
      isLoading,
      handleFinish,
    }
  },
})
</script>
