<script>
import { mapActions } from "pinia";
import d$todo from "@/store/dashboard/todo";

import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
    name: "ToDoAdd",
    data: () => ({
        input: {
            title: "",
            description: "",
            category: "",
        },
    }),
    components: {
        ArgonInput,
        ArgonSwitch,
        ArgonButton,
    },
    methods: {
        ...mapActions(d$todo, ["a$add"]),
        async addList() {
            try {
                await this.a$add({ ...this.input });
                this.$router.replace({ name: "ToDo" });
            } catch (e) {
                console.error("methods editList error", e);
            }
        },
    },
};
</script>

<template>
    <div class="card">
        <div class="card-header pb-0">
            <h6>Add ToDo</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <form @submit.prevent="addList">
                    <table class="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th
                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                                >
                                    Name
                                </th>
                                <th
                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                                >
                                    Description
                                </th>
                                <th
                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                                >
                                    Category
                                </th>
                                <th class="text-secondary opacity-7"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div
                                            class="d-flex flex-column justify-content-center"
                                        >
                                            <argon-input
                                                v-model="input.title"
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div
                                            class="d-flex flex-column justify-content-center"
                                        >
                                            <argon-input
                                                v-model="input.description"
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div
                                            class="d-flex flex-column justify-content-center"
                                        >
                                            <argon-input
                                                v-model="input.category"
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-center">
                                        <argon-button
                                            j
                                            color="success"
                                            type="submit"
                                        >
                                            Submit
                                        </argon-button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
</template>
