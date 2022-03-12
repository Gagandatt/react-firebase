import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {collection, getDocs,addDoc,updateDoc,deleteDoc ,doc} from 'firebase/firestore'
import { async } from "@firebase/util";
function App() {
	const [name,setName] = useState("")
	const [pass,setPass] = useState(0)
	const [users, setUsers] = useState([]);

	const usersCollectionRef = collection(db,"users")

	const createUser = async()=>{
		await addDoc(usersCollectionRef,{Name:name,Password:pass})
	}

	const updateUser = async(id,Password)=>{
		const userDoc = doc(db,"users",id)
		const newField = {Password:Password+1}
		await updateDoc(userDoc,newField)
	}

	const removeUser = async(id)=>{
		const userDoc = doc(db,"users",id)
		await deleteDoc(userDoc)
	}

	useEffect(()=>{
		const getUsers =async()=>{
			const data = await getDocs(usersCollectionRef)
			setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
		}
		getUsers()
	},[])

	return (
		<div className="App">
			<input type="text" placeholder="Name.." onChange={(e)=>setName(e.target.value)}/>
			<input type="number" placeholder="Pass.." onChange={(e)=>setPass(e.target.value)}/>

			<button onClick={createUser}>Add User</button>
			{
				users.map((user)=>{
					return (
						<div key={user.id}>
							{" "}
							<h1>Name:{user.Name}</h1>
							<h1>Pass:{user.Password}</h1>
							<button onClick={()=>{updateUser(user.id,user.Password)}}>Change</button>
							<button onClick={()=>{removeUser(user.id)}}>Remove</button>
						</div>
					);
				})
			}
		</div>
	);
}

export default App;
