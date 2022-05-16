import Assignment from "./Assignment.js"
import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {
        AssignmentList, AssignmentCreate
    },
    template: `
        <section class="space-y-6">
            <assignment-list 
                title="In progress" 
                :assignments='filters.inProgress'
            >
            </assignment-list>

            <assignment-list 
                title="Completed" 
                :assignments='filters.completed'
            >
            </assignment-list>
        </section>

        <assignment-create @add="add"></assignment-create>
        
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id:1, tag: 'math'},
                {name: 'Read chapter', complete: false, id:2, tag: 'math'},
                {name: 'Turn in homework', complete: false, id:3, tag: 'science'},
            ],

        }
    },
    
    computed: {

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
               name: name, 
               complete: false,
               id: this.assignments.length + 1,
            });

        }
    },
}