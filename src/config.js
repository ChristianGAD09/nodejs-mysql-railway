export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || 'localhost'
export const  DB_USERNAME = process.env.DB_USERNAME || 'root'  
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
export const DB_DATABASE = process.env.DB_DATABASE || 'usersdb'

export const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306