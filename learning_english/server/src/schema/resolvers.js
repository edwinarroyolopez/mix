
export default {
  Query:{
    User: async (parent, args, { User }) => {
      console.log(args);
      const users = await User.find();
      console.log(users);
      return users.filter( user => user.name===args.name)[0]
    },
    allUsers: async (parent, args, { User }) => {
      const users = await User.find();
      return users.map( user => {
        user._id = user._id.toString() /* Object to String */
        return user;
      });
    }
  },
  Mutation:{
    createUser: async (parent, args, { User }) => {
      const user = await new User(args.input).save();
      user._id = user._id.toString();
      return user;
    },
    Login: async (parent, args, { User }) => {
      console.log(args);
      const users = await User.find();
      console.log(users);
      return users.filter( user => (user.username===args.username && user.pass===args.pass))[0]
    }
  }
}
