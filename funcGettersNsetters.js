// enhance how we interact with object properties
// get and set are methods that allow us to access and modify object properties in a controlled way

const course = {
    name: 'JavaScript',
    duraton: '3 hours',
    details(){ // effectively encapsulation and is read only
        return `${this.name} is ${this.duraton}`;
    }
};

console.log(course.details());
console.log(course.name);
console.log(course.duraton);

const courss = {
        name: 'JavaScript',
        duraton: '3 hours',
        get details(){
            return `${this.name} is ${this.duraton}`;
        },
        set details(value){
            let parts = value.split(' is ');
            this.name = parts[0];
            this.duration = parts[1];
        }
 };

 console.log(courss.details);
 courss.details = 'JavaScript Pro is 10 hours';
 console.log(courss.details);