export class AppointmentStack {
  constructor(storageKey = 'appointmentStack') {
    this.storageKey = storageKey;
    this.stack = this.loadFromStorage();

    // To avoid that using this method as a callback changes the definition of "this" for this method
    this.removeAt = this.removeAt.bind(this);
  }

  push(appointment) {
    // Adds new appointment to the stack
    this.stack.push(appointment);
    console.log(`Cita añadida: ${JSON.stringify(appointment)}`);
    this.saveToStorage();
  }

  getLastCreatedAppointment() {
    // Get the most recent created appointment
    if (this.stack.length === 0) {
      console.log("No hay citas en la pila");
      return null;
    }

    // Return the last item in the stack
    return this.stack[this.stack.length - 1];
  }

  getUpcommingAppointment() {
    // Get upcomming appointment based on the field fechaHora
    const sortedStack = this.getSortedStack()
    // Return the closest upcoming appointment
    return sortedStack[0];
  }

  getSortedStack() {
    // Get sorted stack
    if (this.stack.length === 0) {
      console.log("No hay citas en la pila");
      return null;
    }

    // Sort the stack by the "fechaHora" property
    const sortedStack = [...this.stack].sort((a, b) => new Date(a.schedule) - new Date(b.schedule));

    // Return the closest upcoming appointment
    return sortedStack;

  }

  removeAt(index) {
    // Removes the appointment with the specified index
    if (index < 0 || index >= this.stack.length) {
      console.log("Índice fuera de rango");
      return null;
    }

    const removedAppointment = this.stack.splice(index, 1)[0];
    console.log(`Cita eliminada: ${JSON.stringify(removedAppointment)}`);
    this.saveToStorage();
    return removedAppointment;
  }

  saveToStorage() {
    // Saves appointments to Local Storage
    localStorage.setItem(this.storageKey, JSON.stringify(this.stack))
  }

  loadFromStorage() {
    // Load appointments from Local Storage
    const savedStack = localStorage.getItem(this.storageKey);
    return savedStack ? JSON.parse(savedStack) : [];
  }
}
