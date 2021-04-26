import firebase from 'firebase/app'
import 'firebase/firestore'
import { User } from '../interfaces/user'
import { Feedback } from '../interfaces/feedback'
import { Project } from '../interfaces/project'
import { Category } from '../interfaces/category'

const firestore = firebase.firestore()

export async function createUser(uid: string, user: User) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...user }, { merge: true })
}

export async function sendFeedback(feedback: Feedback) {
  const { grade, ...rest } = feedback
  return await firestore
    .collection('feedback')
    .doc()
    .set({ grade: Number(grade), ...rest })
}

export async function createProject(project: Project) {
  return await firestore.collection('projects').doc().set(project)
}

export async function createCategory(category: Category) {
  return await firestore.collection('categories').doc().set(category)
}

export async function deleteCategory(category: string) {
  return await firestore.collection('categories').doc(category).delete()
}
