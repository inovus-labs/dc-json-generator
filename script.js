const { createApp } = Vue;

createApp({
    data() {
        return {
            // Fields array containing dropdown options
            formFields: [
                {
                    name: 'product_category',
                    label: 'Category',
                    options: [
                        { label: "Artificial Intelligence", value: "artificial intelligence" },
                        { label: "Business", value: "business" },
                        { label: "Collaboration", value: "collaboration" },
                        { label: "Communication", value: "communication" },
                        { label: "CRM", value: "crm" },
                        { label: "Crypto & Web3", value: "crypto & web3" },
                    ]
                    ,
                    selectedOptions: [],
                    isOpen: false
                },
                {
                    name: 'fruits',
                    label: 'Fruits',
                    options: [
                        { label: 'Apple', value: 'apple' },
                        { label: 'Banana', value: 'banana' },
                        { label: 'Orange', value: 'orange' }
                    ],
                    selectedOptions: [],
                    isOpen: false
                }
            ],
            generatedJSON: null,  // To hold the generated JSON
            showModal: false      // To control the modal visibility
        };
    },
    methods: {
        toggleDropdown(index) {
            // Toggle the dropdown visibility
            this.formFields[index].isOpen = !this.formFields[index].isOpen;
        },
        generateJSON() {
            // Create an object with the selected options
            const selectedData = {};
            this.formFields.forEach(field => {
                selectedData[field.name] = field.selectedOptions;
            });
            this.generatedJSON = JSON.stringify(selectedData, null, 2);
            this.showModal = true;
        },
        closeModal() {
            // Close the modal
            this.showModal = false;
        },
        copyToClipboard() {
            // Copy the generated JSON to the clipboard
            navigator.clipboard.writeText(this.generatedJSON).then(() => {
                alert('Copied to clipboard!');
            },(err) => {
                console.error('Failed to copy: ', err);
            });
        }
    }
}).mount('#app');