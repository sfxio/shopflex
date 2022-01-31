<template>
  <AForm :model="form" v-bind="$attrs">
    <AFormItem>
      <AInput v-model:value="form.username" placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25);" />
        </template>
      </AInput>
    </AFormItem>
    <AFormItem>
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
        <AButton style="width: 100%;" type="primary" html-type="submit">
          Log in
        </AButton>
      </slot>
    </AFormItem>
  </AForm>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, UnwrapRef } from 'vue'
interface FormState {
  username: string
  password: string
}

export default defineComponent({
  name: 'SHLoginForm',
  setup(_, { expose }) {
    const formData: UnwrapRef<FormState> = reactive({
      username: '',
      password: '',
    })

    expose({
      formData,
    })
    return {
      form: formData,
    }
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
})
</script>
