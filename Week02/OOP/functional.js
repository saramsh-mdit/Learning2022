const Car = (name, model) => {
  return {
    name: name,
      model: model,
      displayName() {
        console.log(`${this.name} ${this.model}`)
    }
  };
};

// {
//         name,
//         model,
// }

const car02 = Car('Toyota', 'Hilux');
car02.displayName();
