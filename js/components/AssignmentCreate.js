export default {
    template: `
        <form @submit.prevent="add">
                <div class="border bg-gray-600 text-black flex w-60">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
                    <button type="submmit" class="bg-white p-2 border-l"> Add </button>
                </div>
        </form>
    `,   

    data() {
        return {
            newAssignment: '',
        }
    }, 

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }

}