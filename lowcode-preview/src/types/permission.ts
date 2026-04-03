export interface UmsAdmin {
  id: number
  username: string
  password?: string
  icon?: string
  email?: string
  nickName?: string
  note?: string
  createTime: string
  loginTime?: string
  status: number
}

export interface UmsRole {
  id: number
  name: string
  description?: string
  adminCount: number
  createTime: string
  status: number
  sort: number
}

export interface UmsPermission {
  id: number
  pid: number
  name: string
  value: string
  icon: string
  type: number
  uri: string
  status: number
  createTime: string
  sort: number
}

export interface UmsMenu {
  id: number
  parentId: number
  name: string
  level: number
  sort: number
  title: string
  icon: string
  hidden: number
  createTime: string
}

export interface UmsResource {
  id: number
  categoryId: number
  name: string
  url: string
  description: string
  createTime: string
}

export interface UserQueryParam {
  pageNum?: number
  pageSize?: number
  username?: string
  status?: number
}

export interface RoleQueryParam {
  pageNum?: number
  pageSize?: number
  name?: string
  status?: number
}

export const USER_STATUS = {
  DISABLED: 0,
  ENABLED: 1,
} as const

export const ROLE_STATUS = {
  DISABLED: 0,
  ENABLED: 1,
} as const

export const PERMISSION_TYPE = {
  DIRECTORY: 0,
  MENU: 1,
  BUTTON: 2,
} as const

export const USER_STATUS_OPTIONS = [
  { label: '禁用', value: USER_STATUS.DISABLED },
  { label: '启用', value: USER_STATUS.ENABLED },
]

export const ROLE_STATUS_OPTIONS = [
  { label: '禁用', value: ROLE_STATUS.DISABLED },
  { label: '启用', value: ROLE_STATUS.ENABLED },
]

export const PERMISSION_TYPE_OPTIONS = [
  { label: '目录', value: PERMISSION_TYPE.DIRECTORY },
  { label: '菜单', value: PERMISSION_TYPE.MENU },
  { label: '按钮', value: PERMISSION_TYPE.BUTTON },
]
