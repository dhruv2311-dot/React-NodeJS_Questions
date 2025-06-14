## **SECTION A: Core Database and Collection Operations**

1. Create a database named `students`.
```js
use students;
```
2. Create a collection named `courses`.
```js
db.createCollection("courses");
```
3. Insert a single document into the `students` collection.
```js
db.students.insertOne({
  name: "Dhruv Sonagra",
  age: 18,
  department: "Computer Science"
})

```
4. Insert multiple documents into the `students` collection.
```js
db.students.insertMany([
    { name: "parth", age: 20, department: "IT" },
  { name: "mayank", age: 22, department: "ECE" },
  { name: "Arjun", age: 23, department: "Mechanical" }
])
```
5. Find all documents in a collection.
```js
db.students.find();
```
6. Find a document with a specific field value.
```js
db.students.find({name:"Dhruv Sonagra"})
```
7. Find documents using `$and`, `$or`, `$not`, `$in`, `$nin`.
```js
db.students.find({$and:[{age:{$gt:18}},{department:"Computer Science"}]})
```
```js
db.students.find({$or:[{age:22},{department:"Mechanical"}]})
```
```js
db.students.find({age:{$not:{$gt:20}}})
```
```js
db.students.find({department:{$in:["Computer Science","IT"]}})
```
```js
db.students.find({department:{$nin:["Computer Science","IT"]}})
```
8. Find documents using comparison operators (`$gt`, `$lt`, `$gte`, `$lte`).
```js
db.students.find({age:{$gt:18}})
```
```js
db.students.find({age:{$lt:22}})
```
```js
db.students.find({age:{$gte:22}})
```
```js
db.students.find({age:{$lte:22}})
```
9. Use projection to fetch only selected fields.
```js
db.students.find({}, { name: 1, department: 1, _id: 0 })
```
10. Count the number of documents in a collection.
```js
db.students.countDocuments()
```
11. Sort documents based on a field.
```js
db.students.find().sort({age:1})
```
12. Limit and skip results in a query.
```js
db.students.find().limit(2)
```
```js
db.students.find().
```
```js
db.students.find().skip(1).limit(2)
```
13. Update one field in one document.
```js
db.students.updateOne({{name:"Dhruv Sonagra"},{$set:{age:20}}})
```
14. Update multiple documents using a condition.
```js
db.students.updateMany({department:"IT"},{$set:{age:22}})
```
15. Use `$inc`, `$set`, `$unset` in update queries.
```js
db.students.updateOne({name:"Dhruv Sonagra"},{$inc:{age:1}})
```
```js
db.students.updateONe({name:"Dhruv Sonagra"},{$set:{age:20}})
```
```js
db.students.updateOne({name:"Dhruv Sonagra"},{$unset:{age:1}})
```
16. Delete a single document.
```js
db.students.deleteOne({name:"Dhruv Sonagra"})
```
17. Delete multiple documents using a condition.
```js
db.students.deleteMany({department:"IT"})
```
18. Drop a collection.
```js
db.students.drop()
```
19. Drop a database.
```js
use students
db.dropDatabase()
```
20. List all collections in the current database.
```js
show collections
```
---

## **SECTION B: Data Modeling & Relationships**

21. Design a one-to-many relationship using embedded documents.
```js
db.students.insertOne({name:"Dhruv Sonagra",age:18,courses:[{name:"Maths",marks:90},{name:"Physics",marks:85}]})
```
22. Design a one-to-many relationship using references.
#### Students Collection
```js
db.students.insertOne({ _id: ObjectId("6617c4f3e7a1a1a1a1a1a1a1"),
  name: "Dhruv"})
```
#### Courses Collection
```js
db.courses.insertMany({{ userId: ObjectId("6617c4f3e7a1a1a1a1a1a1a1"), name:"Maths", marks: 90 },
  { userId: ObjectId("6617c4f3e7a1a1a1a1a1a1a1"), name:"Physics", marks: 85}})
```
23. Design a many-to-many relationship with references.
#### students collection
```js
db.students.insertOne({ _id: ObjectId("6617c4f3e7a1a1a1a1a1a1a1"),name:"Dhruv Sonagra",courses:[ObjectId("6617c4f3abc2222222222222"), ObjectId("6617c4f3abc3333333333333")]})
```
#### Courses Collection
```js
db.courses.insertMany([ { _id: ObjectId("6617c4f3abc2222222222222"), name: "Math" },
  { _id: ObjectId("6617c4f3abc3333333333333"), name: "Physics" }])
```
24. Choose between embedding and referencing with explanation.
- Embedding is that storing related data together in same document as an array
```js
db.students.insertOne({name:"Dhruv Sonagra",course:[{name:"Physics",marks:85},{name:"Maths",marks:90}]})
```
- Referencing is that storing related data in different document via id references
```js
//User Collection
db.students.insertOne({ _id: ObjectId("6617c4f3e7a1a1a1a1a1a1a1"),name:"Dhruv Sonagra"})
//Course Collection
db.courses.insertMany([ { _id: ObjectId("6617c4f3abc2222222222222"), name: "Math" }, { _id: ObjectId("6617c4f3abc3333333333333"), name: "Physics" }])
```
25. Use `.populate()` (optional, if using Mongoose) or `$lookup` for joins.
- $lookup is an aggregation stage that allows you to join documents from another collection, similar to a LEFT OUTER JOIN in SQL.
```js
{
  $lookup: {
    from: "otherCollection",        // the collection to join
    localField: "fieldInThisDoc",   // field in the current collection
    foreignField: "fieldInOtherDoc",// field in the other collection
    as: "joinedResult"              // name of the array field to store joined data
  }
}
```
```js
db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courses",
      foreignField: "_id",
      as: "courseInfo"
    }
  }
])
```
---

