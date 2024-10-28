import { useState, useCallback, useEffect } from "react";
import Joi from 'joi';
import Config from "@/config";
import InfectionNdChronicDisease from "./disease";



const disease_prediction_output: any = {

    "no_heart_disease": {
        text: `✅ Your results indicate that you may not have heart disease 🌟. However, it's wise to remain vigilant about your heart health.
                🫀 Please note that the accuracy of this assessment is 72%. 📊`,
        doctors: [],
        Remedies: [],
        foods: []

    },
    "no_chronic_diseases": {
        text: `✅ Great news! Your results suggest that you may not have a chronic disease 🌟. However, it's important to stay mindful of your health and well-being.
        🩺 Please note that this assessment is 68% accurate, so continued care is recommended. 📊`,
        doctors: [],
        Remedies: [],
        foods: []

    },
    "no_infection_disease": {
        text: `✅ Great news! Your results suggest that you may not have a Infection disease 🌟. However, it's important to stay mindful of your health and well-being.
        "🦠 Please note that this assessment is 70% accurate, so continued care is recommended. 📊`,
        doctors: [],
        Remedies: [],
        foods: []

    },
    ...InfectionNdChronicDisease,
    "Heart Disease": {
        text: `🚨 Your results indicate that you may have heart disease ⚠️. However, it's wise to remain vigilant about your heart health.
            🫀 Please note that the accuracy of this assessment is 72%. 📊`,
        doctors: [{
            name: "Dr. A Naga Srinivaas",
            designation: "Cardiology Specialist",
            link: "https://www.practo.com/bangalore/doctor/dr-a-naga-srinivaas-cardiologist?practice_id=1466123&specialization=Cardiologist&referrer=doctor_listing&page_uid=f99fc797-6458-4c9d-a7af-2e56c20cd30d",
        },
        {
            name: "Dr. Ramnaresh Soudri",
            designation: "Cardiology Specialist",
            link: "https://www.practo.com/bangalore/doctor/dr-ramanresh-soudri-cardiologist?practice_id=1466123&specialization=Cardiologist&referrer=doctor_listing&page_uid=f99fc797-6458-4c9d-a7af-2e56c20cd30d",
        },
        {
            name: "Dr. Srinivas V K",
            designation: "Cardiology Specialist",
            link: "https://www.practo.com/bangalore/doctor/dr-srinivas-v-k-cardiologist?practice_id=636836&specialization=Cardiologist&referrer=doctor_listing&page_uid=f99fc797-6458-4c9d-a7af-2e56c20cd30d",
        }],
        Remedies: [
            'Flaxseeds: High in omega-3 fatty acids and fiber, helpful for lowering cholesterol.',
            'Garlic: Can help reduce blood pressure and cholesterol levels.',
            'Turmeric: Contains curcumin, which may benefit heart health due to its anti- inflammatory properties.',
            'Hibiscus Tea: Known for its potential to lower blood pressure.',
            'Dark Chocolate: In moderation, it can improve heart health thanks to its antioxidants.'
        ],
        foods: [
            'Fruits and Vegetables: Focus on berries, leafy greens, and citrus for their antioxidant properties.',
            'Whole Grains: Choose options like oats, brown rice, and quinoa',
            'Lean Proteins: Include fish (especially fatty fish), skinless poultry, and legumes.',
            'Healthy Fats: Use olive oil and avocado instead of saturated fats.',
            'Low-Fat Dairy: Opt for low-fat options to reduce saturated fat intake.'
        ]



    }
}
const disease: any = {

    left: {
        heart_disease_1: {
            message: {
                text: 'please enter the following information',
                value: ''
            }
        },
        heart_disease_2: {
            message: {
                text: 'please enter the following information',
                value: ''
            }
        },
        heart_disease_3: {
            message: {
                text: `
                      Please enter a valid range (1 to 4) for CP (chest pain)

                       1 - Typical angina: Classic heart-related chest pain, often due to coronary artery disease.
                       2 - Atypical angina: Chest pain that doesn’t follow the typical pattern but might still be heart-related.
                       3 - Non-anginal pain: Pain in the chest that is not caused by the heart (e.g., musculoskeletal or gastrointestinal issues).
                       4 - Asymptomatic: No chest pain or symptoms, even in the presence of heart disease.
                      `,
                value: ''
            }
        },
        heart_disease_4: {
            message: {
                text: `Trestbps: Resting blood pressure measured in millimeters of mercury (mm Hg) `,
                value: ''
            }
        },
        heart_disease_5: {
            message: {
                text: `Cholesterol in mg/dL `,
                value: ''
            }
        },
        heart_disease_6: {
            message: {
                text: `Have you experienced shortness of breath recently, even with light effort?`,
                value: ''
            }
        },
        heart_disease_7: {
            message: {
                text: `Have you noticed swelling in your feet, ankles, or legs?`,
                value: ''
            }
        },
        heart_disease_8: {
            message: {
                text: ``,
                value: '',
                loading: true,
                output: true
            }
        },

        infection_disease_21: {
            message: {
                text: ``,
                value: '',
                loading: true,
                output: true
            }
        },
        chronic_disease_31: {
            message: {
                text: ``,
                value: '',
                loading: true,
                output: true
            }
        },

        //Chronic Disease

        "chronic_disease_1": {
            "message": {
                "text": "Do you have constipation?",
                "value": ""
            }
        },
        "chronic_disease_2": {
            "message": {
                "text": "Do you experience pain during bowel movements?",
                "value": ""
            }
        },
        "chronic_disease_3": {
            "message": {
                "text": "Do you feel pain in the anal region?",
                "value": ""
            }
        },
        "chronic_disease_4": {
            "message": {
                "text": "Do you have bloody stool?",
                "value": ""
            }
        },
        "chronic_disease_5": {
            "message": {
                "text": "Do you experience irritation in the anus?",
                "value": ""
            }
        },
        "chronic_disease_6": {
            "message": {
                "text": "Do you have vomiting?",
                "value": ""
            }
        },
        "chronic_disease_7": {
            "message": {
                "text": "Do you have breathlessness?",
                "value": ""
            }
        },
        "chronic_disease_8": {
            "message": {
                "text": "Do you experience sweating?",
                "value": ""
            }
        },
        "chronic_disease_9": {
            "message": {
                "text": "Do you have chest pain?",
                "value": ""
            }
        },
        "chronic_disease_10": {
            "message": {
                "text": "Do you feel fatigue?",
                "value": ""
            }
        },
        "chronic_disease_11": {
            "message": {
                "text": "Do you have cramps?",
                "value": ""
            }
        },
        "chronic_disease_12": {
            "message": {
                "text": "Do you experience bruising?",
                "value": ""
            }
        },
        "chronic_disease_13": {
            "message": {
                "text": "Do you have obesity?",
                "value": ""
            }
        },
        "chronic_disease_14": {
            "message": {
                "text": "Do you have swollen legs?",
                "value": ""
            }
        },
        "chronic_disease_15": {
            "message": {
                "text": "Do you have swollen blood vessels?",
                "value": ""
            }
        },
        "chronic_disease_16": {
            "message": {
                "text": "Do you notice prominent veins on your calf?",
                "value": ""
            }
        },
        "chronic_disease_17": {
            "message": {
                "text": "Do you have weight gain?",
                "value": ""
            }
        },
        "chronic_disease_18": {
            "message": {
                "text": "Do you feel cold in your hands and feet?",
                "value": ""
            }
        },
        "chronic_disease_19": {
            "message": {
                "text": "Do you experience mood swings?",
                "value": ""
            }
        },
        "chronic_disease_20": {
            "message": {
                "text": "Do you feel lethargic?",
                "value": ""
            }
        },
        "chronic_disease_21": {
            "message": {
                "text": "Do you feel dizzy?",
                "value": ""
            }
        },
        "chronic_disease_22": {
            "message": {
                "text": "Do you have a puffy face and eyes?",
                "value": ""
            }
        },
        "chronic_disease_23": {
            "message": {
                "text": "Do you have an enlarged thyroid?",
                "value": ""
            }
        },
        "chronic_disease_24": {
            "message": {
                "text": "Do you have brittle nails?",
                "value": ""
            }
        },
        "chronic_disease_25": {
            "message": {
                "text": "Do you have swollen extremities?",
                "value": ""
            }
        },
        "chronic_disease_26": {
            "message": {
                "text": "Do you feel depressed?",
                "value": ""
            }
        },
        "chronic_disease_27": {
            "message": {
                "text": "Do you experience irritability?",
                "value": ""
            }
        },
        "chronic_disease_28": {
            "message": {
                "text": "Do you have abnormal menstruation?",
                "value": ""
            }
        },
        "chronic_disease_29": {
            "message": {
                "text": "Do you have restlessness?",
                "value": ""
            }
        },
        "chronic_disease_30": {
            "message": {
                "text": "Do you experience diarrhoea?",
                "value": ""
            }
        },



        // Infection Disease


        "infection_disease_1": {
            "message": {
                "text": "Do you have itching?",
                "value": ""
            }
        },
        "infection_disease_2": {
            "message": {
                "text": "Do you have skin rash?",
                "value": ""
            }
        },
        "infection_disease_3": {
            "message": {
                "text": "Do you have nodal skin eruptions?",
                "value": ""
            }
        },
        "infection_disease_4": {
            "message": {
                "text": "Do you have dischromic patches?",
                "value": ""
            }
        },
        "infection_disease_5": {
            "message": {
                "text": "Do you have continuous sneezing?",
                "value": ""
            }
        },
        "infection_disease_6": {
            "message": {
                "text": "Do you have shivering?",
                "value": ""
            }
        },
        "infection_disease_7": {
            "message": {
                "text": "Do you feel chills?",
                "value": ""
            }
        },
        "infection_disease_8": {
            "message": {
                "text": "Do you have watering from eyes?",
                "value": ""
            }
        },
        "infection_disease_9": {
            "message": {
                "text": "Do you have stomach pain?",
                "value": ""
            }
        },
        "infection_disease_10": {
            "message": {
                "text": "Do you feel acidity?",
                "value": ""
            }
        },
        "infection_disease_11": {
            "message": {
                "text": "Do you have ulcers on the tongue?",
                "value": ""
            }
        },
        "infection_disease_12": {
            "message": {
                "text": "Do you feel nauseous?",
                "value": ""
            }
        },
        "infection_disease_13": {
            "message": {
                "text": "Have you experienced vomiting?",
                "value": ""
            }
        },
        "infection_disease_14": {
            "message": {
                "text": "Do you have a cough?",
                "value": ""
            }
        },
        "infection_disease_15": {
            "message": {
                "text": "Do you experience chest pain?",
                "value": ""
            }
        },
        "infection_disease_16": {
            "message": {
                "text": "Do you feel abdominal pain?",
                "value": ""
            }
        },
        "infection_disease_17": {
            "message": {
                "text": "Do you have yellowish skin?",
                "value": ""
            }
        },
        "infection_disease_18": {
            "message": {
                "text": "Do you experience fatigue?",
                "value": ""
            }
        },
        "infection_disease_19": {
            "message": {
                "text": "Do you have a high fever?",
                "value": ""
            }
        },
        "infection_disease_20": {
            "message": {
                "text": "Do you experience malaise?",
                "value": ""
            }
        }


    },
    right: {
        heart_disease_1: {
            message: {
                text: 'Prediction of Heart Disease',
                value: ''
            }
        },
        infection_disease_1: {
            message: {
                text: 'Prediction of infectious Disease',
                value: ''
            }
        },
        chronic_disease_1: {
            message: {
                text: 'Prediction of chronic Disease',
                value: ''
            }
        }
    },
    rightQA: {
        heart_disease_1: {
            message: {
                text: 'Your gender please ',
                value: '',
                name: 'gender',
                key: 'heart_disease_2',
                submited: false,
                prediction: false,
                inputType: 'select',
                options: ['male', 'female'],
                validator: Joi.object({
                    gender: Joi.string().required(),
                })

            }
        },
        heart_disease_2: {
            message: {
                text: 'Your Age ',
                value: '',
                name: 'age',
                key: 'heart_disease_3',
                submited: false,
                prediction: false,
                inputType: 'text',
                validator: Joi.object({
                    age: Joi.string().required().messages({
                        'string.empty': 'Age is required *'
                    }),
                })


            }
        },
        heart_disease_3: {
            message: {
                text: 'Your CP Level ',
                name: 'cp',
                value: '',
                key: 'heart_disease_4',
                submited: false,
                prediction: false,
                inputType: 'text',
                validator: Joi.object({
                    cp: Joi.string(),
                })
            }
        },
        heart_disease_4: {
            message: {
                text: 'Your Trestbps ',
                name: 'Trestbps',
                value: '',
                key: 'heart_disease_5',
                submited: false,
                prediction: false,
                inputType: 'text',
                validator: Joi.object({
                    Trestbps: Joi.string(),
                })
            }
        },
        heart_disease_5: {
            message: {
                text: ' Your Cholesterol ',
                name: 'cholesterol',
                value: '',
                key: 'heart_disease_6',
                submited: false,
                prediction: false,
                inputType: 'text',
                validator: Joi.object({
                    cholesterol: Joi.string(),
                })
            }
        },
        heart_disease_6: {
            message: {
                text: '',
                name: 'breath',
                value: '',
                key: 'heart_disease_7',
                submited: false,
                prediction: false,
                inputType: 'select',
                options: ['Yes', 'No'],
                validator: Joi.object({
                    breath: Joi.string(),
                })
            }
        },
        heart_disease_7: {
            message: {
                text: '',
                name: 'swelling',
                value: '',
                key: 'heart_disease_8',
                submited: false,
                prediction: true,
                inputType: 'select',
                options: ['Yes', 'No'],
                validator: Joi.object({
                    swelling: Joi.string(),
                })
            }
        },


        // infections

        "infection_disease_1": {
            "message": {
                "text": "",
                "name": "itching",
                "value": "",
                "key": "infection_disease_2",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    itching: Joi.string().required(),
                })
            }
        },
        "infection_disease_2": {
            "message": {
                "text": "",
                "name": "skin_rash",
                "value": "",
                "key": "infection_disease_3",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    skin_rash: Joi.string().required(),
                })
            }
        },
        "infection_disease_3": {
            "message": {
                "text": "",
                "name": "nodal_skin_eruptions",
                "value": "",
                "key": "infection_disease_4",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    nodal_skin_eruptions: Joi.string().required(),
                })
            }
        },
        "infection_disease_4": {
            "message": {
                "text": "",
                "name": "dischromic_patches",
                "value": "",
                "key": "infection_disease_5",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    dischromic_patches: Joi.string().required(),
                })
            }
        },
        "infection_disease_5": {
            "message": {
                "text": "",
                "name": "continuous_sneezing",
                "value": "",
                "key": "infection_disease_6",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    continuous_sneezing: Joi.string().required(),
                })
            }
        },
        "infection_disease_6": {
            "message": {
                "text": "",
                "name": "shivering",
                "value": "",
                "key": "infection_disease_7",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    shivering: Joi.string().required(),
                })
            }
        },
        "infection_disease_7": {
            "message": {
                "text": "",
                "name": "chills",
                "value": "",
                "key": "infection_disease_8",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    chills: Joi.string().required(),
                })
            }
        },
        "infection_disease_8": {
            "message": {
                "text": "",
                "name": "watering_from_eyes",
                "value": "",
                "key": "infection_disease_9",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    watering_from_eyes: Joi.string().required(),
                })
            }
        },
        "infection_disease_9": {
            "message": {
                "text": "",
                "name": "stomach_pain",
                "value": "",
                "key": "infection_disease_10",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    stomach_pain: Joi.string().required(),
                })
            }
        },
        "infection_disease_10": {
            "message": {
                "text": "",
                "name": "acidity",
                "value": "",
                "key": "infection_disease_11",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    acidity: Joi.string().required(),
                })
            }
        },
        "infection_disease_11": {
            "message": {
                "text": "",
                "name": "ulcers_on_tongue",
                "value": "",
                "key": "infection_disease_12",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    ulcers_on_tongue: Joi.string().required(),
                })
            }
        },
        "infection_disease_12": {
            "message": {
                "text": "",
                "name": "vomiting",
                "value": "",
                "key": "infection_disease_13",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    vomiting: Joi.string().required(),
                })
            }
        },
        "infection_disease_13": {
            "message": {
                "text": "",
                "name": "cough",
                "value": "",
                "key": "infection_disease_14",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    cough: Joi.string().required(),
                })
            }
        },
        "infection_disease_14": {
            "message": {
                "text": "",
                "name": "chest_pain",
                "value": "",
                "key": "infection_disease_15",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    chest_pain: Joi.string().required(),
                })
            }
        },
        "infection_disease_15": {
            "message": {
                "text": "",
                "name": "itching",
                "value": "",
                "key": "infection_disease_16",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    itching: Joi.string().required(),
                })
            }
        },
        "infection_disease_16": {
            "message": {
                "text": "",
                "name": "vomiting",
                "value": "",
                "key": "infection_disease_17",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    vomiting: Joi.string().required(),
                })
            }
        },
        "infection_disease_17": {
            "message": {
                "text": "",
                "name": "yellowish_skin",
                "value": "",
                "key": "infection_disease_18",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    yellowish_skin: Joi.string().required(),
                })
            }
        },
        "infection_disease_18": {
            "message": {
                "text": "",
                "name": "nausea",
                "value": "",
                "key": "infection_disease_19",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    nausea: Joi.string().required(),
                })
            }
        },
        "infection_disease_19": {
            "message": {
                "text": "",
                "name": "loss_of_appetite",
                "value": "",
                "key": "infection_disease_20",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    loss_of_appetite: Joi.string().required(),
                })
            }
        },
        "infection_disease_20": {
            "message": {
                "text": "",
                "name": "abdominal_pain",
                "value": "",
                "key": "infection_disease_21",
                "submitted": false,
                "prediction": true,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    abdominal_pain: Joi.string().required(),
                })
            }
        },



        "chronic_disease_1": {
            "message": {
                "text": "",
                "name": "constipation",
                "value": "",
                "key": "chronic_disease_2",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    constipation: Joi.string().required()
                })
            }
        },
        "chronic_disease_2": {
            "message": {
                "text": "",
                "name": "pain_during_bowel_movements",
                "value": "",
                "key": "chronic_disease_3",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    pain_during_bowel_movements: Joi.string().required()
                })
            }
        },
        "chronic_disease_3": {
            "message": {
                "text": "",
                "name": "pain_in_anal_region",
                "value": "",
                "key": "chronic_disease_4",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    pain_in_anal_region: Joi.string().required()
                })
            }
        },
        "chronic_disease_4": {
            "message": {
                "text": "",
                "name": "bloody_stool",
                "value": "",
                "key": "chronic_disease_5",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    bloody_stool: Joi.string().required()
                })
            }
        },
        "chronic_disease_5": {
            "message": {
                "text": "",
                "name": "irritation_in_anus",
                "value": "",
                "key": "chronic_disease_6",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    irritation_in_anus: Joi.string().required()
                })
            }
        },
        "chronic_disease_6": {
            "message": {
                "text": "",
                "name": "vomiting",
                "value": "",
                "key": "chronic_disease_7",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    vomiting: Joi.string().required()
                })
            }
        },
        "chronic_disease_7": {
            "message": {
                "text": "",
                "name": "breathlessness",
                "value": "",
                "key": "chronic_disease_8",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    breathlessness: Joi.string().required()
                })
            }
        },
        "chronic_disease_8": {
            "message": {
                "text": "",
                "name": "sweating",
                "value": "",
                "key": "chronic_disease_9",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    sweating: Joi.string().required()
                })
            }
        },
        "chronic_disease_9": {
            "message": {
                "text": "",
                "name": "chest_pain",
                "value": "",
                "key": "chronic_disease_10",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    chest_pain: Joi.string().required()
                })
            }
        },
        "chronic_disease_10": {
            "message": {
                "text": "",
                "name": "fatigue",
                "value": "",
                "key": "chronic_disease_11",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    fatigue: Joi.string().required()
                })
            }
        },
        "chronic_disease_11": {
            "message": {
                "text": "",
                "name": "cramps",
                "value": "",
                "key": "chronic_disease_12",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    cramps: Joi.string().required()
                })
            }
        },
        "chronic_disease_12": {
            "message": {
                "text": "",
                "name": "bruising",
                "value": "",
                "key": "chronic_disease_13",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    bruising: Joi.string().required()
                })
            }
        },
        "chronic_disease_13": {
            "message": {
                "text": "",
                "name": "obesity",
                "value": "",
                "key": "chronic_disease_14",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    obesity: Joi.string().required()
                })
            }
        },
        "chronic_disease_14": {
            "message": {
                "text": "",
                "name": "swollen_legs",
                "value": "",
                "key": "chronic_disease_15",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    swollen_legs: Joi.string().required()
                })
            }
        },
        "chronic_disease_15": {
            "message": {
                "text": "",
                "name": "swollen_blood_vessels",
                "value": "",
                "key": "chronic_disease_16",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    swollen_blood_vessels: Joi.string().required()
                })
            }
        },
        "chronic_disease_16": {
            "message": {
                "text": "",
                "name": "prominent_veins_on_calf",
                "value": "",
                "key": "chronic_disease_17",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    prominent_veins_on_calf: Joi.string().required()
                })
            }
        },
        "chronic_disease_17": {
            "message": {
                "text": "",
                "name": "fatigue",
                "value": "",
                "key": "chronic_disease_18",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    fatigue: Joi.string().required()
                })
            }
        },
        "chronic_disease_18": {
            "message": {
                "text": "",
                "name": "weight_gain",
                "value": "",
                "key": "chronic_disease_19",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    weight_gain: Joi.string().required()
                })
            }
        },
        "chronic_disease_19": {
            "message": {
                "text": "",
                "name": "cold_hands_and_feets",
                "value": "",
                "key": "chronic_disease_20",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    cold_hands_and_feets: Joi.string().required()
                })
            }
        },
        "chronic_disease_20": {
            "message": {
                "text": "",
                "name": "mood_swings",
                "value": "",
                "key": "chronic_disease_21",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    mood_swings: Joi.string().required()
                })
            }
        },
        "chronic_disease_21": {
            "message": {
                "text": "",
                "name": "hair_loss",
                "value": "",
                "key": "chronic_disease_22",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    hair_loss: Joi.string().required()
                })
            }
        },
        "chronic_disease_22": {
            "message": {
                "text": "",
                "name": "dry_skin",
                "value": "",
                "key": "chronic_disease_23",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    dry_skin: Joi.string().required()
                })
            }
        },
        "chronic_disease_23": {
            "message": {
                "text": "",
                "name": "depression",
                "value": "",
                "key": "chronic_disease_24",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    depression: Joi.string().required()
                })
            }
        },
        "chronic_disease_24": {
            "message": {
                "text": "",
                "name": "anxiety",
                "value": "",
                "key": "chronic_disease_25",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    anxiety: Joi.string().required()
                })
            }
        },
        "chronic_disease_25": {
            "message": {
                "text": "",
                "name": "difficulty_concentrating",
                "value": "",
                "key": "chronic_disease_26",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    difficulty_concentrating: Joi.string().required()
                })
            }
        },
        "chronic_disease_26": {
            "message": {
                "text": "",
                "name": "sensitivity_to_cold",
                "value": "",
                "key": "chronic_disease_27",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    sensitivity_to_cold: Joi.string().required()
                })
            }
        },
        "chronic_disease_27": {
            "message": {
                "text": "",
                "name": "irregular_menstruation",
                "value": "",
                "key": "chronic_disease_28",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    irregular_menstruation: Joi.string().required()
                })
            }
        },
        "chronic_disease_28": {
            "message": {
                "text": "",
                "name": "dry_eyes",
                "value": "",
                "key": "chronic_disease_29",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    dry_eyes: Joi.string().required()
                })
            }
        },
        "chronic_disease_29": {
            "message": {
                "text": "",
                "name": "weight_loss",
                "value": "",
                "key": "chronic_disease_30",
                "submitted": false,
                "prediction": false,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    weight_loss: Joi.string().required()
                })
            }
        },
        "chronic_disease_30": {
            "message": {
                "text": "",
                "name": "bloating",
                "value": "",
                "key": "chronic_disease_31",
                "submitted": false,
                "prediction": true,
                "inputType": "select",
                "options": ["Yes", "No"],
                "validator": Joi.object({
                    bloating: Joi.string().required()
                })
            }
        },





    }
}




