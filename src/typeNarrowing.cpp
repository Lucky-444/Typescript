function getLucky(kind : string | number)
{
         {

                  // Type narrowing using typeof
                  if (typeof kind == = 'string')
                  {
                           // Here TypeScript knows `kind` is a string
                           return `making ${kind} chai...`;
                  }

                  // If kind is a number, this block runs
                  return `Coder ${10}`;
         }

         function serveChai(msg?: string)
         {
                  if(msg){
                           return `Serving `

                  }

                  return `serving defaultly masala Chai`
         }