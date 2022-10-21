import { Animal } from "./Animal";
import { Bird } from "./Bird";
import { Duck } from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwin";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Patolino', 3, 50, 2, true, 'preto c/ verde');

function takeOff (animal: ICanFly) {
    animal.fly();
}
takeOff(duck);

function takeOff2 (animal: ICanSwim) {
    animal.swim();
}
takeOff2(duck);
function takeOff3(animal: ICanWalk) {
    animal.walk();
}
takeOff3(duck);