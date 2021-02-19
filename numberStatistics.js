let arr = []
const numberStatistics = () => {
    const number = Number(document.querySelector("#number-statistics-number-input").value);
    const average = document.querySelector("#number-statistics-average");
    const minimum = document.querySelector("#number-statistics-minimum");
    const maximum = document.querySelector("#number-statistics-maximum");
    let min = Infinity;
    let max = -Infinity;
    let avg = 0;
    let total = 0;
    arr.push(number);
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    avg = total / arr.length;
    average.textContent = avg;
    maximum.textContent = max;
   minimum.textContent = min;
}