import { TaskDuration } from "./Task-duration"; 

export class HouseholdTask {
 constructor(
 public id : number,
 public name: string,
 public description: string,
 public duration: TaskDuration) {}
}
