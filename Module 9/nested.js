// Closures allow nested functions to access variables from their parent scope.

function parentFunction(parentVar) {
    return function childFunction(childVar) {
        return function grandChildFunction(grandChildVar) {
            console.log(`Parent: ${parentVar}, Child: ${childVar}, Grandchild: ${grandChildVar}`);
        };
    };
}

const nestedClosure = parentFunction("ParentValue");
const childClosure = nestedClosure("ChildValue");
childClosure("GrandChildValue"); 
// Output: Parent: ParentValue, Child: ChildValue, Grandchild: GrandChildValue
