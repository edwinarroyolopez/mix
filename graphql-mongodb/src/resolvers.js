/* Se trabaja sobre el modelo de mongodb { Car }*/
export default {
  Query: {
    allCars: async (parent, args, { Car }) => {
       const cars = await Car.find();
       return cars.map( car => {
         car._id = car._id.toString() /* convierte el objeto _id de mongodb en String*/
         return car;
       })
    }
  },
  Mutation: {
    createCar: async (parent, args, { Car }) => {
      const car = await new Car(args).save();
      car._id = car._id.toString();
      return car;
    }
  }
}
