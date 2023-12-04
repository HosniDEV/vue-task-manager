import AssignementList from "./AssignementList.js";
import AssignementCreate from "./AssignementCreate.js";
export default {
  components: { AssignementList, AssignementCreate },
  template: `
  <section class="border-2 border-black-400 rounded p-8 w-[300px]">
  
  <assignement-list title="in progress"  :assignements=" inProgress"></assignement-list>
  <assignement-list title="completed" :linethrough="complateTask" :assignements="complateTask"></assignement-list>
  <assignement-create @add="add"></assignement-create>
  </section>
  `,
  //data of this assin
  data() {
    return {
      //   input: "",
      assignements: [
        { id: 1, title: "finish course vue js", complete: false, tag: "math" },
        { id: 2, title: "finish tailwind", complete: false, tag: "science" },
        { id: 3, title: "finish course laravel", complete: false, tag: "math" },
      ],
    };
  },
  methods: {
    add(input) {
      this.assignements.push({
        title: input,
        complete: false,
        id: this.assignements.length + 1,
      });
    },
  },
  computed: {
    inProgress() {
      return this.assignements.filter((x) => !x.complete);
    },
    complateTask() {
      return this.assignements.filter((x) => x.complete);
    },
    tags() {
      return new Set(this.assignements.map((x) => x.tag));
    },
  },
};
