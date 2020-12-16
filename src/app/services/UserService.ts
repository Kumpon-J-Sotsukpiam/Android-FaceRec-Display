import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type CreateUserRequest = { displayName: string, password: string, email: string, role: string }
export type UpdateUserRequest = { iud: string } & CreateUserRequest

@Injectable({
    providedIn: "root"
})

export class UserService {
    private baseUrl = 'http://localhost:3000/users'
    constructor(
        private http: HttpClient
    ) { }
    get user$(): Observable<any[]> {
        return this.http.get<{ users: any[] }>(`${this.baseUrl}`).pipe(
            map(result => {
                return result.users
            })
        )
    }
    // public get a_user$(uid:string):Observable<any>{
    //     return this.http.get<{users:any[]}>(`${this.baseUrl}/${uid}`).pipe()
    // }
    public deleteUserByID(uid:string){
        return this.http.delete(`${this.baseUrl}/${uid}`).pipe()
    }
    public getUserByUID(uid:string){
        return this.http.get(`${this.baseUrl}/${uid}`).pipe()
    }
    public create(displayName, email, password, role) {
        return this.http.post(`${this.baseUrl}`, { displayName, email, password, role })
    }
}