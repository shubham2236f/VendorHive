import conf from '../conf/conf.js'
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount) {
                //call method
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
           throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get() ;
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async loginWithGoogle() {
        try {
        // return this.account.createOAuth2Session(
        //     'google',
        //     'http://localhost:5173',
        //     'http://localhost:5173/auth'
        // );
        // return this.account.createOAuth2Session(
        //   'google',
        //   'http://192.168.1.6:5173',
        //   'http://192.168.1.6:5173/auth'
        // );
        return this.account.createOAuth2Session(
            "google",
            // "http://localhost:5173",
            // "http://localhost:5173/auth",
           "https://vendor-hive-d292.vercel.app/",
             "https://vendor-hive-d292.vercel.app/auth"
            
        );
        } catch (error) {
        console.log("ERROR WHILE DOING GOOGLE AUTH", error);
        }
    }
}

const authservice = new AuthService();

export default authservice