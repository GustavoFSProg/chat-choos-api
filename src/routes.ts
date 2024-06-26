import Router, { Request, Response } from 'express'
import userController from './Controllers/userController'
import chatController from './Controllers/chatController'
import messageController from './Controllers/messageController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).json(`🧠 Api Template Running`)
})

//user
routes.get('/get-users', userController.getUsers)
routes.get('/get-one-user/:id', userController.getOneUser)
routes.get('/get-by-email/:email', userController.getByEmail)
routes.post('/login', userController.Login)
routes.post('/create-user', userController.createUser)
routes.put('/update-user/:id', userController.updateUser)
routes.delete('/delete-user/:id', userController.deleteUser)

// chat
routes.post('/create-chat', chatController.createChat)
routes.get('/get-chat', chatController.getUserChat)
routes.get('/get-all-chats', chatController.getAllChat)
routes.get('/get-all-user-chats/:id', chatController.getListUserChat)
routes.delete('/delete-all-chat', chatController.deleteAll)

// messages
routes.post('/create-message', messageController.createMessage)
routes.get('/get-messages/:ID', messageController.getMessages)

export default routes
