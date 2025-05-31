import { 
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  Firestore,
  DocumentData
} from 'firebase/firestore'
import { db } from '@/lib/firebaseConfig' // Your Firebase config file

export class FirestoreService {
  private db: Firestore
  private static instance: FirestoreService

  private constructor() {
    this.db = db
  }

  public static getInstance(): FirestoreService {
    if (!FirestoreService.instance) {
      FirestoreService.instance = new FirestoreService()
    }
    return FirestoreService.instance
  }

  async create<T extends DocumentData>(
    collectionName: string,
    data: T,
    id?: string
  ): Promise<string> {
    const docRef = id 
      ? doc(this.db, collectionName, id)
      : doc(collection(this.db, collectionName))
    
    await setDoc(docRef, {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    
    return docRef.id
  }

  async getById<T extends DocumentData>(
    collectionName: string,
    id: string
  ): Promise<T | null> {
    const docRef = doc(this.db, collectionName, id)
    const docSnap = await getDoc(docRef)
    
    if (!docSnap.exists()) {
      return null
    }
    
    return { id: docSnap.id, ...docSnap.data() } as T
  }

  async getByField<T extends DocumentData>(
    collectionName: string,
    field: string,
    value: any
  ): Promise<T[]> {
    const q = query(
      collection(this.db, collectionName),
      where(field, '==', value)
    )
    
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as T[]
  }
} 