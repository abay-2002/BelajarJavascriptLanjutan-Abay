// Belajar class pada javascript
// Analogi dari class adalah sebuah object blueprint.
// contoh Class sederhana:
class car {
    constructor(color, frame){
        this.color = color,
        this.frame = frame
    }

    machine(){
        return 'vroom'
    }
}

const first_car = new car('red', 'monocock');
console.log(first_car.color);

const second_car = new car('blue', 'monocock');
console.log(second_car.color);


