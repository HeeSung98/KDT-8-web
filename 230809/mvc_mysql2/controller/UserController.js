import * as UserModel from '../model/UserModel.js'

export const index = (req, res) => {
  res.render('index')
}

export const signup = (req, res) => {
  res.render('signup')
}

export const signupPost = async (req, res) => {
  try {
    const result = await UserModel.signup(req.body)
    res.send({ result: true })
  } catch (err) {
    console.log(err)
    res.send({ result: false })
  }
}

export const loginPost = async (req, res) => {
  try {
    const result = await UserModel.login(req.body)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
