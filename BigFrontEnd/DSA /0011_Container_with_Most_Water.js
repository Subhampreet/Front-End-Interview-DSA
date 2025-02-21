var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxima = 0 

    while(left < right){
        let width = right - left
        let maxArea = Math.min(height[left], height[right]) * width

        maxima = Math.max(maxima, maxArea)

        if(height[left] <= height[right]){
            left+=1
        } else {
            right-=1;
        }
    }

    return maxima;
};
