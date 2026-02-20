//switch-case statement
//switch-case statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements.
//switch-case is only used when you have a single variable that you want to compare against multiple values. It is not suitable for complex conditions or when you need to compare multiple variables.
//switch-case is only used for equality comparisons. It cannot be used for other types of comparisons such as greater than, less than, etc.

let job = '';

if (job === 'software developer') {
    console.log('Writes Code');
} else if (job === 'Designer') {
    console.log('Makes user interfaces look good');
}else if (job === 'Cloud Engineer') {
    console.log('Manages cloud infrastructure');
}else {
    console.log('Works in a different field');
}

switch (job) {
    case 'software developer':
        console.log('Writes Code');
        break;
    case 'Designer':
        console.log('Makes user interfaces look good');
        break;
    case 'Cloud Engineer':
        console.log('Manages cloud infrastructure');
        break;
    default:        console.log('Works in a different field');
}