## **SECTION C: Aggregation Framework**

26. Use `$group` to count how many students are in each course.
- $group – Count how many students are in each course
```js
db.students.aggregate([
  {
    $group: {
      _id: "$course", // Group by course
      count: { $sum: 1 } // Count the number of students in each course
    }
  }
])
```
27. Use `$avg` to calculate the average marks of students.
- $avg – Calculate average marks of students
```js
db.students.aggregate([
  {
    $group: {
      _id: "$course", // Group by course
      averageMarks: { $avg: "$marks" } // Calculate average marks of students in each course
    }
  }
])
```
28. Use `$sum` to find total marks scored per course.
- $sum – Total marks scored per course
```js
db.students.aggregate([
  {
    $group: {
      _id: "$course", // Group by course
      totalMarks: { $sum: "$marks" } // Calculate total marks scored per course
    }
  }
])
```
29. Use `$match` to filter documents before aggregation.
- $match – Filter documents before aggregation
```js
db.students.aggregate([
  {
    $match: {
      marks: { $gt: 80 } // Filter students with marks greater than 80
    }
  },
  {
    $group: {
      _id: "$course", // Group by course
      count: { $sum: 1 } // Count the number of students in each course
    }
  }
])
```
30. Use `$sort` to sort results of an aggregation.
- $sort – Sort results of an aggregation
```js
db.students.aggregate([
  {
    $sort: {
      marks: -1 // Sort students by marks in descending order
    }
  }
])
```
31. Use `$project` to reshape documents in aggregation.
```js
db.students.aggregate([
  {$project:{
    _id:0,
    name:1,
  }}
])
```
32. Use `$limit` and `$skip` inside an aggregation pipeline.
```js
db.students.aggregate([
  {$limit:5},
  {$skip:3}
])
```
33. Use `$lookup` to perform a join between `students` and `courses`.
```js
db.students.aggregate([
  {$lookup:{
     from: "courses",          // target collection
      localField: "studentId",  // field in students
      foreignField: "studentId",// field in courses
      as: "enrolledCourses"
  }}
])
```
34. Use `$unwind` to flatten an array field during aggregation.
```js
db.students.aggragate([
  {$unwind:"$courses"}
])
```
---

## **SECTION D: Indexing and Performance**

35. Create a single-field index on `email`.
```js
db.students.createIndex({email:1})
```
36. Create a compound index on `course` and `age`.
```js
db.students.createIndex({courses:1,age:1})
```
37. Create a unique index on `rollNo`.
```js
db.students.createIndex({rollno:1},{unique:true}) //prevent duplicate
```
38. Create a descending index on `createdAt`.
```js
db.students.createIndex({createdAt:-1})
```
39. Create a partial index on `status = "active"`.
```js
db.students.createIndex(
  {status:1},
  {partialFilterExpression:{status:"active"}}
)
```
40. Create a TTL (Time To Live) index on `createdAt` that expires after 1 hour.
```js
db.students.createIndex(
  {createdAt:1},
  {expireAfterSecond:3600}
)
```
41. Use `.explain()` to analyze a query’s performance.
```js
db.stundets.createIndex({email:"email@gmail.com"}).explain("executionStats")
```
42. View all indexes in a collection.
```js
db.students.getIndexes()
```
43. Drop a specific index.
```js
db.students.dropIndex("email_1")
```
44. Drop all indexes in a collection.
```js
db.students.dropIndexex()
```
---

## **SECTION E: Advanced Queries and Features**

45. Use `$regex` to perform case-insensitive search on names.
46. Create a text index on `bio` field and perform text search.
47. Use `$text` with `$search`, `$language`, and `$caseSensitive`.
48. Perform geospatial queries with `$near`, `$geoWithin` (if lat/lng is used).
49. Use array operators like `$elemMatch`, `$size`, `$all`.
50. Query documents where an array contains a specific value.

---

## **SECTION F: Backup and Restore (Shell-Based)**

51. Use `mongodump` to back up a single database.
```js
mongodump --db myDatabase --out /backup/path/

```
52. Use `mongodump` to back up all databases.
```js
mongodump --out /backup/path/

```
53. Back up only one collection from a database.
```js
mongodump --db myDatabase --collection myCollection --out /backup/path/

```
54. Restore a database from its backup using `mongorestore`.
```js
mongorestore --db myDatabase /backup/path/myDatabase

```
55. Restore all databases from a full backup.
```js
mongorestore /backup/path/

```
56. Restore a single collection from backup.
```js
mongorestore --db myDatabase --collection myCollection /backup/path/myDatabase/myCollection.bson

```
---

## **SECTION G: Administrative and Shell Commands**

57. Show current database with `db`.
58. Switch to another database using `use`.
59. View MongoDB server status.
60. View stats of a specific collection using `db.collection.stats()`.
61. Check version of MongoDB server.
62. Check current user and roles (if auth is enabled).
63. Create a capped collection.
64. Convert an existing collection to capped.
65. Create a collection with schema validation.

---
