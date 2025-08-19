const n = 5;

for (let i = 0; i < n ; i=i+1){
    console.log(" ".repeat(n-i-1)+((n-i).toString()+" ").repeat(i+1));
}

