A polyfill is a piece of code (usually JavaScript) that provides modern functionality on older browsers that do not natively support it. The term "polyfill" comes from a home-improvement product used to fill in cracks and holes in walls.

## How Polyfills Work

When a polyfill is implemented, it:

- Checks if a native implementation exists in the browser
- If the feature is not available, provides a custom implementation that mimics the standard functionality
- Makes modern JavaScript features available in environments that don't support them natively

## Example of a Polyfill

```jsx
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or undefined');
    }
    
    var o = Object(this);
    var len = o.length >>> 0;
    
    if (len === 0) {
      return false;
    }
    
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len + n, 0);
    
    while (k < len) {
      if (o[k] === searchElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}
```

## Common Use Cases

- Supporting new JavaScript methods (like Array.includes, Promise, etc.)
- Implementing modern CSS features in older browsers
- Adding support for HTML5 elements in legacy browsers
- Ensuring consistent functionality across different browser versions

## Best Practices

- Only load polyfills when necessary (feature detection)
- Use established polyfill libraries when possible (like core-js)
- Consider performance impact when implementing multiple polyfills
- Test thoroughly across different browser versions

## Most Asked Polyfill interview Questions

1. **map()**
    
    ```jsx
    // map() defintion - 
    // Array.map((num, i, arr) => {})
    
    Array.prototype.myMap = function (cb) {
      let temp = [];
    
      for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
      }
    
      return temp;
    };
    
    const nums = [1, 2, 3, 4, 5];
    
    console.log(nums.map((num) => num * 3));
    ```
    
2. **filter()**
    
    ```jsx
    Array.prototype.myFilter = function (cb) {
      let temp = [];
      for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
          temp.push(this[i]);
        }
      }
    
      return temp;
    };
    
    let nums = [1, 2, 3, 4, 5];
    
    console.log(nums.myFilter((num) => num > 3));
    ```
    
3. **reduce()**
    
    ```jsx
    // reduce() definition
    // Array.reduce((acc, curr, i, arr), initialValue)
    
     
    Array.prototype.myReduce = function (cb, initialValue) {
      let acc = initialValue;
    
      for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
      }
    
      return acc;
    };
    
    const nums = [1, 2, 3, 4, 5];
    
    console.log(
      nums.myReduce((acc, curr, i, arr) => {
        return acc + curr;
      }, 0)
    );
    ```
    
4. **bind()**
    
    ```jsx
    Function.prototype.myBind = function (ctx, ...args) {
        ctx.callableFn = this;
    
        let allArgs = args;
    
        return function(...newArgs) {
            allArgs = [...allArgs, ...newArgs];
            return ctx.callableFn(allArgs);
        }
    }
    ```
    
5. **apply()**
    
    ```jsx
    Function.prototype.myApply = function (ctx, args) {
      if (typeof this !== "function") {
        throw new Error(this + "it's not callable");
      }
      if (!Array.isArray(arg)) {
        throw new TypeError("CreateListFromArrayLike called on non-object");
      }
      ctx.callableFn = this;
    
      ctx.callableFn(...args);
    };
    
    ```
    
6. **call()**
    
    ```jsx
    Function.prototype.myCall = function (ctx, ...args) {
      if (typeof this !== "function") {
        throw new Error(this + "it's not callable");
      }
    
      ctx.callableFn = this;
      ctx.callableFn(...args);
    };
    ```
    
7. **once()**
    
    ```jsx
    function once(func, context) {
      let ran;
    
      return function () {
        if (func) {
          ran = func.apply(context || this, arguments);
          func = null;
        }
    
        return ran;
      };
    }
    
    let hello = once(() => console.log(hello));
    hello();
    hello();
    ```
    
8. **memoize()**