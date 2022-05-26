import AppButton from "./AppButton.js"; 
import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default  {
    components: {
        Assignments, Panel
    },

    template: `
        <div class="grid gap-6"> 
            
            <Assignments></Assignments>

           

        </div>
    `,

   
};
