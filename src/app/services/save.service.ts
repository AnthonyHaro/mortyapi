import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(private firestore: Firestore) {}

  async saveCharacter(character: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'personajes'), character);
      console.log('Personaje guardado con ID:', docRef.id);
    } catch (error) {
      console.error('Error al guardar el personaje:', error);
    }
  }
}
