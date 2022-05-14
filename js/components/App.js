import AppButton from "./AppButton.js"; 

export default  {
    template: `
        <section v-show="inProggressAssignments.length">
            <h2 class="font-bold mb-2"> In progress </h2>

            <ul>
                <li 
                    v-for="assignment in inProggressAssignments" 
                    :key="assignment.id"
                > 
                    <label>
                        {{ assignment.name }} 
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>

        <section v-show="completedAssignments.length" class="mt-8">
            <h2 class="font-bold mb-2"> Completed </h2>

            <ul>
                <li 
                    v-for="assignment in completedAssignments" 
                    :key="assignment.id"
                > 
                    <label>
                        {{ assignment.name }} 
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id:1},
                {name: 'Read chapter', complete: false, id:2},
                {name: 'Turn in homework', complete: false, id:3},
            ]
        }
    },
    
    computed: {
        inProggressAssignments() {
            return this.assignments.filter(a => !a.complete)
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete)
        }
    },
};
