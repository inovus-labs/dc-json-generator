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
            imageUrl: null,
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
            if(this.imageUrl) {
                selectedData.image = this.imageUrl;
            }
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

    },
    mounted() {
        FilePond.registerPlugin(FilePondPluginImagePreview);
        
        const inputElement = document.querySelector('input[type="file"]');
		this.pond = FilePond.create(inputElement);
        
        this.pond.setOptions({
            allowMultiple: false,
            allowImagePreview: true,
            imagePreviewHeight: 200,
            server: {
                url: 'https://r2-upload-worker.devmorphix.workers.dev',
                process: {
                    url: '/',
                    method: 'POST',
                    withCredentials: false,
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    allowFileTypeValidation: true,
                    acceptedFileTypes: ['image/*'],
                    timeout: 7000,
                    onload: (response) => {
                        console.log(response);
                        this.imageUrl = response.url;
                    },
                    onerror: (response) => {
                        console.error('Failed to upload:', response);
                    }
                }
            }
        });
    },
}).mount('#app');