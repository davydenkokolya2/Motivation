function runLazy(funcName) {
    let script = document.createElement('script');
    script.src = `${funcName}.js`;



    document.head.append(script);
}


runLazy("lazy");
