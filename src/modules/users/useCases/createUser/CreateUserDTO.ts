export interface CreateUserDTO {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

export interface CreateUserResponseDTO {
  id: string | number
  email: string
  role: string
}
