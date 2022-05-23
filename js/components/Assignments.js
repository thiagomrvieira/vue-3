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
            assignments: [],
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            }
        );
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