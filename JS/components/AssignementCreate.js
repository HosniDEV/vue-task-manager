export default {
  template: `
      <form action="" class="mt-2 w-full bg-red-400"  @submit.prevent="add" >
      <div class="w-full flex border-2 ">
      <input type="text" class=" border-white-400 p-2" v-model="input"/>
      <button type="submit" class="bg-white border-s-2  flex-grow">add</button>
      </div>
     </form>
      `,
  data() {
    return {
      input: "",
    };
  },

  methods: {
    add() {
      // emit means that u are to  create an event in the parent child called add with the parametre input
      this.$emit("add", this.input);
      this.input = "";
    },
  },
};
