//Error handling
// Error are objects in JS and when thrown they create exceptions that are caught by try and catch blocks
const courss = {
        name: 'JavaScript for Beginners',
        duraton: '3 hours',
        get details(){
            return `${this.name} is ${this.duraton}`;
        },
        set details(value){
            if(typeof value !== 'string'){
                throw new Error(`value, ${value} is not a string`);
            }

            let parts = value.split(' is ');
            this.name = parts[0];
            this.duration = parts[1];
        }
 };

try {
    courss.details = 100;
} catch (e) {
    console.log(`Caught an error: ${e.message}`);
}