// const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1/shop";

// mongoose.connect(uri);

// // we need to create a schema

// const booksSchema = new mongoose.Schema ({
//     _id: Int32,
//     title: String,
//     isbn: String,
//     pageCount: Int32,
//     publishedDate: Date,
//     thumbnailUrl: String,
//     shortDescription: String,
//     longDescription: String,
//     status:String,
//     authors: Array,
//     categories: Array,
//     author: Array
// });

// // we need to create a model
// const Books = new mongoose.model(name: 'Book', booksSchema);

// const main = async () : Promise<void> => {
//     try{
//         const data = await Books.find({_id:3});
//         catch(error){
//             console.log(error);
//         }finally{
//             mongoose.connection.close()
//         }
//     };
// }
// main();


// const mongoose = require("mongoose");

// // const uri = "mongodb://127.0.0.1/shop";
// const uri = "mongodb+srv://sanisourin1999:Sourin17@cluster0.pjkkacj.mongodb.net/shop?retryWrites=true&w=majority"

// mongoose.connect(uri);

// // Define the schema
// const booksSchema = new mongoose.Schema({
//     _id: Number, // Corrected to Number instead of Int32
//     title: String,
//     isbn: String,
//     pageCount: Number, // Corrected to Number instead of Int32
//     publishedDate: Date,
//     thumbnailUrl: String,
//     shortDescription: String,
//     longDescription: String,
//     status: String,
//     authors: [String], // Corrected to array of strings
//     categories: [String], // Corrected to array of strings
//     author: [String] // Corrected to array of strings
// });

// // Create the model
// const Books = mongoose.model('Book', booksSchema);
// // 2nd step while inserting documents
// const data2 = {
//     _id: 7778,
//     title: 'Super Sayian',
//     isbn: '1617290084',
//     pageCount: 0,
//     publishedDate: '2024-06-03T07:00:00.000Z',
//     thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg',
//     status: 'PUBLISH',
//     authors: [ 'Gojko Adzic' ],
//     categories: [ 'Software Engineering' ]
// };
// const main = async () => {
//     try {
//         // await Books.insertMany(data2);
//         // const updateQuery = 
//         await Books.Delete({_id:7778});
//         // const data = await Books.find({ _id: 7778 });
//         // console.log(data);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         mongoose.connection.close();
//     }
// };

// main();

const mongoose = require("mongoose");

const uri = "mongodb+srv://sanisourin1999:Sourin17@cluster0.pjkkacj.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(uri);

const booksSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
    author: [String]
});

const Books = mongoose.model('Book', booksSchema);

const main = async () => {
    try {
        await Books.deleteOne({ _id: 7778 }); // Delete document with _id 7778
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

main();

