
import { data } from './data.js';
const { createApp } = Vue;

createApp({
    data() {
        return {
            formFields: [
                {
                    name: 'product_category',
                    label: 'Category',
                    options: data.product_category,
                    selectedOptions: [],
                    isOpen: false
                },
                {
                    name: 'screens',
                    label: 'Screens',
                    data: data.screens,
                    selectedOptions: [],
                    isOpen: false
                },
                {
                    name: 'ui_elements',
                    label: 'UI Elements',
                    data: data.ui_elements,
                    selectedOptions: [],
                    isOpen: false
                },
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