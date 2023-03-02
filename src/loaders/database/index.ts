// import mongoose from 'mongoose';

// mongoose.set('debug', true);
// const databaseLoader = async () => new Promise<any>((resolve, reject) => {
//   mongoose.connect(String(process.env.MONGO_URI), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//     .then(db => {
//       console.log('Database connection established');
//       resolve(db);
//     })
//     .catch(reject);
// });

// export { databaseLoader };
import { Express } from "express";
const databaseLoader = async () => new Promise<any>((resolve, reject) => {
  let a =true 
  if( a=== true) {
    resolve(true)
    console.log("")
  } else {
    reject(false)
  }
});

export { databaseLoader };
