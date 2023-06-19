import {db} from './firebase'
import {collection, addDoc,} from 'firebase/firestore'

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
       name:name,
       number:number,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }