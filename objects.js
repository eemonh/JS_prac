const person = {
    name: '33mon'
};
console.log(person.name);

person.favoriteFood = 'pizza';// update objects dynamically
console.log(person);

person['favoriteIceCream'] = 'chocolate';// update objects dynamically
console.log(person);

delete person.favoriteIceCream;// delete objects dynamically
console.log(person);

person.eat = function(){// add method to object dynamically
    console.log('yum yum');
}
person.eat();