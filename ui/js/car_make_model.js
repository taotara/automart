
let carsAndModels = {};
carsAndModels['VO'] = ['Please Select', 'V70', 'XC60', 'XC90'];
carsAndModels['VW'] = ['Please Select', 'Golf', 'Polo', 'Scirocco', 'Touareg'];
carsAndModels['BMW'] = ['Please Select', 'M6', 'X5', 'Z3'];
                  
function ChangeCarList() {
  let carList = document.getElementById("car");
  let modelList = document.getElementById("carmodel");
  let selCar = carList.options[carList.selectedIndex].value;
  while (modelList.options.length) {
    modelList.remove(0);
  }
  let cars = carsAndModels[selCar];
  if (cars) {
    let i;
    for (i = 0; i < cars.length; i++) {
      let car = new Option(cars[i], i);
      modelList.options.add(car);
    }
  }
} 