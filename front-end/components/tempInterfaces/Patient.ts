export interface Medicine {
  name: string;
  description: string;
  sideEffects: string[];
}

export interface Patient {
  name: string;
  sideEffects: string[];
  medicines: Medicine[];
}
