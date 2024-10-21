const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteCollectionId_2: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_2),
    appwriteCollectionId_3: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_3),
    appwriteCollectionId_4: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_4),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}
export default conf