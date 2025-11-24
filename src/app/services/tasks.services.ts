import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Database, ref, onValue, push, set, remove } from '@angular/fire/database';
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root',
})
export class TasksServices {
  // Injection de la DB
  db = inject(Database);
  // Création d'un signal pour stocker les tasks et mettre à jour en temps réel
  tasks = signal<Task[]>([])

  // Initialisation de la liste des tasks
  constructor() {
    try {
      // Représente la collection "tasks" sur firebase
      const tasksRef = ref(this.db, 'tasks');
      // onValue est un écouteur d'événement, on donne la collection, on recoit une fonction de callback avec une image de la DB
      onValue(
          tasksRef,
          (snapshot) => {
            // On dit que data est soit un objet vide, soit un objet contenant les tasks de la DB
            const data = snapshot.val() || {};
            // créer un tableau avec les nouvelles tasks (on ajoute l'id)
            const tasks: Task[] = Object.entries(data).map(([id, value]) => ({
              id,
              ...(value as Omit<Task, 'id'>),
            }));
            // On mets à jour le signal avec les nouvelles tasks
            this.tasks.set(tasks);
          },
          (error) => {
            // Si une erreur est survenue, on affiche un message dans la console
            console.error('Erreur Firebase onValue : ', error);
          }
      );
    } catch (error) {
      console.error(error);
    }
  }
  // Ajouter une task
  async addTask(title: string) {
    try {
      // On créé la nouvelle task avec sont titre
      const newTask: Task = {title: title, completed: false, createdAt: Date.now()};
      // on refait une referénce à la collection "tasks"
      const tasksRef = ref(this.db, 'tasks');
      // on ajoute un nouvel objet dans la collection
      const newTaskRef = push(tasksRef); // On enregitre l'id dans la DB
      await set(newTaskRef, newTask); // On mets à jour le signal avec la nouvelle task
    } catch (error) {
      throw new Error(`Erreur lors de l'ajout : ${error}`);
    }
  }
  // Modifier une task
  async updateTask(task: Task) {
    try {
      // On met à jour la date de modification
      task.updatedAt = Date.now();
      // on refait une referénce à la collection "tasks"
      const taskRef = ref(this.db, `tasks/${task.id}`);
      // On met à jour la DB
      await set(taskRef, task);
    } catch (error) {
      throw new Error(`Erreur lors de la mise a jour : ${error}`);
    }
  }
  // Supprimer une task
  async deleteTask(task: Task) {
    try {
      // on refait une referénce à la collection "tasks" en précisant l'ID de la task
      const taskRef = ref(this.db, `tasks/${task.id}`);
      // On supprime l'objet de la DB
      await remove(taskRef)
    } catch (error) {
      throw new Error(`Erreur lors de la suppression : ${error}`);
    }
  }
}
