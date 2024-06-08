const receivesAFunction = (fn) =>{
    fn()
}

const returnsANamedFunction = () =>{
    return receivesAFunction
}

const returnsAnAnonymousFunction = () =>{
    return () =>{
        
    }
}