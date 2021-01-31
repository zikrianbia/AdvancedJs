  /** Instation
   *  Making Instances or multiple copies of an object.
   */

   class Player {
       constructor(name, type) {
        //    console.log(this);
           this.name = name;
           this.type = type;
       }
       introduce() {
           console.log(`Hellow I am ${this.name}, And i am a ${this.type}`);
       }
   }
   class Wizard extends Player {
       constructor(name, type) {
           super(name, type);
       }
       play() {
           console.log(`Wohooo I'm a ${this.type} get ready to play with me!`);
       }
   }

   const wizard1 = new Wizard('Majid', 'Tank');
   const wizard2 = new Wizard('zikri', 'Assasin');

   console.log(wizard2.play())

   //mantap