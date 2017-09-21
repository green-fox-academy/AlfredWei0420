
class myPromise {
  constructor(myFunc){
    this.resolveParam;
    this.rejectParam;
    myFunc(this.resolveFakeFunction.bind(this), this.rejectFakeFunction.bind(this));
  }

  resolveFakeFunction(value){
    if(typeof this.resolveFunction === "function"){
      this.resolveFunction(value);
    }else{
      this.resolveParam = value;
    }
  }

  rejectFakeFunction(err){
    if(typeof this.rejectFunction === "function"){
      this.rejectFunction(err);
    }else{
      this.rejectParam = err;
    }
    
  }

  then(resolveFunction, rejectFunction){
    this.resolveFunction = resolveFunction;
    this.rejectFunction = rejectFunction || undefined;
    if(this.resolveParam){
      resolveFunction(this.resolveParam);
    }  
    return this;
  }5

  catch(rejectFunction){
    this.rejectFunction = rejectFunction;
    if(this.rejectParam){
      rejectFunction(this.rejectParam);
    }  
    return this;
  }
}

var a = new myPromise(function(resolve, reject){
  setTimeout(function(){
    var data = 10;
    resolve(data);
  }, 2000);
});

a.then(function(value){
  console.log(value);
},function(err){
  console.log(err);
});

