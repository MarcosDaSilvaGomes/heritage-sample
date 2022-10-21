import { Bird } from "./Bird";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwin";
import { ICanWalk } from "./ICanWalk";

class Duck extends Bird implements ICanWalk, ICanFly, ICanSwim{
     public color : string

     constructor (name: string ,wieght : number,lifeTime:number,size:number,canFly:boolean){
     super  ( name, wieght, lifeTime ,size, canFly)
     this.color = color
    }
    public fly(): void {
        console.log(`${this.name} starts to fly!`)
    }
    public walk(): void {
        console.log (`${this.name}starts to walk!`)
        
    }
    public swim(): void {
        console.log(`${this.name} starts to swim`)
        }
    }
export { Duck }