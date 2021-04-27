import { firestore } from '../config/firebase-admin'

export async function getAllProjects() {
  try {
    const snapshot = await firestore
      .collection('projects')
      .where('isActive', '==', true)
      .limit(30)
      .get()

    const projects = []

    snapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() })
    })

    return { projects }
  } catch (error) {
    return { error }
  }
}

export async function findProjectById(id: string) {
  try {
    const project = await firestore.collection('projects').doc(id).get()
    return { project: project.data() }
  } catch (error) {
    return { error }
  }
}

export async function getUserProjects(uid: string) {
  try {
    const snapshot = await firestore
      .collection('projects')
      .where('userId', '==', uid)
      .where('isActive', '==', true)
      .get()

    const projects = []

    snapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() })
    })

    return { projects }
  } catch (error) {
    return { error }
  }
}

export async function getUserCategories(uid: string) {
  try {
    const snapshot = await firestore.collection('categories').where('userId', '==', uid).get()

    const categories = []

    snapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() })
    })

    return { categories }
  } catch (error) {
    return { error }
  }
}
