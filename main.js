const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
    get appetizers() {
      return this._courses.appetizers;
    },
  
    set appetizers(appetizersIn) {
      if (typeof appetizersIn === 'string') {
        this._courses.appetizers = appetizersIn;
      }
      else {console.log('Error please type in a text format')
      }
    },
  
    get mains() {
      return this._courses.mains;
    },
  
    set mains(mainsIn) {
      if (typeof mainsIn === 'string') {
        this._courses.mains = mainsIn;
      }
      else {console.log('Error please type in a text format')
      }
    },
  
    get desserts() {
      return this._courses.desserts;
    },
  
    set desserts(dessertsIn) {
      if (typeof dessertsIn === 'string') {
        this._courses.desserts = dessertsIn;
      }
      else {console.log('Error please type in a text format')
      }
    },
  
    get courses() {
      return {
        appetizers: this.appetizers, 
        mains: this.mains, 
        desserts: this.desserts,
    }
  
    },
  
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
  
      return this._courses[courseName].push(dish);
    }, 
  
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
  
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
  
      const main = this.getRandomDishFromCourse('mains');
  
      const dessert = this.getRandomDishFromCourse('desserts');
  
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your Meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price of your meal is $${totalPrice}.`
    }
  
  }
  
  menu.addDishToCourse('appetizers', 'cesar salad', 5.50);
  menu.addDishToCourse('appetizers', 'tempura king prawns', 7.50);
  menu.addDishToCourse('appetizers', 'hot wings', 6.20);
  
  menu.addDishToCourse('mains', 'steak & fries', 15.50);
  menu.addDishToCourse('mains', 'beef brisket sandwich', 12.50);
  menu.addDishToCourse('mains', 'GG burger & fries', 12.50);
  
  menu.addDishToCourse('desserts', 'cheesecake', 7.00);
  menu.addDishToCourse('desserts', 'ice cream & strawberries', 5.00);
  menu.addDishToCourse('desserts', 'chocolate cake', 6.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  
  
  