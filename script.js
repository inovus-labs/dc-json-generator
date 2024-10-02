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
                    multiple: true,
                    search: '',
                    isOpen: false
                },
                {
                    name: 'screens',
                    label: 'Screens',
                    data: data.screens,
                    selectedOptions: [],
                    multiple: true,
                    search: '',
                    isOpen: false
                },
                {
                    name: 'ui_elements',
                    label: 'UI Elements',
                    data: data.ui_elements,
                    selectedOptions: [],
                    multiple: true,
                    search: '',
                    isOpen: false
                },
                {
                    name: 'platform',
                    label: 'Platform',
                    options: data.platform,
                    selectedOptions: null,
                    multiple: false,
                    search: '',
                    isOpen: false
                }
            ],
            generatedJSON: null,  // To hold the generated JSON
            showModal: false,     // To control the modal visibility
            enableCTA: false,
            showErrors: false,
            screenName: '',
            screenImage: ''
        };
    },
    methods: {
        
        filterOptions(field) {
            if (field.search === '') {
                return field.options || field.data;
            } else {

                if(field.options) {
                    return field.options.filter(option => {
                        return option.label.toLowerCase().includes(field.search.toLowerCase());
                    });
                } else if(field.data) {
                    return field.data.map(group => {
                        return {
                            // title: group.title,
                            options: group.options.filter(option => {
                                return option.label.toLowerCase().includes(field.search.toLowerCase());
                            })
                        }
                    });
                }

            }

        },

        closeDropdowns() {
            this.formFields.forEach(field => {
                field.isOpen = false;
                field.search = '';
            });
        },
        
        handleFocus(field) {
            this.closeDropdowns();
            field.isOpen = true
        },

        generateJSON() {
            const selectedData = {};
            selectedData.name = this.screenName;
            this.formFields.forEach(field => {
                selectedData[field.name] = field.selectedOptions;
            });
            selectedData.date = new Date().toISOString();
            this.generatedJSON = JSON.stringify(selectedData, null, 2);
            this.showModal = true;
        },

        copyToClipboard() {
            navigator.clipboard.writeText(this.generatedJSON).then(() => {
                alert('Copied to clipboard!');
            },(err) => {
                console.error('Failed to copy: ', err);
            });
        }

    }
}).mount('#app');