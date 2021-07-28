import admin from 'firebase-admin'
import serviceAccountJSON from './serviceAccountKey.json'
import {ServiceAccount} from 'firebase-admin/lib/credential'

const serviceAccount = serviceAccountJSON as ServiceAccount

export const database = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

