const fetchMany = (db: any) => {
  return (parent: any, args: any, context: any) => context[db].find({});
};

const fetchOne = (db: any) => {
  return (parent: any, args: any, context: any) =>
    context[db].findById(args._id);
};

const addOne = (db: any) => {
  return async (parent: any, args: any, context: any) => {
    const item = new context[db](args.item);
    return await item.save();
  };
};

const removeOne = (db: any) => {
  return async (parent: any, args: any, context: any) => {
    const item = await context[db].findById(args._id);
    if (item) {
      return await item.remove();
    }
  };
};

const updateOne = (db: any) => {
  return async (parent: any, args: any, context: any) => {
    return await context[db].findOneAndUpdate({ _id: args._id }, args.item);
  };
};

const API = {
  fetchMany,
  fetchOne,
  addOne,
  removeOne,
  updateOne,
};

export default API;