const useChat = () => {
    const [message, setMessage] = useState<any>([]);

    const [leftLoading, setLeftLoading] = useState<Boolean>(false)
    const [rightLoading, setRightLoading] = useState<Boolean>(false)
    const [initial, setInitial] = useState(true);

    const fetchCall = (keyType: any) => {

        let QAmessage = message.filter((item: any) => item.placement === 'rightQA');
        let payload: any = {}


        QAmessage.forEach((element: any) => {
            payload[element.message.name] = ['Yes', 'No'].includes(element.message.value) ? element.message.value == 'Yes' ? 1 : 0 : element.message.value;
        });

        setTimeout(() => {
            if (keyType.startsWith('heart_disease_')) {
                predictHeart(payload)
            }
            if (keyType.startsWith('chronic_disease_')) {
                predictChronic(payload)
            }
            if (keyType.startsWith('infection_disease_')) {
                predictInfection(payload)
            }
        }, 4000)

        setInitial(false);

    }

    const predictHeart = (payload = {}) => {
        fetch(Config.BASE_URL + '/predict-heart', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then((resp: any) => {

            setMessage((prev: any) => {
                const updatedItems = prev.map((item: any) => {
                    if (item.key === 'heart_disease_8' && item.placement === 'left') {
                        return {
                            ...item,
                            message: {
                                ...item.message,
                                submited: true,
                                loading: false,
                                ...disease_prediction_output[resp.predicted_disease ?? '']
                            }
                        };
                    }
                    return item;
                });
                let array = [...updatedItems]
                return array;
            });


        })
    }
    const predictInfection = (payload = {}) => {
        fetch(Config.BASE_URL + '/predict-infection', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(resp => {
            setMessage((prev: any) => {
                const updatedItems = prev.map((item: any) => {

                    if (item.key === 'infection_disease_21' && item.placement === 'left') {
                        return {
                            ...item,
                            message: {
                                ...item.message,
                                submited: true,
                                loading: false,
                                ...(disease_prediction_output[resp.predicted_disease ?? ''] ?? disease_prediction_output['Allergy'])
                            }
                        };
                    }
                    return item;
                });
                let array = [...updatedItems]
                return array;
            });
        })
    }
    const predictChronic = (payload = {}) => {
        fetch(Config.BASE_URL + '/predict-conditions', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(resp => {
            setMessage((prev: any) => {
                const updatedItems = prev.map((item: any) => {
                    if (item.key === 'chronic_disease_31' && item.placement === 'left') {
                        return {
                            ...item,
                            message: {
                                ...item.message,
                                submited: true,
                                loading: false,
                                ...(disease_prediction_output[resp.predicted_disease ?? ''] ?? disease_prediction_output['Arthritis'])
                            }
                        };
                    }
                    return item;
                });
                let array = [...updatedItems]
                return array;
            });
        })
    }

    useEffect(() => {
        let QAmessage = message.filter((item: any) => item.placement === 'rightQA');
        QAmessage.forEach((element: any) => {
            if (element.message.prediction && element.message.submited) {
                if (initial) {
                    fetchCall(element.key)
                }

            }
        })
    }, [message, initial])

    const handleMessageUpdate = (key: string, value: string, prevKey: string, nextKey: string) => {
        setMessage((prev: any) => {
            const updatedItems = prev.map((item: any) => {
                if (item.key === prevKey && item.placement === 'rightQA') {
                    return { ...item, message: { ...item.message, value, submited: true } };
                }
                return item;
            });

            console.log({ updatedItems })
            let array = [...updatedItems]


            if (disease.left[key]?.message) {
                array.push({
                    key,
                    placement: 'left',
                    message: disease.left[key].message
                })
            }


            if (disease.rightQA[key]?.message) {
                array.push({
                    key,
                    placement: 'rightQA',
                    message: disease.rightQA[key].message
                })
            }

            return array;
        });
    };


    const ChatAlg = (key = '', value = '') => {
        console.log(key, value)
        if (key === 'heart_disease_1') {
            setMessage((prv: any) => ([...prv, {
                key: key,
                placement: 'right',
                message: disease['right'][key].message
            },
            {
                key: key,
                placement: 'left',
                message: disease['right'][key].message
            }, {

                key: key,
                placement: 'rightQA',
                message: disease['rightQA'][key].message,
            }]))
        } else if (key.startsWith('heart_disease_')) {
            handleMessageUpdate(key, value, `heart_disease_${Number(key.split('_')[2]) - 1}`, key);
        }
        if (key === 'infection_disease_1') {


            setMessage((prv: any) => ([...prv, {
                key: key,
                placement: 'right',
                message: disease['right'][key].message
            },
            {
                key: key,
                placement: 'left',
                message: disease['left'][key].message
            },
            {

                key: key,
                placement: 'rightQA',
                message: disease['rightQA'][key].message,
            }]))
        } else if (key.startsWith('infection_disease_')) {

            handleMessageUpdate(key, value, `infection_disease_${Number(key.split('_')[2]) - 1}`, key);
        }

        if (key === 'chronic_disease_1') {


            setMessage((prv: any) => ([...prv, {
                key: key,
                placement: 'right',
                message: disease['right'][key].message
            },
            {
                key: key,
                placement: 'left',
                message: disease['left'][key].message
            },
            {

                key: key,
                placement: 'rightQA',
                message: disease['rightQA'][key].message,
            }]))
        } else if (key.startsWith('chronic_disease_')) {

            handleMessageUpdate(key, value, `chronic_disease_${Number(key.split('_')[2]) - 1}`, key);
        }



    };
    return {
        message,
        setMessage,
        ChatAlg,
        setInitial

    };
}




export default useChat;