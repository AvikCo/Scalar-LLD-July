const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)
const promise4 = Promise.reject(4)

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2])
  //console.log("one", group1);
  const group2 = await Promise.all([promise3, promise4])
  console.log("two", group2);
  return [group1, grou2]
}
// const tt = async ()=> {
//   const a =await Promise.all([promise3, promise4]);
//   console.log(a);
// }
// Promise.all([promise3, promise4]).then((d)=> console.log(d));
// console.log(tt());
 promiseAll().then(console.log).catch(console.log)