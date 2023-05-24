const userRoles = ['default', 'pro'] as const;
export type UserRole = (typeof userRoles)[number];

export type User = {
  name: string,
  email: string,
  avatar?: string,
  password: string,
  type: UserRole,
}
