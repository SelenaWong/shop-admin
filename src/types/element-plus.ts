import { ElForm } from 'element-plus'
import type { FormItemRule } from 'element-plus/packages/components/form/src/form.type'

export type IElForm = InstanceType<typeof ElForm>
export type IFormRule = Record<string, FormItemRule[]>
