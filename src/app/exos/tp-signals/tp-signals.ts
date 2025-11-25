import {Component, computed, signal, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";

// Model pour les taches
interface Task {
  id: number;
  title: string;
  priority: 1 | 2 | 3;
  completed: boolean;
}

@Component({
  selector: 'app-tp-signals',
  imports: [
    FormsModule
  ],
  templateUrl: './tp-signals.html',
  styleUrl: './tp-signals.css',
})
export class TpSignals {
  // Liste des taches
  tasks = signal<Task[]>([])
  // Nouvelle tache
  newTask = signal('')
  // Select option
  optionTask = signal<1 | 2 | 3>(2)
  // C'est triée ou pas
  isSorted = signal(false)
  // Afficher le Toast Daisy UI
  showToast = signal(false)
  toastMessage = signal('')
  toastType = signal('success')

  //Computed pour afficher le nombre de taches faites et non faites
  completedTasks = computed(() => this.tasks().filter(task => task.completed).length);
  unclearedTasks = computed(() => this.tasks().filter(task => !task.completed).length);

  // Computed pour trier les taches ou pas
  sortedList = computed(() => {
    if (!this.isSorted()) return this.tasks();
    return [...this.tasks()].sort((a, b) => a.priority - b.priority);
  });
  // fonction pour afficher les badges selon la priorité
  badgePriority(priority: 1 | 2 | 3) {
    switch (priority) {
      case 1: return `<span class="badge bg-error">Haute</span>`;
      case 2: return `<span class="badge bg-warning">Moyenne</span>`;
      case 3: return `<span class="badge bg-success">Basse</span>`;
    }
  }
  // fonction pour ajouter une tâche
  addTask() {
    if (!this.newTask()) return;
    if (!this.optionTask()) return;
    const createTask: Task = {id: Date.now(), title: this.newTask(), priority: this.optionTask(), completed: false};
    this.tasks.update(tasks => [...tasks, createTask]);
    this.newTask = signal('');
    this.optionTask = signal(2);
    console.log("Une tache à été ajoutée");
    this.showToastMessage("Tâche ajoutée avec succès", "success")
  }
  // fonction pour effacer une tâche
  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
    this.showToastMessage("Tâche supprimée avec succès", "error")
  }
  // fonction pour terminée la tâche
  toggleTask(task: Task) {
    this.tasks.update(tasks => tasks.map(t => t.id === task.id ? {...t, completed: !t.completed} : t));
    this.showToastMessage("Tâche modifiée avec succès", "info")
  }
  // fonction pour changer l'état du trie
  toggleSort() {
    this.isSorted.update(value => !value);
  }
  // fonction pour afficher le toast
  showToastMessage(message: string, type: 'success' | 'error' | 'info') {
    this.showToast.set(true);
    this.toastMessage.set(message);
    this.toastType.set(type);
    setTimeout(() => this.showToast.set(false), 3000);
  }
}
