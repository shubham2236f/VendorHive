
import conf from '../conf/conf.js'
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(Name,Number,Occupation,Skills,About,Location,profileimgId,userId,Visit){
            try {
               return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    ID.unique(),
                    {
                        Name,
                        Number,
                        Occupation,
                        Skills,
                        About,
                        Location,
                        Visit,
                        profileimgId,
                        userId
                        
                    }
                )
            } catch (error) {
                console.log(error);
            }
    }

    async createReview(Id,userName,Rating,Date,comment,vendorId){
        try {
           return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_2,
                ID.unique(),
                {
                    Id,
                    userName,
                    Rating,
                    Date,
                    comment,
                    vendorId
                }
            )
        } catch (error) {
            console.log(error);
        }
}

async createFeedback(Name,Email,Feedback){
    try {
       return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId_3,
            ID.unique(),
            {
                Name,
                Email,
                Feedback
            }
        )
    } catch (error) {
        console.log(error);
    }
}

async createRequest(Name,Number,Location,Description,userId){
    try {
       return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId_4,
            ID.unique(),
            {
                Name,
                Number,
                Location,
                Description,
                userId
            }
        )
    } catch (error) {
        console.log(error);
    }
}


    async updatePost(slug,Name,Number,Occupation,Skills,About,Location,profileimgId,userId,Visit){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    Name,
                    Number,
                        Occupation,
                        Skills,
                        About,
                        Location,
                        Visit,
                        profileimgId,
                        userId
                }
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug   
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(userId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId   
            )
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPosts(queries = []){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries 
            )
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getReview(queries = []){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_2,
                queries
            )
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getRequest(queries = []){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_4,
                queries
            )
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file   
            )
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId  
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(profileimgId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            profileimgId
        )
    }
}

const service = new Service();

export default service