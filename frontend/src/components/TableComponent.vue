<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
                <th  v-for="(field, index) in fields" :key="index" scope="col" class="px-6 py-3">
                    {{ field.label }}
                </th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.name }}
                </th>
                <td class="px-6 py-4">
                    {{ product.email }}
                </td>
                <td class="px-6 py-4">
                    {{ product.role }}
                </td>
                <td class="px-6 py-4">
                    {{ product.value }}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Excluir</a>

                </td>
                
            </tr>
           
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "TableComponent",
    data() {
        return {
            fields: [
                { key: "name", label: "Nome", sortable: true },
                { key: "email", label: "Email", sortable: true },
                { key: "role", label: "Cargo", sortable: true },
                { key: "value", label: "Valor", sortable: true },
                { key: "actions", label: "" },
            ],
            products: [
                {
                    name: "Pablo",
                    email: "pabloalveszimba@hotmail.com",
                    role: "Cabeleireiro",
                    value: "100",
                    actions: "",
                },
                {
                    name: "Microsoft Surface Pro",
                    email: "White",
                    role: "Laptop PC",
                    value: "100",

                    actions: "",
                },
                {
                    name: "Magic Mouse 2",
                    email: "Black",
                    role: "Accessories",
                    value: "100",

                    actions: "99",
                },
            ],
        };
    },
};
</script>